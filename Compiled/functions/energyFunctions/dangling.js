"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _danglingEnergies = _interopRequireDefault(require("../../lookupTables/danglingEnergies.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
/*
    Calcutates the energy contribution of dangling bases.

    Motifs represented in the JSON file as:
        5'  A 3'           5'  AU 3'
            | =  .A/AU and      |  =  A./UA
        3' AU 5'           3'   A 5'

*/

var dangling = function dangling(seq, i, k, j) {
  if (k == i + 1) {
    // 5' dangling end
    return _danglingEnergies["default"][seq[i] + "." + "/" + seq[k] + seq[j]];
  }
  if (k == j - 1) {
    // 3' dangling end
    return _danglingEnergies["default"]["." + seq[j] + "/" + seq[i] + seq[k]];
  }
};
var _default = exports["default"] = dangling;