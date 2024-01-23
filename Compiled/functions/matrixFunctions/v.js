"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _hairpin = _interopRequireDefault(require("../energyFunctions/hairpin.js"));
var _stack = _interopRequireDefault(require("../energyFunctions/stack.js"));
var _internalLoop = _interopRequireDefault(require("../energyFunctions/internalLoop.js"));
var _bulge = _interopRequireDefault(require("../energyFunctions/bulge.js"));
var _wm = _interopRequireDefault(require("./wm.js"));
var _struct = _interopRequireDefault(require("../../struct.js"));
var _multiBranchLoopEnergies = _interopRequireDefault(require("../../lookupTables/multiBranchLoopEnergies.js"));
var _pairs = _interopRequireDefault(require("../../lookupTables/pairs.js"));
var _terminalMismatch = _interopRequireDefault(require("../energyFunctions/terminalMismatch.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
/* 
    Calculates the structure when i and j are paired.
*/

var PAIRS = _pairs["default"].ALL;
var v = function v(seq, i, j, matrices) {
  if (matrices.v[i][j] != undefined) return matrices.v[i][j];
  var V = new _struct["default"](Infinity);
  if (j - i <= 3 || !PAIRS.includes(seq[i] + seq[j])) {
    matrices.v[i][j] = V;
    return V;
  }

  /* The structure when i and j closes a hairpin. */
  var struct1 = new _struct["default"]((0, _hairpin["default"])(seq, i, j), {
    pairs: [[i, j]]
  });

  /* The structure if [i,j] and [p,q] pairs close a stack, a bulge or an internal loop. */
  var struct2 = new _struct["default"](Infinity);
  for (var p = i + 1; p < j - 4; p++) {
    for (var q = p + 4; q < j; q++) {
      if (!PAIRS.includes(seq[p] + seq[q])) continue;
      var IS_STACK = p == i + 1 && q == j - 1;
      var IS_INTERIOR_LOOP = p != i + 1 && q != j - 1;
      var IS_BULGE = !(IS_STACK || IS_INTERIOR_LOOP);
      var e = Infinity;
      if (IS_STACK) {
        e = (0, _stack["default"])(seq, i, j, p, q);
      }
      if (IS_INTERIOR_LOOP) {
        e = (0, _internalLoop["default"])(seq, i, j, p, q);
      }
      if (IS_BULGE) {
        e = (0, _bulge["default"])(seq, i, j, p, q);
      }
      var innerStruct = _struct["default"].clone(v(seq, p, q, matrices));
      if (e + innerStruct.mfe < struct2.mfe) {
        innerStruct.addPair(e, [i, j]);
        struct2 = innerStruct;
      }
    }
  }

  /* The structure if the structure consits of two loops [i,k] and [k+1, j]
        The penalty for closing a multi-branch loop is applied here.
         The penalty for the average asymmertry is ignored
        as per Lorenz, R., Bernhart, S. H., Höner zu Siederdissen, C., Tafer, H., Flamm, C., Stadler, P. F., & Hofacker, I. L. (2011). Viennarna Package 2.0. Algorithms for Molecular Biology, 6(1). https://doi.org/10.1186/1748-7188-6-26 
        
    */
  var struct3 = new _struct["default"](Infinity);
  for (var k = i + 1; k < j - 1; k++) {
    var _innerStruct = _struct["default"].merge((0, _wm["default"])(seq, i + 1, k, matrices), (0, _wm["default"])(seq, k + 1, j - 1, matrices));
    _innerStruct.addPair(_multiBranchLoopEnergies["default"].A, [i, j]);
    _innerStruct.addExterior((0, _terminalMismatch["default"])(seq, i, j, i + 1, j - 1), [i + 1, j - 1]);
    if (_innerStruct.mfe < struct3.mfe) {
      struct3 = _innerStruct;
    }
  }
  [struct1, struct2, struct3].forEach(function (s) {
    if (s.mfe < V.mfe) V = s;
  });
  matrices.v[i][j] = V;
  return V;
};
var _default = exports["default"] = v;