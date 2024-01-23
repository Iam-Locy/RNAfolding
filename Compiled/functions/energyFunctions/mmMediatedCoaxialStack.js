"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _coaxialStackEnergies = _interopRequireDefault(require("../../lookupTables/coaxialStackEnergies.js"));
var _pairs = _interopRequireDefault(require("../../lookupTables/pairs.js"));
var _terminalMismatch = _interopRequireDefault(require("./terminalMismatch.js"));
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}
var GU = _pairs["default"].GU;
var WATSONCRICK = _pairs["default"].WATSONCRICK;
var mmMediatedCoaxialStack = function mmMediatedCoaxialStack(seq, i, j, k) {
  var IKdG = (0, _terminalMismatch["default"])(seq, k - 1, i + 1, k, i) + _coaxialStackEnergies["default"].DISCONSTACK;
  if (WATSONCRICK.includes(seq[i] + seq[k])) {
    IKdG += _coaxialStackEnergies["default"].POTWCPAIRMM;
  }
  if (GU.includes(seq[i] + seq[k])) {
    IKdG += _coaxialStackEnergies["default"].POTGUPAIRMM;
  }
  var KJdG = (0, _terminalMismatch["default"])(seq, j - 1, k + 1, j, k) + _coaxialStackEnergies["default"].DISCONSTACK;
  if (WATSONCRICK.includes(seq[j] + seq[k])) {
    KJdG += _coaxialStackEnergies["default"].POTWCPAIRMM;
  }
  if (GU.includes(seq[j] + seq[k])) {
    KJdG += _coaxialStackEnergies["default"].POTGUPAIRMM;
  }
  return {
    IKdG: IKdG,
    KJdG: KJdG
  };
};
console.log(mmMediatedCoaxialStack("GGCUCGC", 0, 6, 3));
var _default = exports["default"] = mmMediatedCoaxialStack;