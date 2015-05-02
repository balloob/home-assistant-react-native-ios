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

var _Record = require('immutable');

var _parseDateTime = require('../util');

var ImmutableLogbookEntry = new _Record.Record({
  when: null,
  name: null,
  message: null,
  domain: null,
  entityId: null }, 'LogbookEntry');

var LogbookEntry = (function (_ImmutableLogbookEntry) {
  function LogbookEntry(when, name, message, domain, entityId) {
    _classCallCheck(this, LogbookEntry);

    _get(Object.getPrototypeOf(LogbookEntry.prototype), 'constructor', this).call(this, {
      when: when,
      name: name,
      message: message,
      domain: domain,
      entityId: entityId });
  }

  _inherits(LogbookEntry, _ImmutableLogbookEntry);

  _createClass(LogbookEntry, null, [{
    key: 'fromJSON',
    value: function fromJSON(_ref) {
      var when = _ref.when;
      var name = _ref.name;
      var message = _ref.message;
      var domain = _ref.domain;
      var entity_id = _ref.entity_id;

      return new LogbookEntry(_parseDateTime.parseDateTime(when), name, message, domain, entity_id);
    }
  }]);

  return LogbookEntry;
})(ImmutableLogbookEntry);

exports['default'] = LogbookEntry;
module.exports = exports['default'];