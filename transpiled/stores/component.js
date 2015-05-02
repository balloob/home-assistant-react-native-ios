'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _interopRequireDefault = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _List = require('immutable');

var _dispatcher = require('../app_dispatcher');

var _dispatcher2 = _interopRequireDefault(_dispatcher);

var _constants = require('../constants');

var _constants2 = _interopRequireDefault(_constants);

var _Store2 = require('./store');

var _Store3 = _interopRequireDefault(_Store2);

var _configStore = require('./config');

var _configStore2 = _interopRequireDefault(_configStore);

var loadedComponents = _configStore2['default'].components;

var ComponentStore = (function (_Store) {
  function ComponentStore() {
    _classCallCheck(this, ComponentStore);

    if (_Store != null) {
      _Store.apply(this, arguments);
    }
  }

  _inherits(ComponentStore, _Store);

  _createClass(ComponentStore, [{
    key: 'loaded',
    get: function () {
      return loadedComponents;
    }
  }, {
    key: 'isLoaded',
    value: function isLoaded(component) {
      return loadedComponents.contains(component);
    }
  }]);

  return ComponentStore;
})(_Store3['default']);

var INSTANCE = new ComponentStore();

INSTANCE.dispatchToken = _dispatcher2['default'].register(function (payload) {
  switch (payload.actionType) {

    case _constants2['default'].ACTION_NEW_CONFIG:
      _dispatcher2['default'].waitFor([_configStore2['default'].dispatchToken]);
      loadedComponents = _configStore2['default'].components;
      INSTANCE.emitChange();
      break;

    case _constants2['default'].ACTION_REMOTE_EVENT_RECEIVED:
      if (payload.event.event_type !== _constants2['default'].REMOTE_EVENT_COMPONENT_LOADED) {
        break;
      }

      var component = payload.event.data.component;

      if (INSTANCE.isLoaded(component)) {
        break;
      }

      loadedComponents = loadedComponents.push(component);

      INSTANCE.emitChange();
      break;

    case _constants2['default'].ACTION_LOG_OUT:
      _dispatcher2['default'].waitFor([_configStore2['default'].dispatchToken]);
      loadedComponents = _configStore2['default'].components;
      INSTANCE.emitChange();
      break;

  }
});

exports['default'] = INSTANCE;
module.exports = exports['default'];