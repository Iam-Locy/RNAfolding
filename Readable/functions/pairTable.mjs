/*
    Generates pairing table for base pair distance calcutation.

    Example:

    '..((...))' => [9,0,0,9,8,0,0,0,4,3]

            The 3rd base paires to the 9th and the 4th base paires to the 8th.
                                        _________________
                                       |   ___________   |
                                       |  |           |  |                                
                                       ˇ  ˇ           ˇ  ˇ
    Length of the sequence => 9, 0, 0, 9, 8, 0, 0, 0, 4, 3
                                 ^  ^        ^  ^  ^
                                 |  |        |  |  |
                                These bases don't pair to anything.
*/

const pairTable = (struct) => {
  const n = struct.length;
  let open = "(";
  let close = ")";
  let stack = [];
  let table = Array(n + 1).fill(0);
  table[0] = n;

  for (let hx = 0, i = 1, j, index = 0; i <= n && index < n; i++, index++) {
    if (struct[index] == open) {
      stack[hx++] = i;
    } else if (struct[index] == close) {
      j = stack[--hx];

      table[i] = j;
      table[j] = i;
    }
  }

  return table;
};

export default pairTable;
