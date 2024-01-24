/* 
    Prints the minimum free energies of the structures as a table.
*/

const printMatrix = (matrix) => {
  matrix.forEach((row) => {
    let out = "";
    for (let i = 0; i < row.length; i++) {
      if (row[i] == undefined) {
        out += "Und" + "   ";
      } else if (row[i].mfe == Infinity) {
        out += "Inf" + "   ";
      } else {
        let item = Math.round(row[i].mfe * 10) / 10;
        out += item + " ".repeat(6 - String(item).length);
      }
    }
    console.log(out);
  });
};

export default printMatrix;
