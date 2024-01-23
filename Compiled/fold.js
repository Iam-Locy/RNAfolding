"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _v = _interopRequireDefault(require("./functions/matrixFunctions/v.js"));
var _w = _interopRequireDefault(require("./functions/matrixFunctions/w.js"));
var _wm = _interopRequireDefault(require("./functions/matrixFunctions/wm.js"));
var _dotBracket = _interopRequireDefault(require("./functions/dotBracket.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/*
    Handler for the folding algorithm.
    Adapted from:
        1: Zuker, M., & Stiegler, P. (1981). Optimal computer folding of large RNA sequences using thermodynamics and auxiliary information. Nucleic Acids Research, 9(1), 133–148. https://doi.org/10.1093/nar/9.1.133 
        2: Hofacker, I. L., Fontana, W., Stadler, P. F., Bonhoeffer, L. S., Tacker, M., & Schuster, P. (1994). Fast folding and comparison of RNA secondary structures. Monatshefte Für Chemie Chemical Monthly, 125(2), 167–188. https://doi.org/10.1007/bf00818163
        3: Lorenz, R., Bernhart, S. H., Höner zu Siederdissen, C., Tafer, H., Flamm, C., Stadler, P. F., & Hofacker, I. L. (2011). Viennarna Package 2.0. Algorithms for Molecular Biology, 6(1). https://doi.org/10.1186/1748-7188-6-26 
*/

var fold = function fold(seq) {
  if (seq == "") return ["", 0];

  /*
        Matrices of dynamic algorithm:
            V: Best structures if i and j are paired.
            W: Best structures if the RNA strarts from i and ends at j.
            WM: Best structures if the RNA consists of 2 loops i - k and k+1 - j.
    */
  var matrices = {
    w: _toConsumableArray(Array(seq.length)).map(function (e) {
      return Array(seq.length).fill(undefined);
    }),
    v: _toConsumableArray(Array(seq.length)).map(function (e) {
      return Array(seq.length).fill(undefined);
    }),
    wm: _toConsumableArray(Array(seq.length)).map(function (e) {
      return Array(seq.length).fill(undefined);
    })
  };

  //Filling up matrices.
  for (var i = 0; i < seq.length; i++) {
    for (var j = i; j < seq.length; j++) {
      (0, _v["default"])(seq, i, j, matrices), (0, _wm["default"])(seq, i, j, matrices);
      (0, _w["default"])(seq, i, j, matrices);
    }
  }

  //Generate the dot-bracket notation of the best structure if it has a minimum free energy less than 0. Otherwise returning a line structure with the mfe = 0.
  if (matrices.w[0][seq.length - 1].mfe < 0) {
    return (0, _dotBracket["default"])(seq, matrices.w[0][seq.length - 1]);
  } else {
    return (0, _dotBracket["default"])(seq, {
      pairs: [],
      mfe: 0.0
    });
  }
};

var _default = exports["default"] = fold;