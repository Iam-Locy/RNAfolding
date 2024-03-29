JavaScript module for RNA secondary structure prediction.
====================

For normal secondary structure prediction use the *fold* program. It takes a RNA sequence as string input and predicts it's structure.
It gives an out put in the form of an array [dot-bracket representation of structure, the minimum free energy of the structure] i. e.:
> rna = 'CCCAAAGGG'
>
> fold(rna)
>
> ["(((...)))", -1.2]

For folding with an adapter use the *foldWithAdapter* program. It takes a RNA sequence as string and a JS object representing the adapter as input.
It searches for the best base pair bonding between the RNA and a hairpin loop of the adapter and outputs the structure folded if the adapter bonds to the RNA.
For example:
> adapter = 'CCCGGGGGG'
>
> adapter structure = fold(adapter)
>
> ['(((...)))', -1.2]
>
> foldWithAdapter(rna, {
>   seq: adapter,
>   str: adapter structure
> })
>
> ['.........', 0.0]

The *bpDistance* program is used for calculating the base pair distance between two structures. It takes two structures represented in dot-bracket notation.
> bpDistance(".((...)).", "(((...)))")
>
> 1

You can find more examples in the */Emxamples* folder. For starters I'd recommend opening the */Examples/Using compiled script/HTML page/index.html* in a browser.


Adapted from:
------------
* Zuker, M., & Stiegler, P. (1981). Optimal computer folding of large RNA sequences using thermodynamics and auxiliary information. Nucleic Acids Research, 9(1), 133–148. https://doi.org/10.1093/nar/9.1.133 
* Hofacker, I. L., Fontana, W., Stadler, P. F., Bonhoeffer, L. S., Tacker, M., & Schuster, P. (1994). Fast folding and comparison of RNA secondary structures. Monatshefte Für Chemie Chemical Monthly, 125(2), 167–188. https://doi.org/10.1007/bf00818163
* Lorenz, R., Bernhart, S. H., Höner zu Siederdissen, C., Tafer, H., Flamm, C., Stadler, P. F., & Hofacker, I. L. (2011). Viennarna Package 2.0. Algorithms for Molecular Biology, 6(1). https://doi.org/10.1186/1748-7188-6-26

Energy values described in:
--------------
* Turner, D. H., & Mathews, D. H. (2009). NNDB: The Nearest Neighbor Parameter Database for predicting stability of Nucleic Acid Secondary Structure. Nucleic Acids Research, 38(suppl_1). https://doi.org/10.1093/nar/gkp892 
* https://rna.urmc.rochester.edu/NNDB/turner04/index.html
    
The values are rounded and combined to be consistent with:
-----------------------------------------
* https://github.com/ViennaRNA/ViennaRNA/blob/master/src/ViennaRNA/params/default.c



Written by Kóródi Lőrinc (korodilorinc@gmail.com), 2023