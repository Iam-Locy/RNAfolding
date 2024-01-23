"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _v = _interopRequireDefault(require("./v.js"));
var _wm = _interopRequireDefault(require("./wm.js"));
var _dangling = _interopRequireDefault(require("../energyFunctions/dangling.js"));
var _terminalMismatch = _interopRequireDefault(require("../energyFunctions/terminalMismatch.js"));
var _struct = _interopRequireDefault(require("../../struct.js"));
var _pairs = _interopRequireDefault(require("../../lookupTables/pairs.js"));
var _stackEnergies = _interopRequireDefault(require("../../lookupTables/stackEnergies.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
/* 
    Calculates the structure regardless whether i and j are paired.
*/

var w = function w(seq, i, j, matrices) {
  if (matrices.w[i][j] != undefined) return matrices.w[i][j];
  var W = new _struct["default"](0);
  if (j - i <= 3) {
    matrices.w[i][j] = W;
    return W;
  }

  /* The structure if i and j are paired.
       If the structure is branching, then the penalties for closing XU pairs.
       Only for pairs on the non-hairpin ends of helices.
    */
  var struct1 = _struct["default"].clone((0, _v["default"])(seq, i, j, matrices));
  var branches = getAllBranches(struct1);
  branches.forEach(function (pair) {
    if (_pairs["default"].XU.includes(seq[pair[0]] + seq[pair[1]])) {
      struct1.addEnergy(_stackEnergies["default"].XUPENALTY);
    }
  });

  /* 
        The structure if i doesn't paires and j is paired.
        The structure if i is dangling far from the stem.
    */
  var struct2 = _struct["default"].clone(w(seq, i + 1, j, matrices));

  /* The structure if i is dangling next to an [i+1, j] pair. */
  if ((0, _v["default"])(seq, i + 1, j, matrices).mfe < Infinity) {
    struct2 = _struct["default"].clone((0, _v["default"])(seq, i + 1, j, matrices));
  }

  /* If i is on the exterior, then adds the dangling base to the structure. */
  if (areArraysEqual(getFirstPair(struct2), [i + 1, seq.length - 1])) {
    struct2.addExterior((0, _dangling["default"])(seq, i, i + 1, j), [i]);
  }

  /*
        If the structure is branching, then the penalties for closing XU pairs.
        Only for pairs on the non-hairpin ends of helices. 
     */
  branches = getAllBranches(struct2);
  branches.forEach(function (pair) {
    if (_pairs["default"].XU.includes(seq[pair[0]] + seq[pair[1]])) {
      struct2.addEnergy(_stackEnergies["default"].XUPENALTY);
    }
  });

  /* 
        The structure if i is paired and j is not paired.
        The structure if j is dangling far from the stem.
    */
  var struct3 = _struct["default"].clone(w(seq, i, j - 1, matrices));

  /* The structure if j is dangling next to an [i, j-1] pair. */
  if ((0, _v["default"])(seq, i, j - 1, matrices).mfe < Infinity) {
    struct3 = _struct["default"].clone((0, _v["default"])(seq, i, j - 1, matrices));
  }

  /* If j is on the exterior, then adds the dangling base to the structure. */
  if (areArraysEqual(getLastPair(struct3), [0, j - 1])) {
    struct3.addExterior((0, _dangling["default"])(seq, i, j - 1, j), [j]);
  }

  /*
        If the structure is branching, then the penalties for closing XU pairs.
        Only for pairs on the non-hairpin ends of helices. 
    */
  branches = getAllBranches(struct3);
  branches.forEach(function (pair) {
    if (_pairs["default"].XU.includes(seq[pair[0]] + seq[pair[1]])) {
      struct3.addEnergy(_stackEnergies["default"].XUPENALTY);
    }
  });

  /* 
        The structure if i nor j is paired.
        The structure if i and j are dangling far from the stem.
    */
  var struct4 = _struct["default"].clone(w(seq, i + 1, j - 1, matrices));

  /* The structure if i and j are dangling next to an [i+1, j-1] pair. */
  if ((0, _v["default"])(seq, i + 1, j - 1, matrices).mfe < Infinity) {
    struct4 = _struct["default"].clone((0, _v["default"])(seq, i + 1, j - 1, matrices));
  }

  /* The structure if i and j form a terminal mismatch. */
  if (areArraysEqual(getLastPair(struct4), [i + 1, j - 1])) {
    struct4.addExterior((0, _terminalMismatch["default"])(seq, j - 1, i + 1, i, j), [i, j]);

    /*
            If the structure is branching, then the penalties for closing XU pairs.
            Only for pairs on the non-hairpin ends of helices. 
        */
    var _branches = getAllBranches(struct4);
    _branches.forEach(function (pair) {
      if (_pairs["default"].XU.includes(seq[pair[0]] + seq[pair[1]])) {
        struct4.addEnergy(_stackEnergies["default"].XUPENALTY);
      }
    });
  }

  /* If there is a i and j terminal mismatch then we don't count the dangling i. */
  if (struct4.pairs.includes(getFirstPair(struct2))) {
    struct2.addEnergy(Infinity);
  }

  /* If there is a i and j terminal mismatch then we don't count the dangling j. */
  if (struct4.pairs.includes(getLastPair(struct3))) {
    struct3.addEnergy(Infinity);
  }

  /* 
        The structure consits of a [i, k] and [k+1, j] loops.
    */
  var struct5 = new _struct["default"](Infinity);
  for (var k = i + 1; k < j - 1; k++) {
    var struct = new _struct["default"](Infinity);
    var subStruct1_1 = _struct["default"].clone(w(seq, i, k + 1, matrices));
    var subStruct1_2 = _struct["default"].clone(w(seq, k, j, matrices));
    var subStruct1 = _struct["default"].merge(subStruct1_1, subStruct1_2);
    var subStruct2_1 = (0, _wm["default"])(seq, i, k, matrices, true);
    var subStruct2_2 = (0, _wm["default"])(seq, k, j, matrices, true);
    var subStruct2 = _struct["default"].merge(subStruct2_1, subStruct2_2);
    if (subStruct1.mfe < subStruct2.mfe) {
      struct = subStruct1;
    } else {
      struct = subStruct2;
    }
    if (struct.mfe < struct5.mfe) struct5 = struct;
  }
  [struct1, struct2, struct3, struct4, struct5].forEach(function (s) {
    if (s.mfe < W.mfe) W = s;
  });
  matrices.w[i][j] = W;
  return W;
};

/* Returns the pair that has the opening pair closest to the 5' end */
var getFirstPair = function getFirstPair(struct) {
  if (!struct.pairs[0]) return [];
  var firstPair = [Infinity, 0];
  struct.pairs.forEach(function (pair) {
    if (firstPair[0] > pair[0]) {
      firstPair = pair;
    }
  });
  return firstPair != [Infinity, 0] ? firstPair : [];
};

/* Returns the pair that has the closing base closest to the 3' end. */
var getLastPair = function getLastPair(struct) {
  if (!struct.pairs[0]) return [];
  var lastPair = [Infinity, 0];
  struct.pairs.forEach(function (pair) {
    if (lastPair[1] < pair[1]) {
      lastPair = pair;
    }
  });
  return lastPair != [0, Infinity] ? lastPair : [];
};

/* Checks whether the elements of two arrays equal to eachother. */
var areArraysEqual = function areArraysEqual(arr1, arr2) {
  if (arr1.length != arr2.length) return false;
  for (var i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
};

/* Returns the closing pairs of all the branches of the structure. */
var getAllBranches = function getAllBranches(struct) {
  var closures = [];
  var _prevPair = [Infinity, 0];
  struct.pairs.forEach(function (pair) {
    if (pair[0] > _prevPair[0]) {
      closures.push(_prevPair);
    }
    _prevPair = pair;
  });
  if (!closures.includes(getLastPair(struct))) {
    closures.push(getLastPair(struct));
  }
  return closures;
};
var _default = exports["default"] = w;