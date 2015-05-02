'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _interopRequireDefault = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

exports.newEvents = newEvents;
exports.fetchAll = fetchAll;
exports.fire = fire;

var _callApi = require('../call_api');

var _callApi2 = _interopRequireDefault(_callApi);

var _dispatcher = require('../app_dispatcher');

var _dispatcher2 = _interopRequireDefault(_dispatcher);

var _constants = require('../constants');

var _constants2 = _interopRequireDefault(_constants);

var _notify = require('./notification');

function newEvents(events) {
  _dispatcher2['default'].dispatch({
    actionType: _constants2['default'].ACTION_NEW_EVENTS,
    events: events });
}

function fetchAll() {
  _callApi2['default']('GET', 'events').then(newEvents);
}

function fire(eventType) {
  var eventData = arguments[1] === undefined ? {} : arguments[1];

  return _callApi2['default']('POST', 'events/' + eventType, eventData).then(function () {
    _notify.notify('Event ' + eventType + ' successful fired!');

    _dispatcher2['default'].dispatch({
      actionType: _constants2['default'].ACTION_EVENT_FIRED,
      eventType: eventType,
      eventData: eventData });
  });
}