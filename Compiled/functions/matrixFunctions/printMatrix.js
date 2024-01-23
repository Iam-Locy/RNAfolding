"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
/* 
    Prints the minimum free energies of the structures as a table.
*/

var printMatrix = function printMatrix(matrix) {
  matrix.forEach(function (row) {
    var out = "";
    for (var i = 0; i < row.length; i++) {
      if (row[i] == undefined) {
        out += "Und" + "   ";
      } else if (row[i].mfe == Infinity) {
        out += "Inf" + "   ";
      } else {
        var item = Math.round(row[i].mfe * 10) / 10;
        out += item + " ".repeat(6 - String(item).length);
      }
    }
    console.log(out);
  });
};
var _default = exports["default"] = printMatrix;