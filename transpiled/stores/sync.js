'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _interopRequireDefault = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _dispatcher = require('../app_dispatcher');

var _dispatcher2 = _interopRequireDefault(_dispatcher);

var _constants = require('../constants');

var _constants2 = _interopRequireDefault(_constants);

var _Store2 = require('../stores/store');

var _Store3 = _interopRequireDefault(_Store2);

var NUM_TYPES = 4;

var initialLoadDone = false;
var loaded = [];

function contains(action) {
  return loaded.indexOf(action) !== -1;
}

function allLoaded() {
  return loaded.length === NUM_TYPES;
}

var SyncStore = (function (_Store) {
  function SyncStore() {
    _classCallCheck(this, SyncStore);

    if (_Store != null) {
      _Store.apply(this, arguments);
    }
  }

  _inherits(SyncStore, _Store);

  _createClass(SyncStore, [{
    key: 'isFetching',
    get: function () {
      return !allLoaded();
    }
  }, {
    key: 'initialLoadDone',
    get: function () {
      return initialLoadDone;
    }
  }, {
    key: 'componentsLoaded',
    get: function () {
      return contains(_constants2['default'].ACTION_NEW_CONFIG);
    }
  }, {
    key: 'eventsLoaded',
    get: function () {
      return contains(_constants2['default'].ACTION_NEW_EVENTS);
    }
  }, {
    key: 'servicesLoaded',
    get: function () {
      return contains(_constants2['default'].ACTION_NEW_SERVICES);
    }
  }, {
    key: 'statesLoaded',
    get: function () {
      return contains(_constants2['default'].ACTION_NEW_STATES);
    }
  }]);

  return SyncStore;
})(_Store3['default']);

var INSTANCE = new SyncStore();

INSTANCE.dispatchToken = _dispatcher2['default'].register(function (payload) {
  switch (payload.actionType) {
    case _constants2['default'].ACTION_FETCH_ALL:
      loaded = [];
      INSTANCE.emitChange();
      break;

    case _constants2['default'].ACTION_NEW_CONFIG:
    case _constants2['default'].ACTION_NEW_EVENTS:
    case _constants2['default'].ACTION_NEW_SERVICES:
    case _constants2['default'].ACTION_NEW_STATES:
      if (!contains(payload.actionType)) {
        loaded.push(payload.actionType);

        initialLoadDone = initialLoadDone || allLoaded();

        INSTANCE.emitChange();
      }
      break;

    case _constants2['default'].ACTION_LOG_OUT:
      initialLoadDone = false;
      loaded = [];
      INSTANCE.emitChange();
      break;
  }
});

exports['default'] = INSTANCE;
module.exports = exports['default'];