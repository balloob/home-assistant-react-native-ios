'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { desc = parent = getter = undefined; _again = false; var object = _x,
    property = _x2,
    receiver = _x3; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _Record = require('immutable');

var ImmutableNotification = new _Record.Record({
  id: null,
  message: null }, 'Notification');

var Notification = (function (_ImmutableNotification) {
  function Notification(id, message) {
    _classCallCheck(this, Notification);

    _get(Object.getPrototypeOf(Notification.prototype), 'constructor', this).call(this, {
      id: id,
      message: message });
  }

  _inherits(Notification, _ImmutableNotification);

  return Notification;
})(ImmutableNotification);

exports['default'] = Notification;
module.exports = exports['default'];