import bulgeEnergies from "../../lookupTables/bulgeEnergies.mjs";

import stackEnergies from "../../lookupTables/stackEnergies.mjs";

import pairs from "../../lookupTables/pairs.mjs";

import stack from "./stack.mjs";

/*
    Calculates th energy contribution associated with a bulge.

    Length == 1:
        dG = dG_init(1) + dG_base_pair_stack
            >the base pair stack is the stack of the closing pairs as though there is no bulge

    1 < Length <= 30:
        dG = dG_init(Length)

    Length > 30:
        dG = dG_init(30) + 107.856 * ln(Length/30)

    The penalty for an AU or GU ending is also allpied here

    The above calculations ignore the bonus for possible loops with identical sequences
    as per Lorenz, R., Bernhart, S. H., Höner zu Siederdissen, C., Tafer, H., Flamm, C., Stadler, P. F., & Hofacker, I. L. (2011). Viennarna Package 2.0. Algorithms for Molecular Biology, 6(1). https://doi.org/10.1186/1748-7188-6-26 
*/

const UPAIRS = pairs.XU;

const bulge = (seq, i, j, p, q) => {
  const LENGTH = p == i + 1 ? j - q - 1 : p - i - 1;

  if (LENGTH == 1) {
    let dG = 0;

    dG += bulgeEnergies[1];

    dG += stack(seq, i, j, p, q);

    return dG;
  }

  if (LENGTH > 1) {
    let dG = 0;

    if (LENGTH <= 30) {
      dG += bulgeEnergies[LENGTH];
    } else {
      dG += bulgeEnergies[30] + 107.856 * Math.log(LENGTH / 30);
    }

    if (UPAIRS.includes(seq[i] + seq[j])) {
      dG += stackEnergies.XUPENALTY;
    }

    if (UPAIRS.includes(seq[p] + seq[q])) {
      dG += stackEnergies.XUPENALTY;
    }

    return dG;
  }
};

export default bulge;
