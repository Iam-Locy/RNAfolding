import Struct from "../../struct.mjs";

/* 
  Returns the struct with the lowest free energy in the matrix.
*/

const getMinOfMatrix = (matrix) => {
  let output = new Struct(Infinity);

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j].mfe < output.mfe) {
        output = matrix[i][j];
      }
    }
  }

  return output;
};

export default getMinOfMatrix;
