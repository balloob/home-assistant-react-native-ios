'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _interopRequireDefault = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

exports.fetchAll = fetchAll;
exports.start = start;
exports.stop = stop;

var _import = require('lodash');

var _import2 = _interopRequireDefault(_import);

var _dispatcher = require('../app_dispatcher');

var _dispatcher2 = _interopRequireDefault(_dispatcher);

var _constants = require('../constants');

var _constants2 = _interopRequireDefault(_constants);

var _fetchData = require('./bootstrap');

var SYNC_INTERVAL = 30000;

var isSyncing = false;

function fetchAll() {
  _dispatcher2['default'].dispatch({
    actionType: _constants2['default'].ACTION_FETCH_ALL });

  _fetchData.fetch();

  if (isSyncing) {
    scheduleSync();
  }
}

var scheduleSync = _import2['default'].debounce(fetchAll, SYNC_INTERVAL);

function start() {
  isSyncing = true;

  fetchAll();
}

function stop() {
  isSyncing = false;

  scheduleSync.cancel();
}