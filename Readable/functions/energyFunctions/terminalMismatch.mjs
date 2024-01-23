import terminalMismatchEnergies from "../../lookupTables/terminalMismatchEnergies.mjs";

/*
    Pairs represented in the JSON file as:

        5' AG 3'             5' AG 3'
        |   =  AU/GG          |   = CG/CA   
        3' UG 5'             3' CC 5'
*/

const terminalMM = (seq, pair5, pair3, mismatch5, mismatch3) => {
  return terminalMismatchEnergies[
    seq[pair5] + seq[pair3] + "/" + seq[mismatch3] + seq[mismatch5]
  ];
};

export default terminalMM;
