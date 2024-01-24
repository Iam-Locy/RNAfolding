/*
    Generates dot-bracket structure representation from Struct object.
 */

const dotBracket = (seq, structure) => {
  let db = ".".repeat(seq.length);

  structure.pairs.forEach((pair) => {
    if (pair[0] != undefined) {
      db =
        db.substring(0, pair[0]) +
        "(" +
        db.substring(pair[0] + 1, pair[1]) +
        ")" +
        db.substring(pair[1] + 1);
    }
  });

  return [db, structure.mfe / 100];
};

export default dotBracket;
