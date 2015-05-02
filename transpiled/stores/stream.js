'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _interopRequireDefault = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _dispatcher = require('../app_dispatcher');

var _dispatcher2 = _interopRequireDefault(_dispatcher);

var _constants = require('../constants');

var _constants2 = _interopRequireDefault(_constants);

var _Store2 = require('./store');

var _Store3 = _interopRequireDefault(_Store2);

var STATE_CONNECTED = 'STATE_CONNECTED';
var STATE_DISCONNECTED = 'STATE_DISCONNECTED';
var STATE_ERROR = 'STATE_ERROR';

var state = STATE_DISCONNECTED;

var ConnectionStore = (function (_Store) {
  function ConnectionStore() {
    _classCallCheck(this, ConnectionStore);

    if (_Store != null) {
      _Store.apply(this, arguments);
    }
  }

  _inherits(ConnectionStore, _Store);

  _createClass(ConnectionStore, [{
    key: 'state',
    get: function () {
      return state;
    }
  }, {
    key: 'isStreaming',
    get: function () {
      return state === this.STATE_CONNECTED;
    }
  }, {
    key: 'hasError',
    get: function () {
      return state === this.STATE_ERROR;
    }
  }]);

  return ConnectionStore;
})(_Store3['default']);

var INSTANCE = new ConnectionStore();

INSTANCE.STATE_CONNECTED = STATE_CONNECTED;
INSTANCE.STATE_DISCONNECTED = STATE_DISCONNECTED;
INSTANCE.STATE_ERROR = STATE_ERROR;

INSTANCE.dispatchToken = _dispatcher2['default'].register(function (payload) {
  switch (payload.actionType) {
    case _constants2['default'].ACTION_STREAM_START:
      state = STATE_CONNECTED;
      INSTANCE.emitChange();
      break;

    case _constants2['default'].ACTION_STREAM_STOP:
      state = STATE_DISCONNECTED;
      INSTANCE.emitChange();
      break;

    case _constants2['default'].ACTION_STREAM_ERROR:
      state = STATE_ERROR;
      INSTANCE.emitChange();
      break;
  }
});

exports['default'] = INSTANCE;
module.exports = exports['default'];