What is this?
=============

This is an example of using the bundled fold, foldWithAdapter and bpDistance programs.
They can be easly used with:
>const fold = require("fold.js")

The program folds a random RNA sequence with *fold.js*. Then does the same with a random adapter.
In the next step it folds the RNA with the adapter via *foldWithAdapter.js*.
Finally it calulates the base pair distance of the two structure with *bpDistance.js*

To try it out:
>node index.js