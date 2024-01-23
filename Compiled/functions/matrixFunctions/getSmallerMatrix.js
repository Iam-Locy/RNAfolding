"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var getSmallerMatrix = function getSmallerMatrix(i, j, matrix) {
  var newMatrix = [];
  for (var r = i + 1; r < matrix.length; r++) {
    newMatrix.push(matrix[r].slice(0, j));
  }
  return newMatrix;
};
var _default = exports["default"] = getSmallerMatrix;