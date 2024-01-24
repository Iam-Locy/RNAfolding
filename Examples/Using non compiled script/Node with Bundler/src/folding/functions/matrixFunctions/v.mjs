import hairpin from "../energyFunctions/hairpin.mjs";
import stack from "../energyFunctions/stack.mjs";
import interiorLoop from "../energyFunctions/internalLoop.mjs";
import bulge from "../energyFunctions/bulge.mjs";
import wm from "./wm.mjs";

import Struct from "../../struct.mjs";

import multiBranchLoopEnergies from "../../lookupTables/multiBranchLoopEnergies.mjs";

import pairs from "../../lookupTables/pairs.mjs";
import terminalMM from "../energyFunctions/terminalMismatch.mjs";

/* 
    Calculates the structure when i and j are paired.
*/

const PAIRS = pairs.ALL;

const v = (seq, i, j, matrices) => {
  if (matrices.v[i][j] != undefined) return matrices.v[i][j];

  let V = new Struct(Infinity);

  if (j - i <= 3 || !PAIRS.includes(seq[i] + seq[j])) {
    matrices.v[i][j] = V;
    return V;
  }

  /* The structure when i and j closes a hairpin. */
  let struct1 = new Struct(hairpin(seq, i, j), { pairs: [[i, j]] });

  /* The structure if [i,j] and [p,q] pairs close a stack, a bulge or an internal loop. */
  let struct2 = new Struct(Infinity);

  for (let p = i + 1; p < j - 4; p++) {
    for (let q = p + 4; q < j; q++) {
      if (!PAIRS.includes(seq[p] + seq[q])) continue;

      const IS_STACK = p == i + 1 && q == j - 1;
      const IS_INTERIOR_LOOP = p != i + 1 && q != j - 1;
      const IS_BULGE = !(IS_STACK || IS_INTERIOR_LOOP);

      let e = Infinity;

      if (IS_STACK) {
        e = stack(seq, i, j, p, q);
      }

      if (IS_INTERIOR_LOOP) {
        e = interiorLoop(seq, i, j, p, q);
      }

      if (IS_BULGE) {
        e = bulge(seq, i, j, p, q);
      }
      let innerStruct = Struct.clone(v(seq, p, q, matrices));

      if (e + innerStruct.mfe < struct2.mfe) {
        innerStruct.addPair(e, [i, j]);
        struct2 = innerStruct;
      }
    }
  }

  /* The structure if the structure consits of two loops [i,k] and [k+1, j]
        The penalty for closing a multi-branch loop is applied here.

        The penalty for the average asymmertry is ignored
        as per Lorenz, R., Bernhart, S. H., Höner zu Siederdissen, C., Tafer, H., Flamm, C., Stadler, P. F., & Hofacker, I. L. (2011). Viennarna Package 2.0. Algorithms for Molecular Biology, 6(1). https://doi.org/10.1186/1748-7188-6-26 
        
    */
  let struct3 = new Struct(Infinity);
  for (let k = i + 1; k < j - 1; k++) {
    let innerStruct = Struct.merge(
      wm(seq, i + 1, k, matrices),
      wm(seq, k + 1, j - 1, matrices)
    );

    innerStruct.addPair(multiBranchLoopEnergies.A, [i, j]);
    innerStruct.addExterior(terminalMM(seq, i, j, i + 1, j - 1), [
      i + 1,
      j - 1,
    ]);

    if (innerStruct.mfe < struct3.mfe) {
      struct3 = innerStruct;
    }
  }

  [struct1, struct2, struct3].forEach((s) => {
    if (s.mfe < V.mfe) V = s;
  });

  matrices.v[i][j] = V;
  return V;
};

export default v;
