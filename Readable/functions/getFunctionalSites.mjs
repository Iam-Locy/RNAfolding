/*
    Findes functional sites on adapter. A functional site is the unpaired end part of a hairpin loop.
        
        CCCC... AA
            |||    A  Functional site: A_8 to C_12
            ˙˙˙ CA
    
*/

const getFunctionalSites = (adapterSeq, adapterStr) => {
  let regions = new Set();
  let start = 0;
  let prev = "";

  for (let i = 0; i < adapterStr.length; i++) {
    if (adapterStr[i] == "." && prev == "(") {
      start = i;
    } else if (adapterStr[i] == ")" && prev == ".") {
      regions.add(adapterSeq.slice(start, i));
    }

    prev = adapterStr[i];
  }

  /*
        Generating 3' -> 5' functional sites from 5' -> 3' functional sites.
    */

  let reverseRegions = new Set();

  regions.forEach((reg) => {
    let out = "";
    for (let i = reg.length - 1; i >= 0; i--) {
      out += reg[i];
    }

    reverseRegions.add(out);
  });

  /*
        The result has both A_8 to C_12 and C_12 to A_8.
    */

  return new Set([...regions, ...reverseRegions]);
};

export default getFunctionalSites;
