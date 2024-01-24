What is this?
=============

This is an example for using the raw fold, foldWithAdapter and bpDistance programs.
The main file is src/index.js it is bundled with Webpack using Babel. For Babel I used the @babel/preset-env preset.

The program folds a random RNA sequence with *fold.mjs*. Then does the same with a random adapter.
In the next step it folds the RNA with the adapter via *foldWithAdapter.mjs*.
Finally it calulates the base pair distance of the two structure with *bpDistance.mjs*

To bundle the files use:
>npm run webpack

To run the program:
>npm start