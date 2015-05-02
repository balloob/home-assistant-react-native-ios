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

var _Store2 = require('../stores/store');

var _Store3 = _interopRequireDefault(_Store2);

var _Notification = require('../models/notification');

var _Notification2 = _interopRequireDefault(_Notification);

var notifications = new _List.List();

function _nextId() {
  return notifications.size;
}

var NotificationStore = (function (_Store) {
  function NotificationStore() {
    _classCallCheck(this, NotificationStore);

    if (_Store != null) {
      _Store.apply(this, arguments);
    }
  }

  _inherits(NotificationStore, _Store);

  _createClass(NotificationStore, [{
    key: 'hasNewNotifications',
    value: function hasNewNotifications(lastId) {
      return !lastId || lastId + 1 < notifications.size;
    }
  }, {
    key: 'lastNotification',
    get: function () {
      return notifications.last();
    }
  }]);

  return NotificationStore;
})(_Store3['default']);

var INSTANCE = new NotificationStore();

INSTANCE.dispatchToken = _dispatcher2['default'].register(function (payload) {
  switch (payload.actionType) {
    case _constants2['default'].ACTION_NEW_NOTIFICATION:
      notifications = notifications.push(new _Notification2['default'](_nextId(), payload.message));

      INSTANCE.emitChange();
      break;

    case _constants2['default'].ACTION_LOG_OUT:
      notifications = new _List.List();

      INSTANCE.emitChange();
      break;
  }
});

exports['default'] = INSTANCE;
module.exports = exports['default'];