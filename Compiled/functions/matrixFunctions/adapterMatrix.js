"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _struct = _interopRequireDefault(require("../../struct.js"));
var _adapterLoop = _interopRequireDefault(require("../energyFunctions/adapterLoop.js"));
var _pairs = _interopRequireDefault(require("../../lookupTables/pairs.js"));
var _printMatrix = _interopRequireDefault(require("./printMatrix.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
/* 
    Generates structures for adapter bonding.
*/

var PAIRS = _pairs["default"].ALL;
var adapterMatrix = function adapterMatrix(adapter, rna, i, j, matrix) {
  if (matrix[i][j] != undefined) return matrix[i][j];
  var struct = new _struct["default"](Infinity);
  if (!PAIRS.includes(adapter[i] + rna[j])) {
    matrix[i][j] = struct;
    return struct;
  }
  struct = new _struct["default"](0);
  for (var p = i + 1; p < adapter.length; p++) {
    for (var q = j + 1; q < rna.length; q++) {
      var internalStruct = _struct["default"].clone(adapterMatrix(adapter, rna, p, q, matrix));
      var e = (0, _adapterLoop["default"])(adapter, rna, i, j, p, q);
      if (e + internalStruct.mfe < struct.mfe) {
        internalStruct.addPair(e, [i, j]);
        struct = _struct["default"].clone(internalStruct);
      }
    }
  }
  if (struct.mfe == 0) {
    struct.addPair(0, [i, j]);
  }
  matrix[i][j] = struct;
  return struct;
};
var _default = exports["default"] = adapterMatrix;