"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _interopRequireDefault = function (obj) { return obj && obj.__esModule ? obj : { "default": obj }; };

var _authStore = require("./stores/auth");

var _authStore2 = _interopRequireDefault(_authStore);

var CallApi = function CallApi(method, path) {
  var parameters = arguments[2] === undefined ? null : arguments[2];
  var options = arguments[3] === undefined ? {} : arguments[3];

  var authToken = options.authToken || _authStore2["default"].authToken;
  var url = _authStore2["default"].host + "/api/" + path;

  return new Promise(function (resolve, reject) {
    var req = new XMLHttpRequest();
    req.open(method, url, true);
    req.setRequestHeader("X-HA-access", authToken);

    req.onload = function () {
      if (req.status > 199 && req.status < 300) {
        resolve(JSON.parse(req.responseText));
      } else {
        // see if we got an error back.
        try {
          reject(JSON.parse(req.responseText));
        } catch (err) {
          reject({});
        }
      }
    };

    req.onerror = function () {
      return reject({});
    };

    parameters ? req.send(JSON.stringify(parameters)) : req.send();
  });
};

// To make React Native happy
if (typeof __DEMO__ == "boolean" && __DEMO__) {
  CallApi = function (method, path) {
    return new Promise(function (resolve, reject) {

      if (method !== "GET") {
        throw "URL not implemented in demo mode: /api/" + path;
      }

      // strip off url arguments:
      if (path.indexOf("?") !== -1) {
        path = path.substr(0, path.indexOf("?"));
      }

      switch (path) {
        case "":
          resolve();
        case "components":
          resolve(require("./demo/component_data.js"));
          break;
        case "services":
          resolve(require("./demo/service_data.js"));
          break;
        case "events":
          resolve(require("./demo/event_data.js"));
          break;
        case "states":
          resolve(require("./demo/state_data.js"));
          break;
        case "history/period":
          resolve(require("./demo/state_history_data.js"));
          break;
        case "logbook":
          resolve(require("./demo/logbook_data.js"));
          break;
        default:
          throw "URL not implemented in demo mode /api/" + path;
      }
    });
  };
}

exports["default"] = CallApi;
module.exports = exports["default"];