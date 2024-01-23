"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
/*
    Generates dot-bracket structure representation from Struct object.
 */

var dotBracket = function dotBracket(seq, structure) {
  var db = ".".repeat(seq.length);
  structure.pairs.forEach(function (pair) {
    if (pair[0] != undefined) {
      db = db.substring(0, pair[0]) + "(" + db.substring(pair[0] + 1, pair[1]) + ")" + db.substring(pair[1] + 1);
    }
  });
  return [db, structure.mfe / 100];
};
var _default = exports["default"] = dotBracket;