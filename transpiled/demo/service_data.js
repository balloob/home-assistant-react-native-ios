"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = [{
    domain: "homeassistant",
    services: ["stop", "turn_off", "turn_on"]
}, {
    domain: "light",
    services: ["turn_off", "turn_on"]
}, {
    domain: "switch",
    services: ["turn_off", "turn_on"]
}, {
    domain: "configurator",
    services: ["configure"]
}];
module.exports = exports["default"];