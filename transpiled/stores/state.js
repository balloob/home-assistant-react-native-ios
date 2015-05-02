'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _interopRequireDefault = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _Map = require('immutable');

var _dispatcher = require('../app_dispatcher');

var _dispatcher2 = _interopRequireDefault(_dispatcher);

var _constants = require('../constants');

var _constants2 = _interopRequireDefault(_constants);

var _Store2 = require('./store');

var _Store3 = _interopRequireDefault(_Store2);

var _streamStore = require('./stream');

var _streamStore2 = _interopRequireDefault(_streamStore);

var _State = require('../models/state');

var _State2 = _interopRequireDefault(_State);

var states = new _Map.Map();

/**
 * Default sorter for a sequence of states.
 */
function defaultStateSort(state) {
  return state.entityId;
}

/**
 * Add a state.
 */
function pushNewState(jsonObj) {
  states = states.set(jsonObj.entity_id, _State2['default'].fromJSON(jsonObj));
}

/**
 * Add new states
 */
function pushNewStates(newStates, removeNonPresent) {
  var currentStates = removeNonPresent ? new _Map.Map() : states;

  states = currentStates.withMutations(function (map) {
    newStates.forEach(function (jsonObj) {
      return map.set(jsonObj.entity_id, _State2['default'].fromJSON(jsonObj));
    });

    return map;
  });
}

var StateStore = (function (_Store) {
  function StateStore() {
    _classCallCheck(this, StateStore);

    if (_Store != null) {
      _Store.apply(this, arguments);
    }
  }

  _inherits(StateStore, _Store);

  _createClass(StateStore, [{
    key: 'all',
    get: function () {
      return states.valueSeq().sortBy(defaultStateSort);
    }
  }, {
    key: 'get',
    value: function get(entityId) {
      entityId = entityId.toLowerCase();

      return states.get(entityId) || null;
    }
  }, {
    key: 'gets',
    value: function gets(entityIds) {
      entityIds = entityIds.map(function (entityId) {
        return entityId.toLowerCase();
      });

      return states.valueSeq().filter(function (state) {
        return entityIds.indexOf(state.entityId) !== -1;
      }).sortBy(defaultStateSort);
    }
  }, {
    key: 'entityIDs',
    get: function () {
      return states.keySeq().sort();
    }
  }, {
    key: 'domains',
    get: function () {
      return states.keySeq().map(function (entity_id) {
        return entity_id.split('.')[0];
      }).sort().toOrderedSet();
    }
  }]);

  return StateStore;
})(_Store3['default']);

var INSTANCE = new StateStore();

INSTANCE.dispatchToken = _dispatcher2['default'].register(function (payload) {
  switch (payload.actionType) {
    case _constants2['default'].ACTION_NEW_STATES:
      // when we're streaming updates, we only care about full updates
      // because partial updates will be processed via remote events.
      if (!_streamStore2['default'].isStreaming || payload.replace) {
        pushNewStates(payload.states, payload.replace);
        INSTANCE.emitChange();
      }
      break;

    case _constants2['default'].ACTION_REMOTE_EVENT_RECEIVED:
      if (payload.event.event_type === _constants2['default'].REMOTE_EVENT_STATE_CHANGED) {
        pushNewState(payload.event.data.new_state);
        INSTANCE.emitChange();
      }
      break;

    case _constants2['default'].ACTION_LOG_OUT:
      states = new _Map.Map();
      INSTANCE.emitChange();
      break;
  }
});

exports['default'] = INSTANCE;
module.exports = exports['default'];