/* 
    Calculates base pair distance from the dot-bracket representation of two structures using pair tables.

    Example:

    Pair tables:
    
    ..((...)).                      .(((...)))
        |                                |
        V                                V
  0,0,9,8,0,0,0,4,3,0           0,9,8,7,0,0,0,4,3,2

    Result: 1

*/

import pairTable from "./functions/pairTable.mjs";

const bpDistance = (struct1, struct2) => {
  const table1 = pairTable(struct1);
  const table2 = pairTable(struct2);

  let dist = 0;

  const n = table1[0] < table2[0] ? table1[0] : table2[0];

  for (let i = 1; i <= n; i++) {
    if (table1[i] != table2[i]) {
      if (table1[i] > i) {
        dist++;
      }

      if (table2[i] > i) {
        dist++;
      }
    }
  }

  return dist;
};

export default bpDistance;
