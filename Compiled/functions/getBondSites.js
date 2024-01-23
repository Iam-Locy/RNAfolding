"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _adapterMatrix = _interopRequireDefault(require("./matrixFunctions/adapterMatrix.js"));
var _getMinOfMatrix = _interopRequireDefault(require("./matrixFunctions/getMinOfMatrix.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/*
    Searches for the alignment with the least free energy betwwent the RNA and a functional site of an adapter.
*/

var getBondSites = function getBondSites(rna, adapter) {
  var pairMatrix = _toConsumableArray(Array(adapter.length)).map(function (e) {
    return Array(rna.length).fill(undefined);
  });
  var si = adapter.length - 1;
  var sj = rna.length - 1;
  while (sj > 0) {
    for (var i = si, j = sj; j < rna.length && i >= 0; i--, j++) {
      (0, _adapterMatrix["default"])(adapter, rna, i, j, pairMatrix);
    }
    sj--;
  }
  while (si >= 0) {
    for (var _i = si, _j = sj; _j < rna.length && _i >= 0; _i--, _j++) {
      (0, _adapterMatrix["default"])(adapter, rna, _i, _j, pairMatrix);
    }
    si--;
  }
  return (0, _getMinOfMatrix["default"])(pairMatrix);
};
var _default = exports["default"] = getBondSites;