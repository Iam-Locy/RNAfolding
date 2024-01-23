"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _stackEnergies = _interopRequireDefault(require("../../lookupTables/stackEnergies.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
/*
    Pairs represented in the JSON file as:
        5' AG 3'
        ||  =  AG/CU
        3' UC 5'

    NOTE: this function does not takes AU or GU closing, symmetry, and the special GGUC  helix into consideration 
                                                                                   CUGG
    as per Lorenz, R., Bernhart, S. H., Höner zu Siederdissen, C., Tafer, H., Flamm, C., Stadler, P. F., & Hofacker, I. L. (2011). Viennarna Package 2.0. Algorithms for Molecular Biology, 6(1). https://doi.org/10.1186/1748-7188-6-26 
*/

var stack = function stack(seq, i, j, p, q) {
  return _stackEnergies["default"][seq[i] + seq[j] + "/" + seq[p] + seq[q]];
};
var _default = exports["default"] = stack;