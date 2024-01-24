import v from "./functions/matrixFunctions/v.mjs";
import w from "./functions/matrixFunctions/w.mjs";
import wm from "./functions/matrixFunctions/wm.mjs";
import dotBracket from "./functions/dotBracket.mjs";

/*
    Handler for the folding algorithm.
*/

const fold = (seq) => {
  if (seq == "") return ["", 0];

  /*
        Matrices of dynamic algorithm:
            V: Best structures if i and j are paired.
            W: Best structures if the RNA strarts from i and ends at j.
            WM: Best structures if the RNA consists of 2 loops i - k and k+1 - j.
    */
  let matrices = {
    w: [...Array(seq.length)].map((e) => Array(seq.length).fill(undefined)),
    v: [...Array(seq.length)].map((e) => Array(seq.length).fill(undefined)),
    wm: [...Array(seq.length)].map((e) => Array(seq.length).fill(undefined)),
  };

  //Filling up matrices.
  for (let i = 0; i < seq.length; i++) {
    for (let j = i; j < seq.length; j++) {
      v(seq, i, j, matrices), wm(seq, i, j, matrices);
      w(seq, i, j, matrices);
    }
  }

  //Generate the dot-bracket notation of the best structure if it has a minimum free energy less than 0. Otherwise returning a line structure with the mfe = 0.
  if (matrices.w[0][seq.length - 1].mfe < 0) {
    return dotBracket(seq, matrices.w[0][seq.length - 1]);
  } else {
    return dotBracket(seq, { pairs: [], mfe: 0.0 });
  }
};

export default fold;
