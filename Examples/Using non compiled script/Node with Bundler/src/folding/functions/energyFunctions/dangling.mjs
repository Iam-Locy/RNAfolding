import danglingEnergies from "../../lookupTables/danglingEnergies.mjs";

/*
    Calcutates the energy contribution of dangling bases.

    Motifs represented in the JSON file as:
        5'  A 3'           5'  AU 3'
            | =  .A/AU and      |  =  A./UA
        3' AU 5'           3'   A 5'

*/

const dangling = (seq, i, k, j) => {
  if (k == i + 1) {
    // 5' dangling end
    return danglingEnergies[seq[i] + "." + "/" + seq[k] + seq[j]];
  }

  if (k == j - 1) {
    // 3' dangling end
    return danglingEnergies["." + seq[j] + "/" + seq[i] + seq[k]];
  }
};

export default dangling;
