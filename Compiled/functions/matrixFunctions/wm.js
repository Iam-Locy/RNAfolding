"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _v = _interopRequireDefault(require("./v.js"));
var _struct = _interopRequireDefault(require("../../struct.js"));
var _multiBranchLoopEnergies = _interopRequireDefault(require("../../lookupTables/multiBranchLoopEnergies.js"));
var _stackEnergies = _interopRequireDefault(require("../../lookupTables/stackEnergies.js"));
var _pairs = _interopRequireDefault(require("../../lookupTables/pairs.js"));
var _dangling = _interopRequireDefault(require("../energyFunctions/dangling.js"));
var _terminalMismatch = _interopRequireDefault(require("../energyFunctions/terminalMismatch.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
/* 
    Calculates the structure if between i and is a branch of a larger structure.
*/

var PAIRS = _pairs["default"].ALL;
var wm = function wm(seq, i, j, matrices) {
  var exterior = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  /* If it's not an exterior part, then apply the penalty for the branching helix. */
  var mBLE = exterior ? 0 : _multiBranchLoopEnergies["default"].C;
  if (matrices.wm[i][j] != undefined && exterior) {
    var output = _struct["default"].clone(matrices.wm[i][j]);
    output.addEnergy(-_multiBranchLoopEnergies["default"].C);
    return output;
  }
  if (matrices.wm[i][j] != undefined) return matrices.wm[i][j];
  var WM = new _struct["default"](0);
  if (j - i <= 3) {
    matrices.wm[i][j] = WM;
    return WM;
  }

  /*
        The structure if i and j are paired.
    */
  var struct1 = _struct["default"].clone((0, _v["default"])(seq, i, j, matrices));
  struct1.addEnergy(mBLE);

  /* 
        If the structure is branching, then the penalties for closing XU pairs.
        Only for pairs on the non-hairpin ends of helices.
    */
  if (_pairs["default"].XU.includes(seq[i] + seq[j])) {
    struct1.addEnergy(_stackEnergies["default"].XUPENALTY);
  }

  /* 
        The structure if i doesn't paires and j is paired.
        The structure if i is dangling far from the stem.
    */
  var struct2 = _struct["default"].clone(wm(seq, i + 1, j, matrices, exterior));

  /* The structure if i is dangling next to an [i+1, j] pair. */
  if (PAIRS.includes(seq[i + 1] + seq[j])) {
    struct2 = _struct["default"].clone((0, _v["default"])(seq, i + 1, j, matrices));
    struct2.addExterior(mBLE + (0, _dangling["default"])(seq, i, i + 1, j), [i]);
    if (_pairs["default"].XU.includes(seq[i + 1] + seq[j])) {
      struct2.addEnergy(_stackEnergies["default"].XUPENALTY);
    }
  }

  /* 
        The structure if i is paired and j is not paired.
        The structure if j is dangling far from the stem.
    */
  var struct3 = _struct["default"].clone(wm(seq, i, j - 1, matrices, exterior));

  /* The structure if j is dangling next to an [i, j-1] pair. */
  if (PAIRS.includes(seq[i] + seq[j - 1])) {
    struct3 = _struct["default"].clone((0, _v["default"])(seq, i, j - 1, matrices));
    struct3.addExterior(mBLE + (0, _dangling["default"])(seq, i, j - 1, j), [j]);
    if (_pairs["default"].XU.includes(seq[i] + seq[j - 1])) {
      struct3.addEnergy(_stackEnergies["default"].XUPENALTY);
    }
  }

  /* 
        The structure if i nor j is paired.
        The structure if i and j are dangling far from the stem.
    */
  var struct4 = _struct["default"].clone(wm(seq, i + 1, j - 1, matrices, exterior));

  /* The structure if i and j are dangling next to an [i+1, j-1] pair. */
  if (PAIRS.includes(seq[i + 1] + seq[j - 1])) {
    struct4 = _struct["default"].clone((0, _v["default"])(seq, i + 1, j - 1, matrices));
    struct4.addExterior(mBLE + (0, _terminalMismatch["default"])(seq, j - 1, i + 1, i, j), [i + 1, j - 1]);
    if (_pairs["default"].XU.includes(seq[i + 1] + seq[j - 1])) {
      struct4.addEnergy(_stackEnergies["default"].XUPENALTY);
    }
  }
  [struct1, struct2, struct3, struct4].forEach(function (s) {
    if (s.mfe < WM.mfe) WM = s;
  });
  matrices.wm[i][j] = WM;
  return WM;
};
var _default = exports["default"] = wm;