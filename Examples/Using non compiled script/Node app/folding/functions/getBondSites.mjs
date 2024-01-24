import adapterMatrix from "./matrixFunctions/adapterMatrix.mjs";
import getMinOfMatrix from "./matrixFunctions/getMinOfMatrix.mjs";

/*
    Searches for the alignment with the least free energy betwwent the RNA and a functional site of an adapter.
*/

const getBondSites = (rna, adapter) => {
  let pairMatrix = [...Array(adapter.length)].map((e) =>
    Array(rna.length).fill(undefined)
  );

  let si = adapter.length - 1;
  let sj = rna.length - 1;

  while (sj > 0) {
    for (let i = si, j = sj; j < rna.length && i >= 0; i--, j++) {
      adapterMatrix(adapter, rna, i, j, pairMatrix);
    }

    sj--;
  }

  while (si >= 0) {
    for (let i = si, j = sj; j < rna.length && i >= 0; i--, j++) {
      adapterMatrix(adapter, rna, i, j, pairMatrix);
    }

    si--;
  }

  return getMinOfMatrix(pairMatrix);
};

export default getBondSites;
