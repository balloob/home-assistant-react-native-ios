'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _interopRequireDefault = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _List = require('immutable');

var _dispatcher = require('../app_dispatcher');

var _dispatcher2 = _interopRequireDefault(_dispatcher);

var _constants = require('../constants');

var _constants2 = _interopRequireDefault(_constants);

var _Store2 = require('../stores/store');

var _Store3 = _interopRequireDefault(_Store2);

var _LogbookEntry = require('../models/logbook_entry');

var _LogbookEntry2 = _interopRequireDefault(_LogbookEntry);

// Consider data stale if not fetched in last minute
var STALE_TIME = 60000;

var _lastUpdated = null;
var _logbook = new _List.List();

var HumanLogStore = (function (_Store) {
  function HumanLogStore() {
    _classCallCheck(this, HumanLogStore);

    if (_Store != null) {
      _Store.apply(this, arguments);
    }
  }

  _inherits(HumanLogStore, _Store);

  _createClass(HumanLogStore, [{
    key: 'isStale',
    value: function isStale() {
      return _lastUpdated === null || new Date().getTime() - _lastUpdated.getTime() > STALE_TIME;
    }
  }, {
    key: 'all',
    get: function () {
      return _logbook;
    }
  }]);

  return HumanLogStore;
})(_Store3['default']);

var INSTANCE = new HumanLogStore();

INSTANCE.dispatchToken = _dispatcher2['default'].register(function (payload) {
  switch (payload.actionType) {
    case _constants2['default'].ACTION_NEW_LOGBOOK:
      _logbook = new _List.List(payload.logbookEntries.map(function (entry) {
        return _LogbookEntry2['default'].fromJSON(entry);
      }));

      _lastUpdated = new Date();

      INSTANCE.emitChange();
      break;

    case _constants2['default'].ACTION_LOG_OUT:
      _lastUpdated = null;
      _logbook = new _List.List();
      INSTANCE.emitChange();
      break;
  }
});

exports['default'] = INSTANCE;
module.exports = exports['default'];