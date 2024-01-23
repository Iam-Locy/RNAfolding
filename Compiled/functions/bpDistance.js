"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _pairTable = _interopRequireDefault(require("./pairTable.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
/* 
    Calculates base pair distance from the dot-bracket representation of two structures using pair tables.

    Example:

    Pair tables:
    
    ..((...)).                      .(((...)))
        |                                |
        V                                V
  0,0,9,8,0,0,0,4,3,0           0,9,8,7,0,0,0,4,3,2

    Result: 1

*/

var bpDistance = function bpDistance(struct1, struct2) {
  var table1 = (0, _pairTable["default"])(struct1);
  var table2 = (0, _pairTable["default"])(struct2);
  var dist = 0;
  var n = table1[0] < table2[0] ? table1[0] : table2[0];
  for (var i = 1; i <= n; i++) {
    if (table1[i] != table2[i]) {
      if (table1[i] > i) {
        dist++;
      }
      if (table2[i] > i) {
        dist++;
      }
    }
  }
  return dist;
};
var _default = exports["default"] = bpDistance;