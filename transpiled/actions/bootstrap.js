'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _interopRequireDefault = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

exports.newBootstrapData = newBootstrapData;
exports.fetch = fetch;

var _callApi = require('../call_api');

var _callApi2 = _interopRequireDefault(_callApi);

var _dispatcher = require('../app_dispatcher');

var _dispatcher2 = _interopRequireDefault(_dispatcher);

var _constants = require('../constants');

var _constants2 = _interopRequireDefault(_constants);

var _newStates = require('./state');

var _newServices = require('./service');

var _newEvents = require('./event');

var _newConfig = require('./config');

function newBootstrapData(data) {
  _newStates.newStates(data.states, true);
  _newServices.newServices(data.services);
  _newEvents.newEvents(data.events);
  _newConfig.newConfig(data.config);
}

function fetch() {
  var authToken = arguments[0] === undefined ? false : arguments[0];

  return _callApi2['default']('GET', 'bootstrap').then(newBootstrapData);
}