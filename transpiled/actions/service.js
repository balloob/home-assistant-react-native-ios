'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _interopRequireDefault = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

exports.newServices = newServices;
exports.callTurnOn = callTurnOn;
exports.callTurnOff = callTurnOff;
exports.callService = callService;
exports.fetchAll = fetchAll;

var _callApi = require('../call_api');

var _callApi2 = _interopRequireDefault(_callApi);

var _dispatcher = require('../app_dispatcher');

var _dispatcher2 = _interopRequireDefault(_dispatcher);

var _constants = require('../constants');

var _constants2 = _interopRequireDefault(_constants);

var _notify = require('./notification');

var _newStates = require('./state');

function newServices(services) {
  if (services.length > 0) {
    _dispatcher2['default'].dispatch({
      actionType: _constants2['default'].ACTION_NEW_SERVICES,
      services: services });
  }
}

function callTurnOn(entity_id) {
  return callService('homeassistant', 'turn_on', { entity_id: entity_id });
}

function callTurnOff(entity_id) {
  return callService('homeassistant', 'turn_off', { entity_id: entity_id });
}

function callService(domain, service) {
  var parameters = arguments[2] === undefined ? {} : arguments[2];

  return _callApi2['default']('POST', 'services/' + domain + '/' + service, parameters).then(function (changedStates) {
    if (service == 'turn_on' && parameters.entity_id) {
      _notify.notify('Turned on ' + parameters.entity_id + '.');
    } else if (service == 'turn_off' && parameters.entity_id) {
      _notify.notify('Turned off ' + parameters.entity_id + '.');
    } else {
      _notify.notify('Service ' + domain + '/' + service + ' called.');
    }

    _newStates.newStates(changedStates);
  });
}

function fetchAll() {
  return _callApi2['default']('GET', 'services').then(newServices);
}