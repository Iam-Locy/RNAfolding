"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _struct = _interopRequireDefault(require("../../struct.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
/* 
  Returns the struct with the lowest free energy in the matrix.
*/

var getMinOfMatrix = function getMinOfMatrix(matrix) {
  var output = new _struct["default"](Infinity);
  for (var i = 0; i < matrix.length; i++) {
    for (var j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j].mfe < output.mfe) {
        output = matrix[i][j];
      }
    }
  }
  return output;
};
var _default = exports["default"] = getMinOfMatrix;