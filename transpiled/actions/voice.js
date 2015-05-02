'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _interopRequireDefault = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

exports.isSupported = isSupported;
exports.stop = stop;
exports.listen = listen;

var _import = require('lodash');

var _import2 = _interopRequireDefault(_import);

var _dispatcher = require('../app_dispatcher');

var _dispatcher2 = _interopRequireDefault(_dispatcher);

var _constants = require('../constants');

var _constants2 = _interopRequireDefault(_constants);

var _callService = require('./service');

// Time to wait after last result to start processing.
var NO_RESULT_TIMEOUT = 3000;

var recognition = null;
var interimTranscript = '';
var finalTranscript = '';

function isSupported() {
  return 'webkitSpeechRecognition' in window;
}

function process() {
  var text = finalTranscript || interimTranscript;

  _dispatcher2['default'].dispatch({
    actionType: _constants2['default'].ACTION_LISTENING_TRANSMITTING,
    finalTranscript: text });

  _callService.callService('conversation', 'process', { text: text }).then(function () {
    _dispatcher2['default'].dispatch({
      actionType: _constants2['default'].ACTION_LISTENING_DONE,
      finalTranscript: text });
  }, function () {
    _dispatcher2['default'].dispatch({
      actionType: _constants2['default'].ACTION_LISTENING_ERROR });
  });
}

function stop() {
  if (recognition !== null) {
    recognition.onstart = null;
    recognition.onresult = null;
    recognition.onerror = null;
    recognition.onend = null;
    recognition.stop();
    recognition = null;

    process();
  }

  interimTranscript = '';
  finalTranscript = '';
}

var autostop = _import2['default'].debounce(stop, NO_RESULT_TIMEOUT);

function listen() {
  stop();

  window.r = recognition = new webkitSpeechRecognition();
  recognition.interimResults = true;

  recognition.onstart = function () {
    _dispatcher2['default'].dispatch({
      actionType: _constants2['default'].ACTION_LISTENING_START });
  };

  recognition.onresult = function (event) {
    interimTranscript = '';

    for (var i = event.resultIndex; i < event.results.length; ++i) {
      if (event.results[i].isFinal) {
        finalTranscript += event.results[i][0].transcript;
      } else {
        interimTranscript += event.results[i][0].transcript;
      }
    }

    _dispatcher2['default'].dispatch({
      actionType: _constants2['default'].ACTION_LISTENING_RESULT,
      interimTranscript: interimTranscript,
      finalTranscript: finalTranscript });

    autostop();
  };

  recognition.onerror = function () {
    _dispatcher2['default'].dispatch({
      actionType: _constants2['default'].ACTION_LISTENING_ERROR });
  };

  recognition.onend = stop;

  recognition.start();
}