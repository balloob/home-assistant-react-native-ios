'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _EventEmitter2 = require('events');

var CHANGE_EVENT = 'change';

var Store = (function (_EventEmitter) {
  function Store() {
    _classCallCheck(this, Store);

    if (_EventEmitter != null) {
      _EventEmitter.apply(this, arguments);
    }
  }

  _inherits(Store, _EventEmitter);

  _createClass(Store, [{
    key: 'emitChange',
    value: function emitChange() {
      this.emit(CHANGE_EVENT);
    }
  }, {
    key: 'addChangeListener',
    value: function addChangeListener(callback) {
      this.on(CHANGE_EVENT, callback);
    }
  }, {
    key: 'removeChangeListener',
    value: function removeChangeListener(callback) {
      this.removeListener(CHANGE_EVENT, callback);
    }
  }]);

  return Store;
})(_EventEmitter2.EventEmitter);

exports['default'] = Store;
module.exports = exports['default'];