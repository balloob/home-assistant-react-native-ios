'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _interopRequireDefault = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

exports.newConfig = newConfig;
exports.fetch = fetch;

var _callApi = require('../call_api');

var _callApi2 = _interopRequireDefault(_callApi);

var _dispatcher = require('../app_dispatcher');

var _dispatcher2 = _interopRequireDefault(_dispatcher);

var _constants = require('../constants');

var _constants2 = _interopRequireDefault(_constants);

function newConfig(config) {
  _dispatcher2['default'].dispatch({
    actionType: _constants2['default'].ACTION_NEW_CONFIG,
    config: config });
}

function fetch() {
  return _callApi2['default']('GET', 'config').then(newConfig);
}