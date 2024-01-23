import internalLoopEnergies from "../../lookupTables/internalLoopEnergies.mjs";
import internalLoop1X1Energies from "../../lookupTables/internalLoop1X1Energies.mjs";
import internalLoop1X2Energies from "../../lookupTables/internalLoop1X2Energies.mjs";
import internalLoop2X2Energies from "../../lookupTables/internalLoop2X2Energies.mjs";

/* 
    Calculates the energy contribution of a internal loop closed by the [i,j] and [p,q] paires.

    Loop is 1X1 or 1X2 or 2X2:
        Use predetermined data

    Loop is <= 30:
        dG = dG_init + dG_asymmetry* |left loop - right loop| + dG_1_mismatch + dG_2_mismatch + dG_XU_penalties

    Loop > 6:
        dG_init = dG_init(30) + 107.856 * ln(Loop/30)
        dG = dG_init + dG_asymmetry* |left loop - right loop| + dG_1_mismatch + dG_2_mismatch + dG_XU_penalties
*/

const internalLoop = (seq, i, j, p, q) => {
  const LEFTLOOP = p - i - 1;
  const RIGHTLOOP = j - q - 1;

  if (LEFTLOOP == 1 && RIGHTLOOP == 1) {
    return internalLoop1X1Energies[
      seq[i] + seq[j] + "/" + seq[i + 1] + seq[j - 1] + "/" + seq[p] + seq[q]
    ];
  }

  if (LEFTLOOP == 2 && RIGHTLOOP == 2) {
    return internalLoop2X2Energies[
      seq[i] +
        seq[j] +
        "/" +
        seq[i + 1] +
        seq[j - 1] +
        "/" +
        seq[p - 1] +
        seq[q + 1] +
        "/" +
        seq[p] +
        seq[q]
    ];
  }

  if (LEFTLOOP == 1 && RIGHTLOOP == 2) {
    return internalLoop1X2Energies[
      seq[i] +
        seq[j] +
        "/" +
        seq[i + 1] +
        seq[j - 1] +
        "/." +
        seq[q + 1] +
        "/" +
        seq[p] +
        seq[q]
    ];
  }

  if (LEFTLOOP == 2 && RIGHTLOOP == 1) {
    return internalLoop1X2Energies[
      seq[q] +
        seq[p] +
        "/" +
        seq[q + 1] +
        seq[p - 1] +
        "/." +
        seq[i + 1] +
        "/" +
        seq[j] +
        seq[i]
    ];
  }

  if (LEFTLOOP > 2 || RIGHTLOOP > 2) {
    let dG = 0;

    if (LEFTLOOP + RIGHTLOOP <= 30) {
      dG += internalLoopEnergies.INIT[LEFTLOOP + RIGHTLOOP];
    } else {
      dG +=
        internalLoopEnergies.INIT[30] +
        107.856 * Math.log((LEFTLOOP + RIGHTLOOP) / 30);
    }

    dG += internalLoopEnergies.ASYMM * Math.abs(LEFTLOOP - RIGHTLOOP);

    const MM1 = seq[i] + seq[j] + "/" + seq[i + 1] + seq[j - 1];
    const MM2 = seq[q] + seq[p] + "/" + seq[q + 1] + seq[p - 1];

    if (LEFTLOOP == 1 || RIGHTLOOP == 1) {
      dG += internalLoopEnergies["1XNMM"][MM1];
      dG += internalLoopEnergies["1XNMM"][MM2];
    } else if (
      (LEFTLOOP == 2 && RIGHTLOOP == 3) ||
      (LEFTLOOP == 3 && RIGHTLOOP == 2)
    ) {
      dG += internalLoopEnergies["2X3TMM"][MM1];
      dG += internalLoopEnergies["2X3TMM"][MM2];
    } else {
      dG += internalLoopEnergies.TMM[MM1];
      dG += internalLoopEnergies.TMM[MM2];
    }

    return dG;
  }
};

export default internalLoop;
