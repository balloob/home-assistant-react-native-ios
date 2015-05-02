'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _interopRequireWildcard = function (obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } };

var _interopRequireDefault = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

/**
 * Fetch the loaded components as a way to validate the API.
 * Second argument is optional options object:
 *   - useStreaming: to enable streaming (default: true if supported)
 *   - rememberLogin: to store login in local storage (default: false)
 */
exports.validate = validate;
exports.logOut = logOut;

var _callApi = require('../call_api');

var _callApi2 = _interopRequireDefault(_callApi);

var _dispatcher = require('../app_dispatcher');

var _dispatcher2 = _interopRequireDefault(_dispatcher);

var _constants = require('../constants');

var _constants2 = _interopRequireDefault(_constants);

var _import = require('./sync');

var syncActions = _interopRequireWildcard(_import);

var _import2 = require('./stream');

var streamActions = _interopRequireWildcard(_import2);

var _fetchData = require('./bootstrap');

function validate(authToken, _ref) {
  var _ref$useStreaming = _ref.useStreaming;
  var useStreaming = _ref$useStreaming === undefined ? streamActions.isSupported : _ref$useStreaming;
  var _ref$rememberLogin = _ref.rememberLogin;
  var rememberLogin = _ref$rememberLogin === undefined ? false : _ref$rememberLogin;
  var _ref$host = _ref.host;
  var host = _ref$host === undefined ? '' : _ref$host;

  _dispatcher2['default'].dispatch({
    actionType: _constants2['default'].ACTION_VALIDATING_AUTH_TOKEN,
    authToken: authToken,
    host: host });

  _fetchData.fetch().then(function () {
    _dispatcher2['default'].dispatch({
      actionType: _constants2['default'].ACTION_VALID_AUTH_TOKEN,
      authToken: authToken,
      rememberLogin: rememberLogin });

    if (__DEMO__) {
      // hides the refresh button
      _dispatcher2['default'].dispatch({
        actionType: _constants2['default'].ACTION_STREAM_START });

      syncActions.fetchAll();
      return;
    }

    if (useStreaming) {
      streamActions.start(authToken, false);
    } else {
      syncActions.start();
    }
  }, function (payload) {
    _dispatcher2['default'].dispatch({
      actionType: _constants2['default'].ACTION_INVALID_AUTH_TOKEN,
      message: payload.message });
  });
}

function logOut() {
  _dispatcher2['default'].dispatch({
    actionType: _constants2['default'].ACTION_LOG_OUT });
}