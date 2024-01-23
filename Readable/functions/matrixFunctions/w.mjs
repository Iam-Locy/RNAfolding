import v from "./v.mjs";
import wm from "./wm.mjs";
import dangling from "../energyFunctions/dangling.mjs";
import terminalMM from "../energyFunctions/terminalMismatch.mjs";
import Struct from "../../struct.mjs";

import pairs from "../../lookupTables/pairs.mjs";

import stackEnergies from "../../lookupTables/stackEnergies.mjs";

/* 
    Calculates the structure regardless whether i and j are paired.
*/

const w = (seq, i, j, matrices) => {
  if (matrices.w[i][j] != undefined) return matrices.w[i][j];

  let W = new Struct(0);

  if (j - i <= 3) {
    matrices.w[i][j] = W;
    return W;
  }

  /* The structure if i and j are paired.
       If the structure is branching, then the penalties for closing XU pairs.
       Only for pairs on the non-hairpin ends of helices.
    */
  let struct1 = Struct.clone(v(seq, i, j, matrices));
  let branches = getAllBranches(struct1);
  branches.forEach((pair) => {
    if (pairs.XU.includes(seq[pair[0]] + seq[pair[1]])) {
      struct1.addEnergy(stackEnergies.XUPENALTY);
    }
  });

  /* 
        The structure if i doesn't paires and j is paired.
        The structure if i is dangling far from the stem.
    */
  let struct2 = Struct.clone(w(seq, i + 1, j, matrices));

  /* The structure if i is dangling next to an [i+1, j] pair. */
  if (v(seq, i + 1, j, matrices).mfe < Infinity) {
    struct2 = Struct.clone(v(seq, i + 1, j, matrices));
  }

  /* If i is on the exterior, then adds the dangling base to the structure. */
  if (areArraysEqual(getFirstPair(struct2), [i + 1, seq.length - 1])) {
    struct2.addExterior(dangling(seq, i, i + 1, j), [i]);
  }

  /*
        If the structure is branching, then the penalties for closing XU pairs.
        Only for pairs on the non-hairpin ends of helices. 
     */
  branches = getAllBranches(struct2);
  branches.forEach((pair) => {
    if (pairs.XU.includes(seq[pair[0]] + seq[pair[1]])) {
      struct2.addEnergy(stackEnergies.XUPENALTY);
    }
  });

  /* 
        The structure if i is paired and j is not paired.
        The structure if j is dangling far from the stem.
    */
  let struct3 = Struct.clone(w(seq, i, j - 1, matrices));

  /* The structure if j is dangling next to an [i, j-1] pair. */
  if (v(seq, i, j - 1, matrices).mfe < Infinity) {
    struct3 = Struct.clone(v(seq, i, j - 1, matrices));
  }

  /* If j is on the exterior, then adds the dangling base to the structure. */
  if (areArraysEqual(getLastPair(struct3), [0, j - 1])) {
    struct3.addExterior(dangling(seq, i, j - 1, j), [j]);
  }

  /*
        If the structure is branching, then the penalties for closing XU pairs.
        Only for pairs on the non-hairpin ends of helices. 
    */
  branches = getAllBranches(struct3);
  branches.forEach((pair) => {
    if (pairs.XU.includes(seq[pair[0]] + seq[pair[1]])) {
      struct3.addEnergy(stackEnergies.XUPENALTY);
    }
  });

  /* 
        The structure if i nor j is paired.
        The structure if i and j are dangling far from the stem.
    */
  let struct4 = Struct.clone(w(seq, i + 1, j - 1, matrices));

  /* The structure if i and j are dangling next to an [i+1, j-1] pair. */
  if (v(seq, i + 1, j - 1, matrices).mfe < Infinity) {
    struct4 = Struct.clone(v(seq, i + 1, j - 1, matrices));
  }

  /* The structure if i and j form a terminal mismatch. */
  if (areArraysEqual(getLastPair(struct4), [i + 1, j - 1])) {
    struct4.addExterior(terminalMM(seq, j - 1, i + 1, i, j), [i, j]);

    /*
            If the structure is branching, then the penalties for closing XU pairs.
            Only for pairs on the non-hairpin ends of helices. 
        */
    const branches = getAllBranches(struct4);
    branches.forEach((pair) => {
      if (pairs.XU.includes(seq[pair[0]] + seq[pair[1]])) {
        struct4.addEnergy(stackEnergies.XUPENALTY);
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
  let struct5 = new Struct(Infinity);

  for (let k = i + 1; k < j - 1; k++) {
    let struct = new Struct(Infinity);
    let subStruct1_1 = Struct.clone(w(seq, i, k + 1, matrices));
    let subStruct1_2 = Struct.clone(w(seq, k, j, matrices));

    let subStruct1 = Struct.merge(subStruct1_1, subStruct1_2);

    let subStruct2_1 = wm(seq, i, k, matrices, true);
    let subStruct2_2 = wm(seq, k, j, matrices, true);
    let subStruct2 = Struct.merge(subStruct2_1, subStruct2_2);

    if (subStruct1.mfe < subStruct2.mfe) {
      struct = subStruct1;
    } else {
      struct = subStruct2;
    }

    if (struct.mfe < struct5.mfe) struct5 = struct;
  }

  [struct1, struct2, struct3, struct4, struct5].forEach((s) => {
    if (s.mfe < W.mfe) W = s;
  });

  matrices.w[i][j] = W;
  return W;
};

/* Returns the pair that has the opening pair closest to the 5' end */
const getFirstPair = (struct) => {
  if (!struct.pairs[0]) return [];

  let firstPair = [Infinity, 0];
  struct.pairs.forEach((pair) => {
    if (firstPair[0] > pair[0]) {
      firstPair = pair;
    }
  });

  return firstPair != [Infinity, 0] ? firstPair : [];
};

/* Returns the pair that has the closing base closest to the 3' end. */
const getLastPair = (struct) => {
  if (!struct.pairs[0]) return [];

  let lastPair = [Infinity, 0];
  struct.pairs.forEach((pair) => {
    if (lastPair[1] < pair[1]) {
      lastPair = pair;
    }
  });

  return lastPair != [0, Infinity] ? lastPair : [];
};

/* Checks whether the elements of two arrays equal to eachother. */
const areArraysEqual = (arr1, arr2) => {
  if (arr1.length != arr2.length) return false;

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }

  return true;
};

/* Returns the closing pairs of all the branches of the structure. */
const getAllBranches = (struct) => {
  let closures = [];
  let _prevPair = [Infinity, 0];
  struct.pairs.forEach((pair) => {
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

export default w;
