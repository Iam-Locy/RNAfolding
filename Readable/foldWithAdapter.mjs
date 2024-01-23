import getBondSites from "./functions/getBondSites.mjs";
import getFunctionalSites from "./functions/getFunctionalSites.mjs";
import fold from "./fold.mjs";
import Struct from "./struct.mjs";

/*
    Folds rna with adapter.
 */

const foldWithAdapter = (rna, adapter) => {
  //Gather all the functional sites from adapter.
  const functionalSites = Array.from(
    getFunctionalSites(adapter.seq, adapter.str[0])
  );

  //The rna - adapter functional site with the lowest free energy
  let best = new Struct(0);

  functionalSites.map((site) => {
    const bondSites = getBondSites(rna, site);
    if (bondSites.mfe < best.mfe) best = bondSites;
  });

  //The rna sequence used to generate the output fold
  let out = Array.from(rna);

  //Changes every base in rna connected to the adapter to X
  /* 
        Example:
            GGGAAACCC =normal fold=> [(((...))), -1.2] GGG A
                                                       |||   A
                                                       CCC A
                                                       
            GGGAAACCC =fold with GGGGGGCCC=> equals GGGAAAXXX =normal fold=>  [........., 0.0]

            GGGAAACCC <== RNA
                  |||
                  GGG
                  G-C <== Adapter
                  G-C
                  G-C 
    */
  if (best.mfe < 0) {
    let blocked = best.pairs.map((pair) => {
      return pair[1];
    });

    blocked.forEach((index) => {
      out[index] = "X";
    });
  }

  return fold(out.join(""));
};

export default foldWithAdapter;
