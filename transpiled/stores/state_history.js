'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _interopRequireDefault = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _import = require('lodash');

var _import2 = _interopRequireDefault(_import);

var _dispatcher = require('../app_dispatcher');

var _dispatcher2 = _interopRequireDefault(_dispatcher);

var _constants = require('../constants');

var _constants2 = _interopRequireDefault(_constants);

var _Store2 = require('../stores/store');

var _Store3 = _interopRequireDefault(_Store2);

// Consider data stale if not fetched in last minute
var STALE_TIME = 60000;

var _lastUpdated = null;
var _lastUpdatedEntity = {};
var _history = {};

var HistoryStore = (function (_Store) {
  function HistoryStore() {
    _classCallCheck(this, HistoryStore);

    if (_Store != null) {
      _Store.apply(this, arguments);
    }
  }

  _inherits(HistoryStore, _Store);

  _createClass(HistoryStore, [{
    key: 'isStale',
    value: function isStale() {
      var entityId = arguments[0] === undefined ? null : arguments[0];

      // do we want to know if fetchAll or specific entity is stale.
      var lastUpdate = entityId === null ? _lastUpdated : _lastUpdatedEntity[entityId] || null;

      return lastUpdate === null || new Date().getTime() - lastUpdate.getTime() > STALE_TIME;
    }
  }, {
    key: 'get',
    value: function get(entityId) {
      return _history[entityId] || null;
    }
  }, {
    key: 'all',
    get: function () {
      return _import2['default'].sortBy(_import2['default'].values(_history), function (coll) {
        return coll[0].entityId;
      });
    }
  }]);

  return HistoryStore;
})(_Store3['default']);

var INSTANCE = new HistoryStore();

INSTANCE.dispatchToken = _dispatcher2['default'].register(function (payload) {
  switch (payload.actionType) {
    case _constants2['default'].ACTION_NEW_STATE_HISTORY:
      _import2['default'].forEach(payload.stateHistory, function (entityStateHistory) {
        if (entityStateHistory.length === 0) return;

        var key = entityStateHistory[0].entityId;

        _history[key] = entityStateHistory;
        _lastUpdatedEntity[key] = new Date();
      });

      if (payload.isFetchAll) {
        _lastUpdated = new Date();
      }

      INSTANCE.emitChange();
      break;

    case _constants2['default'].ACTION_LOG_OUT:
      _lastUpdated = null;
      _lastUpdatedEntity = {};
      _history = {};
      INSTANCE.emitChange();
      break;
  }
});

exports['default'] = INSTANCE;
module.exports = exports['default'];