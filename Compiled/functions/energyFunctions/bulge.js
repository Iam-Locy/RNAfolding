"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _bulgeEnergies = _interopRequireDefault(require("../../lookupTables/bulgeEnergies.js"));
var _stackEnergies = _interopRequireDefault(require("../../lookupTables/stackEnergies.js"));
var _pairs = _interopRequireDefault(require("../../lookupTables/pairs.js"));
var _stack = _interopRequireDefault(require("./stack.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
/*
    Calculates th energy contribution associated with a bulge.

    Length == 1:
        dG = dG_init(1) + dG_base_pair_stack
            >the base pair stack is the stack of the closing pairs as though there is no bulge

    1 < Length <= 30:
        dG = dG_init(Length)

    Length > 30:
        dG = dG_init(30) + 107.856 * ln(Length/30)

    The penalty for an AU or GU ending is also allpied here

    The above calculations ignore the bonus for possible loops with identical sequences
    as per Lorenz, R., Bernhart, S. H., Höner zu Siederdissen, C., Tafer, H., Flamm, C., Stadler, P. F., & Hofacker, I. L. (2011). Viennarna Package 2.0. Algorithms for Molecular Biology, 6(1). https://doi.org/10.1186/1748-7188-6-26 
*/

var UPAIRS = _pairs["default"].XU;
var bulge = function bulge(seq, i, j, p, q) {
  var LENGTH = p == i + 1 ? j - q - 1 : p - i - 1;
  if (LENGTH == 1) {
    var dG = 0;
    dG += _bulgeEnergies["default"][1];
    dG += (0, _stack["default"])(seq, i, j, p, q);
    return dG;
  }
  if (LENGTH > 1) {
    var _dG = 0;
    if (LENGTH <= 30) {
      _dG += _bulgeEnergies["default"][LENGTH];
    } else {
      _dG += _bulgeEnergies["default"][30] + 107.856 * Math.log(LENGTH / 30);
    }
    if (UPAIRS.includes(seq[i] + seq[j])) {
      _dG += _stackEnergies["default"].XUPENALTY;
    }
    if (UPAIRS.includes(seq[p] + seq[q])) {
      _dG += _stackEnergies["default"].XUPENALTY;
    }
    return _dG;
  }
};
var _default = exports["default"] = bulge;