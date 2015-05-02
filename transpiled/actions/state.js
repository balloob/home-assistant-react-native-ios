'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _interopRequireDefault = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

exports.newStates = newStates;
exports.set = set;
exports.fetch = fetch;
exports.fetchAll = fetchAll;

var _callApi = require('../call_api');

var _callApi2 = _interopRequireDefault(_callApi);

var _dispatcher = require('../app_dispatcher');

var _dispatcher2 = _interopRequireDefault(_dispatcher);

var _ACTION_NEW_STATES = require('../constants');

var _notify = require('./notification');

function newStates(states, replace) {
  if (states.length > 0 || replace) {
    _dispatcher2['default'].dispatch({
      actionType: _ACTION_NEW_STATES.ACTION_NEW_STATES,
      states: states,
      replace: !!replace });
  }
}

function set(entityId, state) {
  var attributes = arguments[2] === undefined ? false : arguments[2];

  var payload = { state: state };

  if (attributes) {
    payload.attributes = attributes;
  }

  _callApi2['default']('POST', 'states/' + entityId, payload).then(function (newState) {
    _notify.notify('State of ' + entityId + ' set to ' + state + '.');

    newStates([newState]);
  });
}

function fetch(entityId) {
  _callApi2['default']('GET', 'states/' + entityId).then(function (newState) {
    newStates([newState]);
  });
}

function fetchAll() {
  _callApi2['default']('GET', 'states').then(function (newJSONStates) {
    newStates(newJSONStates, true);
  });
}