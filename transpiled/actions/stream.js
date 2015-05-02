'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _interopRequireWildcard = function (obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } };

var _interopRequireDefault = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

exports.isSupported = isSupported;
exports.start = start;
exports.stop = stop;

var _import = require('lodash');

var _import2 = _interopRequireDefault(_import);

var _dispatcher = require('../app_dispatcher');

var _dispatcher2 = _interopRequireDefault(_dispatcher);

var _constants = require('../constants');

var _constants2 = _interopRequireDefault(_constants);

var _import3 = require('./sync');

var syncActions = _interopRequireWildcard(_import3);

// maximum time we can go without receiving anything from the server
var MAX_INACTIVITY_TIME = 60000;

var source = null;
var _authToken = null;

// Called on each interaction with the server
// So when debounce is done we exceeded MAX_INACTIVITY_TIME.
// Done because the error event listener on EventSource cannot be trusted.
var scheduleHealthCheck = _import2['default'].debounce(function () {
  start(_authToken);
}, MAX_INACTIVITY_TIME);

var stopStream = function stopStream() {
  source.close();
  source = null;
  _authToken = null;
  scheduleHealthCheck.cancel();
};

function isSupported() {
  return 'EventSource' in window;
}

function start(authToken) {
  var syncOnInitialConnect = arguments[1] === undefined ? true : arguments[1];

  if (source !== null) {
    stopStream();
  }

  var url = '/api/stream';

  if (authToken) {
    url += '?api_password=' + authToken;
  }

  source = new EventSource(url);
  _authToken = authToken;

  source.addEventListener('open', function () {
    scheduleHealthCheck();

    _dispatcher2['default'].dispatch({
      actionType: _constants2['default'].ACTION_STREAM_START });

    // We are streaming, fetch latest info but stop streaming
    syncActions.stop();

    if (syncOnInitialConnect) {
      syncActions.fetchAll();
    } else {
      syncOnInitialConnect = true;
    }
  }, false);

  source.addEventListener('message', function (ev) {
    scheduleHealthCheck();

    if (ev.data === 'ping') {
      return;
    }

    _dispatcher2['default'].dispatch({
      actionType: _constants2['default'].ACTION_REMOTE_EVENT_RECEIVED,
      event: JSON.parse(ev.data) });
  }, false);

  source.addEventListener('error', function () {
    if (source.readyState !== EventSource.CLOSED) {
      _dispatcher2['default'].dispatch({
        actionType: _constants2['default'].ACTION_STREAM_ERROR });
    }
  }, false);
}

function stop() {
  stopStream();

  _dispatcher2['default'].dispatch({
    actionType: _constants2['default'].ACTION_STREAM_STOP });

  syncActions.start();
}