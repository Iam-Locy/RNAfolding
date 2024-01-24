import Struct from "../../struct.mjs";
import adapterLoop from "../energyFunctions/adapterLoop.mjs";
import pairs from "../../lookupTables/pairs.mjs";
import printMatrix from "./printMatrix.mjs";

/* 
    Generates structures for adapter bonding.
*/

const PAIRS = pairs.ALL;

const adapterMatrix = (adapter, rna, i, j, matrix) => {
  if (matrix[i][j] != undefined) return matrix[i][j];

  let struct = new Struct(Infinity);

  if (!PAIRS.includes(adapter[i] + rna[j])) {
    matrix[i][j] = struct;
    return struct;
  }

  struct = new Struct(0);

  for (let p = i + 1; p < adapter.length; p++) {
    for (let q = j + 1; q < rna.length; q++) {
      const internalStruct = Struct.clone(
        adapterMatrix(adapter, rna, p, q, matrix)
      );

      const e = adapterLoop(adapter, rna, i, j, p, q);

      if (e + internalStruct.mfe < struct.mfe) {
        internalStruct.addPair(e, [i, j]);
        struct = Struct.clone(internalStruct);
      }
    }
  }

  if (struct.mfe == 0) {
    struct.addPair(0, [i, j]);
  }

  matrix[i][j] = struct;
  return struct;
};

export default adapterMatrix;
