'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.notify = notify;
var dispatcher = require('../app_dispatcher');

var _require = require('../constants');

var ACTION_NEW_NOTIFICATION = _require.ACTION_NEW_NOTIFICATION;

function notify(message) {
  dispatcher.dispatch({
    actionType: ACTION_NEW_NOTIFICATION,
    message: message });
}