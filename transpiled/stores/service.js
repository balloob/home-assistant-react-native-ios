'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _interopRequireDefault = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _Map$List = require('immutable');

var _dispatcher = require('../app_dispatcher');

var _dispatcher2 = _interopRequireDefault(_dispatcher);

var _constants = require('../constants');

var _constants2 = _interopRequireDefault(_constants);

var _Store2 = require('./store');

var _Store3 = _interopRequireDefault(_Store2);

var services = new _Map$List.Map();

var ServiceStore = (function (_Store) {
  function ServiceStore() {
    _classCallCheck(this, ServiceStore);

    if (_Store != null) {
      _Store.apply(this, arguments);
    }
  }

  _inherits(ServiceStore, _Store);

  _createClass(ServiceStore, [{
    key: 'all',
    get: function () {
      return services;
    }
  }, {
    key: 'has',
    value: function has(domain, service) {
      var domainServices = services.get(domain);

      return domainServices && domainServices.contains(service);
    }
  }, {
    key: 'getServices',
    value: function getServices(domain) {
      return services.get(domain) || new _Map$List.List();
    }
  }]);

  return ServiceStore;
})(_Store3['default']);

var INSTANCE = new ServiceStore();

INSTANCE.dispatchToken = _dispatcher2['default'].register(function (payload) {
  switch (payload.actionType) {
    case _constants2['default'].ACTION_NEW_SERVICES:
      services = new _Map$List.Map().withMutations(function (map) {
        payload.services.forEach(function (domainObj) {
          map.set(domainObj.domain, new _Map$List.List(domainObj.services));
        });
      });

      INSTANCE.emitChange();
      break;

    case _constants2['default'].ACTION_REMOTE_EVENT_RECEIVED:
      if (payload.event.event_type !== _constants2['default'].REMOTE_EVENT_SERVICE_REGISTERED) {
        break;
      }

      var _payload$event$data = payload.event.data,
          domain = _payload$event$data.domain,
          service = _payload$event$data.service;

      if (INSTANCE.has(domain, service)) {
        break;
      }

      var curServices = INSTANCE.getServices(domain);

      services = services.set(domain, curServices.push(service));

      INSTANCE.emitChange();
      break;

    case _constants2['default'].ACTION_LOG_OUT:
      services = new _Map$List.Map();
      INSTANCE.emitChange();
      break;
  }
});

exports['default'] = INSTANCE;
module.exports = exports['default'];