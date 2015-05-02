"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } };

exports.parseDateTime = parseDateTime;

function parseDateTime(datetime) {
  var _datetime$split = datetime.split(" ");

  var _datetime$split2 = _slicedToArray(_datetime$split, 2);

  var time = _datetime$split2[0];
  var date = _datetime$split2[1];

  var _time$split = time.split(":");

  var _time$split2 = _slicedToArray(_time$split, 3);

  var hour = _time$split2[0];
  var minute = _time$split2[1];
  var second = _time$split2[2];

  var _date$split = date.split("-");

  var _date$split2 = _slicedToArray(_date$split, 3);

  var day = _date$split2[0];
  var month = _date$split2[1];
  var year = _date$split2[2];

  return new Date(Date.UTC(year, parseInt(month) - 1, day, hour, minute, second));
}