/*
    Class for representing structures.
    Struct:
        pairs: Array of the base pairs in the struct (2d array each inner array contains one pair).
        exterior: Set of exterior motifs: dangling ends and terminal mismatches (being a set it ensures that on base does not counted as both).
        mfe: The free energy associated with the structure.
    
        addEnergy(e): Changes mfe by e.
        addPair(e, pair):   Adds pair (pair: [i,j]) to pairs and changes mfe by e (the energy contribution of the structure closed by the pair).
        addExterior(e, bases): Adds exterior bases (bases: [i] or [i,j]) to exterior and changes mfe by e (the energy contribution of exterior motif).
        clone(org): Returns a copy of org.
        merge(a, b): Merges a and b and returns the new combined Struct.
*/

class Struct {
  constructor(mfe, { pairs = [], exterior = [] } = {}) {
    this.pairs = pairs;
    this.exterior = new Set(exterior);
    this.mfe = mfe;
  }

  addEnergy(e) {
    this.mfe += e;
  }

  addPair(e, pair) {
    this.mfe += e;
    this.pairs.push(pair);
  }

  addExterior(e, bases) {
    this.mfe += e;
    bases.forEach((b) => {
      this.exterior.add(b);
    });
  }

  static clone(org) {
    return new Struct(org.mfe, {
      pairs: [...org.pairs],
      exterior: org.exterior,
    });
  }

  static merge(a, b) {
    let mfe = a.mfe + b.mfe;
    const pairs = a.pairs.concat(b.pairs);

    let pairedBases = [];
    for (let i = 0; i < pairs.length; i++) {
      if (
        pairedBases.includes(pairs[i][0]) ||
        pairedBases.includes(pairs[i][1])
      ) {
        mfe = Infinity;
        break;
      }
      pairedBases.push(pairs[i][0]);
      pairedBases.push(pairs[i][1]);
    }

    const exterior = new Set([...a.exterior, ...b.exterior]);

    return new Struct(mfe, { pairs, exterior });
  }
}

export default Struct;
