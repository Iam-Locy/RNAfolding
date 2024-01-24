What is this?
====================

This is an example for using the raw fold, foldWithAdapter and bpDistance programs.
I used a simple .mjs file (index.msj) and I imported the programs into it with:
>import fold from "./folding/fold.mjs"

The program folds a random RNA sequence with *fold.mjs*. Then does the same with a random adapter.
In the next step it folds the RNA with the adapter via *foldWithAdapter.mjs*.
Finally it calulates the base pair distance of the two structure with *bpDistance.mjs*

The index.mjs file can be run with Node like:
>node index.mjs