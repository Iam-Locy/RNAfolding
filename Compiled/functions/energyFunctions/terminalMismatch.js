"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _terminalMismatchEnergies = _interopRequireDefault(require("../../lookupTables/terminalMismatchEnergies.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
/*
    Pairs represented in the JSON file as:

        5' AG 3'             5' AG 3'
        |   =  AU/GG          |   = CG/CA   
        3' UG 5'             3' CC 5'
*/

var terminalMM = function terminalMM(seq, pair5, pair3, mismatch5, mismatch3) {
  return _terminalMismatchEnergies["default"][seq[pair5] + seq[pair3] + "/" + seq[mismatch3] + seq[mismatch5]];
};
var _default = exports["default"] = terminalMM;