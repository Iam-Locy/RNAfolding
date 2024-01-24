import stackEnergies from "../../lookupTables/stackEnergies.mjs";
import bulgeEnergies from "../../lookupTables/bulgeEnergies.mjs";
import internalLoopEnergies from "../../lookupTables/internalLoopEnergies.mjs";
import internalLoop1X1Energies from "../../lookupTables/internalLoop1X1Energies.mjs";
import internalLoop1X2Energies from "../../lookupTables/internalLoop1X2Energies.mjs";
import internalLoop2X2Energies from "../../lookupTables/internalLoop2X2Energies.mjs";
import pairs from "../../lookupTables/pairs.mjs";

/* 
    Calculates the bonding energy between an RNA and the functional site of an adapter.
*/

const UPAIRS = pairs.XU;

const adapterLoop = (adapter, rna, i, j, p, q) => {
  if (p == i + 1 && q == j + 1) {
    return stackEnergies[adapter[i] + rna[j] + "/" + adapter[p] + rna[q]];
  }

  if ((p == i + 1 && q != j + 1) || (p != i + 1 && q == j + 1)) {
    const LENGTH = p == i + 1 ? q - j - 1 : p - i - 1;

    if (LENGTH == 1) {
      let dG = 0;
      dG += bulgeEnergies[1];
      dG += stackEnergies[adapter[i] + rna[j] + "/" + adapter[p] + rna[q]];
      return dG;
    } else {
      let dG = 0;

      if (LENGTH <= 30) {
        dG += bulgeEnergies[LENGTH];
      } else {
        dG += bulgeEnergies[30] + 107.856 * Math.log(LENGTH / 30);
      }

      if (UPAIRS.includes(adapter[i] + rna[j])) {
        dG += stackEnergies.XUPENALTY;
      }

      if (UPAIRS.includes(adapter[p] + rna[q])) {
        dG += stackEnergies.XUPENALTY;
      }

      return dG;
    }
  }

  if (p != i + 1 && q != j + 1) {
    const LOOPA = p - i - 1;
    const LOOPB = q - j - 1;

    if (LOOPA == 1 && LOOPB == 1) {
      return internalLoop1X1Energies[
        adapter[i] +
          rna[j] +
          "/" +
          adapter[i + 1] +
          rna[j + 1] +
          "/" +
          adapter[p] +
          rna[q]
      ];
    }

    if (LOOPA == 1 && LOOPB == 2) {
      return internalLoop1X2Energies[
        adapter[i] +
          rna[j] +
          "/" +
          adapter[i + 1] +
          rna[j + 1] +
          "/." +
          rna[q - 1] +
          "/" +
          adapter[p] +
          rna[q]
      ];
    }

    if (LOOPA == 2 && LOOPB == 1) {
      return internalLoop1X2Energies[
        adapter[q] +
          rna[p] +
          "/" +
          adapter[p - 1] +
          rna[q - 1] +
          "/." +
          rna[i + 1] +
          "/" +
          adapter[i] +
          rna[j]
      ];
    }

    if (LOOPA == 2 && LOOPB == 2) {
      return internalLoop2X2Energies[
        adapter[i] +
          rna[j] +
          "/" +
          adapter[i + 1] +
          rna[j + 1] +
          "/" +
          adapter[p - 1] +
          rna[q - 1] +
          "/" +
          adapter[p] +
          rna[q]
      ];
    }

    if (LOOPA > 2 || LOOPB > 2) {
      let dG = 0;

      if (LOOPA + LOOPB <= 30) {
        dG += internalLoopEnergies.INIT[LOOPA + LOOPB];
      } else {
        dG +=
          internalLoopEnergies.INIT[30] +
          107.856 * Math.log((LOOPA + LOOPB) / 30);
      }

      dG += internalLoopEnergies.ASYMM * Math.abs(LOOPA - LOOPB);

      const MM1 = adapter[i] + rna[j] + "/" + adapter[i + 1] + rna[j + 1];
      const MM2 = rna[q] + adapter[p] + "/" + rna[q - 1] + adapter[p - 1];

      if (LOOPA == 1 || LOOPB == 1) {
        dG += internalLoopEnergies["1XNMM"][MM1];
        dG += internalLoopEnergies["1XNMM"][MM2];
      } else if ((LOOPA == 2 && LOOPB == 3) || (LOOPA == 3 && LOOPB == 2)) {
        dG += internalLoopEnergies["2X3TMM"][MM1];
        dG += internalLoopEnergies["2X3TMM"][MM2];
      } else {
        dG += internalLoopEnergies.TMM[MM1];
        dG += internalLoopEnergies.TMM[MM2];
      }

      return dG;
    }
  }
};

export default adapterLoop;
