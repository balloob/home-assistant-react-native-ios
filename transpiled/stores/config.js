'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _interopRequireDefault = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _Config = require('../models/config');

var _Config2 = _interopRequireDefault(_Config);

var _dispatcher = require('../app_dispatcher');

var _dispatcher2 = _interopRequireDefault(_dispatcher);

var _constants = require('../constants');

var _constants2 = _interopRequireDefault(_constants);

var _Store2 = require('./store');

var _Store3 = _interopRequireDefault(_Store2);

var config = new _Config2['default']();

var ConfigStore = (function (_Store) {
  function ConfigStore() {
    _classCallCheck(this, ConfigStore);

    if (_Store != null) {
      _Store.apply(this, arguments);
    }
  }

  _inherits(ConfigStore, _Store);

  _createClass(ConfigStore, [{
    key: 'latitude',
    get: function () {
      return config.latitude;
    }
  }, {
    key: 'longitude',
    get: function () {
      return config.longitude;
    }
  }, {
    key: 'temperature_unit',
    get: function () {
      return config.temperature_unit;
    }
  }, {
    key: 'location_name',
    get: function () {
      return config.location_name;
    }
  }, {
    key: 'time_zone',
    get: function () {
      return config.time_zone;
    }
  }, {
    key: 'components',
    get: function () {
      return config.components;
    }
  }]);

  return ConfigStore;
})(_Store3['default']);

var INSTANCE = new ConfigStore();

INSTANCE.dispatchToken = _dispatcher2['default'].register(function (payload) {
  switch (payload.actionType) {
    case _constants2['default'].ACTION_NEW_CONFIG:
      config = _Config2['default'].fromJSON(payload.config);
      INSTANCE.emitChange();
      break;

    case _constants2['default'].ACTION_LOG_OUT:
      config = new _Config2['default']();
      INSTANCE.emitChange();
      break;
  }
});

exports['default'] = INSTANCE;
module.exports = exports['default'];