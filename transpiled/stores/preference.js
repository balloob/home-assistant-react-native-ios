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

try {
  var storage = localStorage;
} catch (err) {
  var storage = {};
}

var PREF_AUTH_TOKEN = 'PREF_AUTH_TOKEN';
var DEFAULT_AUTH_TOKEN = null;

var PREF_USE_STREAMING = 'PREF_USE_STREAMING';
var DEFAULT_USE_STREAMING = true;

function saveValue(key, value) {
  storage[key] = JSON.stringify(value);
}

function getValue(key, defaultValue) {
  return key in storage ? JSON.parse(storage[key]) : defaultValue;
}

function removeValue(key) {
  if (key in storage) {
    storage.removeItem(key);
    return true;
  }
  return false;
}

var PreferenceStore = (function (_Store) {
  function PreferenceStore() {
    _classCallCheck(this, PreferenceStore);

    if (_Store != null) {
      _Store.apply(this, arguments);
    }
  }

  _inherits(PreferenceStore, _Store);

  _createClass(PreferenceStore, [{
    key: 'useStreaming',
    get: function () {
      return getValue(PREF_USE_STREAMING, DEFAULT_USE_STREAMING);
    }
  }, {
    key: 'hasAuthToken',
    get: function () {
      return this.authToken !== null;
    }
  }, {
    key: 'authToken',
    get: function () {
      return getValue(PREF_AUTH_TOKEN, DEFAULT_AUTH_TOKEN);
    }
  }]);

  return PreferenceStore;
})(_Store3['default']);

var INSTANCE = new PreferenceStore();

INSTANCE.dispatchToken = _dispatcher2['default'].register(function (payload) {
  switch (payload.actionType) {
    case _constants2['default'].ACTION_VALID_AUTH_TOKEN:
      if (payload.rememberLogin) {
        saveValue(PREF_AUTH_TOKEN, payload.authToken);
        INSTANCE.emitChange();
      }
      break;

    case _constants2['default'].ACTION_LOG_OUT:
      if (removeValue(PREF_AUTH_TOKEN)) {
        INSTANCE.emitChange();
      }
      break;

    case _constants2['default'].ACTION_STREAM_START:
      saveValue(PREF_USE_STREAMING, true);
      INSTANCE.emitChange();
      break;

    case _constants2['default'].ACTION_STREAM_STOP:
      saveValue(PREF_USE_STREAMING, false);
      INSTANCE.emitChange();
      break;
  }
});

exports['default'] = INSTANCE;
module.exports = exports['default'];