"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _stackEnergies = _interopRequireDefault(require("../../lookupTables/stackEnergies.js"));
var _bulgeEnergies = _interopRequireDefault(require("../../lookupTables/bulgeEnergies.js"));
var _internalLoopEnergies = _interopRequireDefault(require("../../lookupTables/internalLoopEnergies.js"));
var _internalLoop1X1Energies = _interopRequireDefault(require("../../lookupTables/internalLoop1X1Energies.js"));
var _internalLoop1X2Energies = _interopRequireDefault(require("../../lookupTables/internalLoop1X2Energies.js"));
var _internalLoop2X2Energies = _interopRequireDefault(require("../../lookupTables/internalLoop2X2Energies.js"));
var _pairs = _interopRequireDefault(require("../../lookupTables/pairs.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
/* 
    Calculates the bonding energy between an RNA and the functional site of an adapter.
*/

var UPAIRS = _pairs["default"].XU;
var adapterLoop = function adapterLoop(adapter, rna, i, j, p, q) {
  if (p == i + 1 && q == j + 1) {
    return _stackEnergies["default"][adapter[i] + rna[j] + "/" + adapter[p] + rna[q]];
  }
  if (p == i + 1 && q != j + 1 || p != i + 1 && q == j + 1) {
    var LENGTH = p == i + 1 ? q - j - 1 : p - i - 1;
    if (LENGTH == 1) {
      var dG = 0;
      dG += _bulgeEnergies["default"][1];
      dG += _stackEnergies["default"][adapter[i] + rna[j] + "/" + adapter[p] + rna[q]];
      return dG;
    } else {
      var _dG = 0;
      if (LENGTH <= 30) {
        _dG += _bulgeEnergies["default"][LENGTH];
      } else {
        _dG += _bulgeEnergies["default"][30] + 107.856 * Math.log(LENGTH / 30);
      }
      if (UPAIRS.includes(adapter[i] + rna[j])) {
        _dG += _stackEnergies["default"].XUPENALTY;
      }
      if (UPAIRS.includes(adapter[p] + rna[q])) {
        _dG += _stackEnergies["default"].XUPENALTY;
      }
      return _dG;
    }
  }
  if (p != i + 1 && q != j + 1) {
    var LOOPA = p - i - 1;
    var LOOPB = q - j - 1;
    if (LOOPA == 1 && LOOPB == 1) {
      return _internalLoop1X1Energies["default"][adapter[i] + rna[j] + "/" + adapter[i + 1] + rna[j + 1] + "/" + adapter[p] + rna[q]];
    }
    if (LOOPA == 1 && LOOPB == 2) {
      return _internalLoop1X2Energies["default"][adapter[i] + rna[j] + "/" + adapter[i + 1] + rna[j + 1] + "/." + rna[q - 1] + "/" + adapter[p] + rna[q]];
    }
    if (LOOPA == 2 && LOOPB == 1) {
      return _internalLoop1X2Energies["default"][adapter[q] + rna[p] + "/" + adapter[p - 1] + rna[q - 1] + "/." + rna[i + 1] + "/" + adapter[i] + rna[j]];
    }
    if (LOOPA == 2 && LOOPB == 2) {
      return _internalLoop2X2Energies["default"][adapter[i] + rna[j] + "/" + adapter[i + 1] + rna[j + 1] + "/" + adapter[p - 1] + rna[q - 1] + "/" + adapter[p] + rna[q]];
    }
    if (LOOPA > 2 || LOOPB > 2) {
      var _dG2 = 0;
      if (LOOPA + LOOPB <= 30) {
        _dG2 += _internalLoopEnergies["default"].INIT[LOOPA + LOOPB];
      } else {
        _dG2 += _internalLoopEnergies["default"].INIT[30] + 107.856 * Math.log((LOOPA + LOOPB) / 30);
      }
      _dG2 += _internalLoopEnergies["default"].ASYMM * Math.abs(LOOPA - LOOPB);
      var MM1 = adapter[i] + rna[j] + "/" + adapter[i + 1] + rna[j + 1];
      var MM2 = rna[q] + adapter[p] + "/" + rna[q - 1] + adapter[p - 1];
      if (LOOPA == 1 || LOOPB == 1) {
        _dG2 += _internalLoopEnergies["default"]["1XNMM"][MM1];
        _dG2 += _internalLoopEnergies["default"]["1XNMM"][MM2];
      } else if (LOOPA == 2 && LOOPB == 3 || LOOPA == 3 && LOOPB == 2) {
        _dG2 += _internalLoopEnergies["default"]["2X3TMM"][MM1];
        _dG2 += _internalLoopEnergies["default"]["2X3TMM"][MM2];
      } else {
        _dG2 += _internalLoopEnergies["default"].TMM[MM1];
        _dG2 += _internalLoopEnergies["default"].TMM[MM2];
      }
      return _dG2;
    }
  }
};
var _default = exports["default"] = adapterLoop;