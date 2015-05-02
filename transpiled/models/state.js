'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _interopRequireDefault = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

var _slicedToArray = function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x2, _x3, _x4) { var _again = true; _function: while (_again) { desc = parent = getter = undefined; _again = false; var object = _x2,
    property = _x3,
    receiver = _x4; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x2 = parent; _x3 = property; _x4 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _Record = require('immutable');

var _serviceStore = require('../stores/service');

var _serviceStore2 = _interopRequireDefault(_serviceStore);

var _parseDateTime = require('../util');

var ImmutableState = new _Record.Record({
  entityId: null,
  domain: null,
  objectId: null,
  state: null,
  entityDisplay: null,
  stateDisplay: null,
  lastChanged: null,
  lastChangedAsDate: null,
  attributes: {},
  isCustomGroup: null }, 'State');

var State = (function (_ImmutableState) {
  function State(entityId, state, lastChanged) {
    var attributes = arguments[3] === undefined ? {} : arguments[3];

    _classCallCheck(this, State);

    var _entityId$split = entityId.split('.');

    var _entityId$split2 = _slicedToArray(_entityId$split, 2);

    var domain = _entityId$split2[0];
    var objectId = _entityId$split2[1];

    var stateDisplay = state.replace(/_/g, ' ');

    if (attributes.unit_of_measurement) {
      stateDisplay += ' ' + attributes.unit_of_measurement;
    }

    _get(Object.getPrototypeOf(State.prototype), 'constructor', this).call(this, {
      entityId: entityId,
      domain: domain,
      objectId: objectId,
      state: state,
      stateDisplay: stateDisplay,
      lastChanged: lastChanged,
      attributes: attributes,
      entityDisplay: attributes.friendly_name || objectId.replace(/_/g, ' '),
      lastChangedAsDate: _parseDateTime.parseDateTime(lastChanged),
      isCustomGroup: domain === 'group' && !attributes.auto });
  }

  _inherits(State, _ImmutableState);

  _createClass(State, [{
    key: 'canToggle',
    get: function () {
      // groups that have the on/off state or if there is a turn_on service
      return this.domain === 'group' && (this.state === 'on' || this.state === 'off') || _serviceStore2['default'].has(this.domain, 'turn_on');
    }
  }], [{
    key: 'fromJSON',
    value: function fromJSON(_ref) {
      var entity_id = _ref.entity_id;
      var state = _ref.state;
      var last_changed = _ref.last_changed;
      var attributes = _ref.attributes;

      return new State(entity_id, state, last_changed, attributes);
    }
  }]);

  return State;
})(ImmutableState);

exports['default'] = State;
module.exports = exports['default'];