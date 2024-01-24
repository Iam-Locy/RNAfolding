import v from "./v.mjs";
import Struct from "../../struct.mjs";
import multiBranchLoopEnergies from "../../lookupTables/multiBranchLoopEnergies.mjs";
import stackEnergies from "../../lookupTables/stackEnergies.mjs";
import pairs from "../../lookupTables/pairs.mjs";
import dangling from "../energyFunctions/dangling.mjs";
import terminalMM from "../energyFunctions/terminalMismatch.mjs";

/* 
    Calculates the structure if between i and is a branch of a larger structure.
*/

const PAIRS = pairs.ALL;
const wm = (seq, i, j, matrices, exterior = false) => {
  /* If it's not an exterior part, then apply the penalty for the branching helix. */
  const mBLE = exterior ? 0 : multiBranchLoopEnergies.C;

  if (matrices.wm[i][j] != undefined && exterior) {
    let output = Struct.clone(matrices.wm[i][j]);
    output.addEnergy(-multiBranchLoopEnergies.C);
    return output;
  }

  if (matrices.wm[i][j] != undefined) return matrices.wm[i][j];

  let WM = new Struct(0);

  if (j - i <= 3) {
    matrices.wm[i][j] = WM;
    return WM;
  }

  /*
        The structure if i and j are paired.
    */
  let struct1 = Struct.clone(v(seq, i, j, matrices));
  struct1.addEnergy(mBLE);

  /* 
        If the structure is branching, then the penalties for closing XU pairs.
        Only for pairs on the non-hairpin ends of helices.
    */
  if (pairs.XU.includes(seq[i] + seq[j])) {
    struct1.addEnergy(stackEnergies.XUPENALTY);
  }

  /* 
        The structure if i doesn't paires and j is paired.
        The structure if i is dangling far from the stem.
    */
  let struct2 = Struct.clone(wm(seq, i + 1, j, matrices, exterior));

  /* The structure if i is dangling next to an [i+1, j] pair. */
  if (PAIRS.includes(seq[i + 1] + seq[j])) {
    struct2 = Struct.clone(v(seq, i + 1, j, matrices));
    struct2.addExterior(mBLE + dangling(seq, i, i + 1, j), [i]);

    if (pairs.XU.includes(seq[i + 1] + seq[j])) {
      struct2.addEnergy(stackEnergies.XUPENALTY);
    }
  }

  /* 
        The structure if i is paired and j is not paired.
        The structure if j is dangling far from the stem.
    */
  let struct3 = Struct.clone(wm(seq, i, j - 1, matrices, exterior));

  /* The structure if j is dangling next to an [i, j-1] pair. */
  if (PAIRS.includes(seq[i] + seq[j - 1])) {
    struct3 = Struct.clone(v(seq, i, j - 1, matrices));
    struct3.addExterior(mBLE + dangling(seq, i, j - 1, j), [j]);

    if (pairs.XU.includes(seq[i] + seq[j - 1])) {
      struct3.addEnergy(stackEnergies.XUPENALTY);
    }
  }

  /* 
        The structure if i nor j is paired.
        The structure if i and j are dangling far from the stem.
    */
  let struct4 = Struct.clone(wm(seq, i + 1, j - 1, matrices, exterior));

  /* The structure if i and j are dangling next to an [i+1, j-1] pair. */
  if (PAIRS.includes(seq[i + 1] + seq[j - 1])) {
    struct4 = Struct.clone(v(seq, i + 1, j - 1, matrices));
    struct4.addExterior(mBLE + terminalMM(seq, j - 1, i + 1, i, j), [
      i + 1,
      j - 1,
    ]);

    if (pairs.XU.includes(seq[i + 1] + seq[j - 1])) {
      struct4.addEnergy(stackEnergies.XUPENALTY);
    }
  }

  [struct1, struct2, struct3, struct4].forEach((s) => {
    if (s.mfe < WM.mfe) WM = s;
  });

  matrices.wm[i][j] = WM;
  return WM;
};

export default wm;
