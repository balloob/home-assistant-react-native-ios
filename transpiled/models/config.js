'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { desc = parent = getter = undefined; _again = false; var object = _x,
    property = _x2,
    receiver = _x3; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _Record$List = require('immutable');

var ImmutableConfig = new _Record$List.Record({
  latitude: null,
  longitude: null,
  temperature_unit: null,
  location_name: null,
  time_zone: null,
  components: null }, 'Config');

var Config = (function (_ImmutableConfig) {
  function Config(latitude, longitude, temperature_unit, location_name, time_zone, components) {
    _classCallCheck(this, Config);

    _get(Object.getPrototypeOf(Config.prototype), 'constructor', this).call(this, {
      latitude: latitude,
      longitude: longitude,
      temperature_unit: temperature_unit,
      location_name: location_name || '',
      time_zone: time_zone,
      components: new _Record$List.List(components) });
  }

  _inherits(Config, _ImmutableConfig);

  _createClass(Config, null, [{
    key: 'fromJSON',
    value: function fromJSON(_ref) {
      var latitude = _ref.latitude;
      var longitude = _ref.longitude;
      var temperature_unit = _ref.temperature_unit;
      var location_name = _ref.location_name;
      var time_zone = _ref.time_zone;
      var components = _ref.components;

      return new Config(latitude, longitude, temperature_unit, location_name, time_zone, components);
    }
  }]);

  return Config;
})(ImmutableConfig);

exports['default'] = Config;
module.exports = exports['default'];