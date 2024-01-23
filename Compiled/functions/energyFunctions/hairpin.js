"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _hairpinEnergies = _interopRequireDefault(require("../../lookupTables/hairpinEnergies.js"));
var _stackEnergies = _interopRequireDefault(require("../../lookupTables/stackEnergies.js"));
var _pairs = _interopRequireDefault(require("../../lookupTables/pairs.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
/*
    Hairpin loop length < 3 => impossible
        Length == 3: 
        dG = dG_init(3)
    
    3 < Length <= 30:
        dG = dG_init(Length) + dG_first_terminal_mismatch + dG_bonus_for_(UU, GA, GG)_first_mismatch

    Length > 30:
        dG_ init(Length) = dG_init(30) + 107.856 * ln(Length/9)
        
        dG = dG_init(Length) + dG_first_terminal_mismatch + dG_bonus_for_(UU, GA, GG)_first_mismatch

    The penalty for an AU or GU ending is also applied here.

    The above calculations ignore the penalty for all C-loops and the bonus for the special GU closure 
    as per Lorenz, R., Bernhart, S. H., Höner zu Siederdissen, C., Tafer, H., Flamm, C., Stadler, P. F., & Hofacker, I. L. (2011). Viennarna Package 2.0. Algorithms for Molecular Biology, 6(1). https://doi.org/10.1186/1748-7188-6-26 
*/

var UPAIRS = _pairs["default"].XU;
var hairpin = function hairpin(seq, i, j) {
  var LENGTH = j - i - 1;
  if (LENGTH < 3) return Infinity;
  if (seq.substring(i, j + 1) in _hairpinEnergies["default"].SPECIAL) {
    return _hairpinEnergies["default"].SPECIAL[seq.substring(i, j + 1)];
  }
  if (LENGTH == 3) {
    var dG = _hairpinEnergies["default"].INIT[LENGTH];
    if (UPAIRS.includes(seq[i] + seq[j])) {
      dG += _stackEnergies["default"].XUPENALTY;
    }
    return dG;
  }
  if (LENGTH > 3) {
    var _dG = 0;
    if (LENGTH <= 30) {
      _dG += _hairpinEnergies["default"].INIT[LENGTH];
    } else {
      _dG += _hairpinEnergies["default"].INIT[30] + 107.856 * Math.log(LENGTH / 30);
    }
    _dG += _hairpinEnergies["default"].HAIRPINMM[seq[i] + seq[j] + "/" + seq[i + 1] + seq[j - 1]];
    return _dG;
  }
};
var _default = exports["default"] = hairpin;