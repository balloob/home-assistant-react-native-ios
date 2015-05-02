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

var _Store2 = require('./store');

var _Store3 = _interopRequireDefault(_Store2);

var STATE_LISTENING = 'STATE_LISTENING';
var STATE_TRANSMITTING = 'STATE_TRANSMITTING';
var STATE_IDLE = 'STATE_IDLE';
var STATE_ERROR = 'STATE_ERROR';

var state = STATE_IDLE;
var interimTranscript = '';
var finalTranscript = '';

var VoiceStore = (function (_Store) {
  function VoiceStore() {
    _classCallCheck(this, VoiceStore);

    if (_Store != null) {
      _Store.apply(this, arguments);
    }
  }

  _inherits(VoiceStore, _Store);

  _createClass(VoiceStore, [{
    key: 'state',
    get: function () {
      return state;
    }
  }, {
    key: 'isListening',
    get: function () {
      return state === STATE_LISTENING;
    }
  }, {
    key: 'isTransmitting',
    get: function () {
      return state === STATE_TRANSMITTING;
    }
  }, {
    key: 'hasError',
    get: function () {
      return state === STATE_ERROR;
    }
  }, {
    key: 'interimTranscript',
    get: function () {
      return interimTranscript;
    }
  }, {
    key: 'finalTranscript',
    get: function () {
      return finalTranscript;
    }
  }]);

  return VoiceStore;
})(_Store3['default']);

var INSTANCE = new VoiceStore();

INSTANCE.STATE_LISTENING = STATE_LISTENING;
INSTANCE.STATE_TRANSMITTING = STATE_TRANSMITTING;
INSTANCE.STATE_IDLE = STATE_IDLE;
INSTANCE.STATE_ERROR = STATE_ERROR;

INSTANCE.dispatchToken = _dispatcher2['default'].register(function (payload) {
  switch (payload.actionType) {
    case _constants2['default'].ACTION_LISTENING_START:
      state = STATE_LISTENING;
      interimTranscript = '';
      finalTranscript = '';
      INSTANCE.emitChange();
      break;

    case _constants2['default'].ACTION_LISTENING_TRANSMITTING:
      state = STATE_TRANSMITTING;
      interimTranscript = '';
      finalTranscript = payload.finalTranscript;
      INSTANCE.emitChange();
      break;

    case _constants2['default'].ACTION_LISTENING_DONE:
      state = STATE_IDLE;
      INSTANCE.emitChange();
      break;

    case _constants2['default'].ACTION_LISTENING_ERROR:
      state = STATE_ERROR;
      INSTANCE.emitChange();
      break;

    case _constants2['default'].ACTION_LISTENING_RESULT:
      interimTranscript = payload.interimTranscript;
      finalTranscript = payload.finalTranscript;
      INSTANCE.emitChange();
      break;
  }
});

exports['default'] = INSTANCE;
module.exports = exports['default'];