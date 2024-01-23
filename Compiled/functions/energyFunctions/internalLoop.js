"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _internalLoopEnergies = _interopRequireDefault(require("../../lookupTables/internalLoopEnergies.js"));
var _internalLoop1X1Energies = _interopRequireDefault(require("../../lookupTables/internalLoop1X1Energies.js"));
var _internalLoop1X2Energies = _interopRequireDefault(require("../../lookupTables/internalLoop1X2Energies.js"));
var _internalLoop2X2Energies = _interopRequireDefault(require("../../lookupTables/internalLoop2X2Energies.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
/* 
    Calculates the energy contribution of a internal loop closed by the [i,j] and [p,q] paires.

    Loop is 1X1 or 1X2 or 2X2:
        Use predetermined data

    Loop is <= 30:
        dG = dG_init + dG_asymmetry* |left loop - right loop| + dG_1_mismatch + dG_2_mismatch + dG_XU_penalties

    Loop > 6:
        dG_init = dG_init(30) + 107.856 * ln(Loop/30)
        dG = dG_init + dG_asymmetry* |left loop - right loop| + dG_1_mismatch + dG_2_mismatch + dG_XU_penalties
*/

var internalLoop = function internalLoop(seq, i, j, p, q) {
  var LEFTLOOP = p - i - 1;
  var RIGHTLOOP = j - q - 1;
  if (LEFTLOOP == 1 && RIGHTLOOP == 1) {
    return _internalLoop1X1Energies["default"][seq[i] + seq[j] + "/" + seq[i + 1] + seq[j - 1] + "/" + seq[p] + seq[q]];
  }
  if (LEFTLOOP == 2 && RIGHTLOOP == 2) {
    return _internalLoop2X2Energies["default"][seq[i] + seq[j] + "/" + seq[i + 1] + seq[j - 1] + "/" + seq[p - 1] + seq[q + 1] + "/" + seq[p] + seq[q]];
  }
  if (LEFTLOOP == 1 && RIGHTLOOP == 2) {
    return _internalLoop1X2Energies["default"][seq[i] + seq[j] + "/" + seq[i + 1] + seq[j - 1] + "/." + seq[q + 1] + "/" + seq[p] + seq[q]];
  }
  if (LEFTLOOP == 2 && RIGHTLOOP == 1) {
    return _internalLoop1X2Energies["default"][seq[q] + seq[p] + "/" + seq[q + 1] + seq[p - 1] + "/." + seq[i + 1] + "/" + seq[j] + seq[i]];
  }
  if (LEFTLOOP > 2 || RIGHTLOOP > 2) {
    var dG = 0;
    if (LEFTLOOP + RIGHTLOOP <= 30) {
      dG += _internalLoopEnergies["default"].INIT[LEFTLOOP + RIGHTLOOP];
    } else {
      dG += _internalLoopEnergies["default"].INIT[30] + 107.856 * Math.log((LEFTLOOP + RIGHTLOOP) / 30);
    }
    dG += _internalLoopEnergies["default"].ASYMM * Math.abs(LEFTLOOP - RIGHTLOOP);
    var MM1 = seq[i] + seq[j] + "/" + seq[i + 1] + seq[j - 1];
    var MM2 = seq[q] + seq[p] + "/" + seq[q + 1] + seq[p - 1];
    if (LEFTLOOP == 1 || RIGHTLOOP == 1) {
      dG += _internalLoopEnergies["default"]["1XNMM"][MM1];
      dG += _internalLoopEnergies["default"]["1XNMM"][MM2];
    } else if (LEFTLOOP == 2 && RIGHTLOOP == 3 || LEFTLOOP == 3 && RIGHTLOOP == 2) {
      dG += _internalLoopEnergies["default"]["2X3TMM"][MM1];
      dG += _internalLoopEnergies["default"]["2X3TMM"][MM2];
    } else {
      dG += _internalLoopEnergies["default"].TMM[MM1];
      dG += _internalLoopEnergies["default"].TMM[MM2];
    }
    return dG;
  }
};
var _default = exports["default"] = internalLoop;