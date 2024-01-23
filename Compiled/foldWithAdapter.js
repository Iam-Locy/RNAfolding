"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _getBondSites = _interopRequireDefault(require("./functions/getBondSites.js"));
var _getFunctionalSites = _interopRequireDefault(require("./functions/getFunctionalSites.js"));
var _fold = _interopRequireDefault(require("./fold.js"));
var _struct = _interopRequireDefault(require("./struct.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
/*
    Folds rna with adapter.
 */

var foldWithAdapter = function foldWithAdapter(rna, adapter) {
  //Gather all the functional sites from adapter.
  var functionalSites = Array.from((0, _getFunctionalSites["default"])(adapter.seq, adapter.str[0]));

  //The rna - adapter functional site with the lowest free energy
  var best = new _struct["default"](0);
  functionalSites.map(function (site) {
    var bondSites = (0, _getBondSites["default"])(rna, site);
    if (bondSites.mfe < best.mfe) best = bondSites;
  });

  //The rna sequence used to generate the output fold
  var out = Array.from(rna);

  //Changes every base in rna connected to the adapter to X
  /* 
        Example:
            GGGAAACCC =normal fold=> [(((...))), -1.2] GGG A
                                                       |||   A
                                                       CCC A
                                                       
            GGGAAACCC =fold with GGGGGGCCC=> equals GGGAAAXXX =normal fold=>  [........., 0.0]
             GGGAAACCC <== RNA
                  |||
                  GGG
                  G-C <== Adapter
                  G-C
                  G-C 
    */
  if (best.mfe < 0) {
    var blocked = best.pairs.map(function (pair) {
      return pair[1];
    });
    blocked.forEach(function (index) {
      out[index] = "X";
    });
  }
  return (0, _fold["default"])(out.join(""));
};

var _default = exports["default"] = foldWithAdapter;