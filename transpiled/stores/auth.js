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

var _Store2 = require('../stores/store');

var _Store3 = _interopRequireDefault(_Store2);

var isValidating = false;
var isLoggedIn = false;
var authToken = '';
var host = '';
var lastAttemptInvalid = false;
var lastAttemptMessage = '';

var AuthStore = (function (_Store) {
  function AuthStore() {
    _classCallCheck(this, AuthStore);

    if (_Store != null) {
      _Store.apply(this, arguments);
    }
  }

  _inherits(AuthStore, _Store);

  _createClass(AuthStore, [{
    key: 'isValidating',
    get: function () {
      return isValidating;
    }
  }, {
    key: 'isLoggedIn',
    get: function () {
      return isLoggedIn;
    }
  }, {
    key: 'authToken',
    get: function () {
      return authToken;
    }
  }, {
    key: 'host',
    get: function () {
      return host;
    }
  }, {
    key: 'lastAttemptInvalid',
    get: function () {
      return lastAttemptInvalid;
    }
  }, {
    key: 'lastAttemptMessage',
    get: function () {
      return lastAttemptMessage;
    }
  }]);

  return AuthStore;
})(_Store3['default']);

var INSTANCE = new AuthStore();

INSTANCE.dispatchToken = _dispatcher2['default'].register(function (payload) {
  switch (payload.actionType) {
    case _constants2['default'].ACTION_VALIDATING_AUTH_TOKEN:
      isValidating = true;
      authToken = payload.authToken;
      host = payload.host;

      INSTANCE.emitChange();
      break;

    case _constants2['default'].ACTION_VALID_AUTH_TOKEN:
      isValidating = false;
      isLoggedIn = true;

      lastAttemptInvalid = false;
      lastAttemptMessage = '';

      INSTANCE.emitChange();
      break;

    case _constants2['default'].ACTION_INVALID_AUTH_TOKEN:
      isValidating = false;
      isLoggedIn = false;
      authToken = '';
      host = '';
      lastAttemptInvalid = true;
      lastAttemptMessage = payload.message || 'Unexpected result from API';

      INSTANCE.emitChange();
      break;

    case _constants2['default'].ACTION_LOG_OUT:
      isValidating = false;
      isLoggedIn = false;
      authToken = '';
      host = '';
      lastAttemptInvalid = false;
      lastAttemptMessage = '';

      INSTANCE.emitChange();
      break;
  }
});

exports['default'] = INSTANCE;
module.exports = exports['default'];