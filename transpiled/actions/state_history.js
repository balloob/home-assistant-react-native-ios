'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _interopRequireDefault = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

exports.fetchAll = fetchAll;
exports.fetch = fetch;

var _callApi = require('../call_api');

var _callApi2 = _interopRequireDefault(_callApi);

var _dispatcher = require('../app_dispatcher');

var _dispatcher2 = _interopRequireDefault(_dispatcher);

var _constants = require('../constants');

var _constants2 = _interopRequireDefault(_constants);

var _State = require('../models/state');

var _State2 = _interopRequireDefault(_State);

function newStateHistory(isFetchAll, stateHistory) {
  if (isFetchAll || stateHistory.length > 0) {
    _dispatcher2['default'].dispatch({
      actionType: _constants2['default'].ACTION_NEW_STATE_HISTORY,
      stateHistory: stateHistory.map(function (states) {
        return states.map(_State2['default'].fromJSON);
      }),
      isFetchAll: isFetchAll });
  }
}

function fetchAll() {
  _callApi2['default']('GET', 'history/period').then(function (stateHistory) {
    return newStateHistory(true, stateHistory);
  });
}

function fetch(entityId) {
  _callApi2['default']('GET', 'history/period?filter_entity_id=' + entityId).then(function (stateHistory) {
    return newStateHistory(false, stateHistory);
  });
}