"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/*
    Findes functional sites on adapter. A functional site is the unpaired end part of a hairpin loop.
        
        CCCC... AA
            |||    A  Functional site: A_8 to C_12
            ˙˙˙ CA
    
*/

var getFunctionalSites = function getFunctionalSites(adapterSeq, adapterStr) {
  var regions = new Set();
  var start = 0;
  var prev = "";
  for (var i = 0; i < adapterStr.length; i++) {
    if (adapterStr[i] == "." && prev == "(") {
      start = i;
    } else if (adapterStr[i] == ")" && prev == ".") {
      regions.add(adapterSeq.slice(start, i));
    }
    prev = adapterStr[i];
  }

  /*
        Generating 3' -> 5' functional sites from 5' -> 3' functional sites.
    */

  var reverseRegions = new Set();
  regions.forEach(function (reg) {
    var out = "";
    for (var _i = reg.length - 1; _i >= 0; _i--) {
      out += reg[_i];
    }
    reverseRegions.add(out);
  });

  /*
        The result has both A_8 to C_12 and C_12 to A_8.
    */

  return new Set([].concat(_toConsumableArray(regions), _toConsumableArray(reverseRegions)));
};
var _default = exports["default"] = getFunctionalSites;