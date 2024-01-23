"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
/*
    Energy values described in:
       Turner, D. H., & Mathews, D. H. (2009). NNDB: The Nearest Neighbor Parameter Database for predicting stability of Nucleic Acid Secondary Structure. Nucleic Acids Research, 38(suppl_1). https://doi.org/10.1093/nar/gkp892 
    and:
        https://rna.urmc.rochester.edu/NNDB/turner04/index.html
    
    The values are rounded and combined to be consistent with:
        https://github.com/ViennaRNA/ViennaRNA/blob/master/src/ViennaRNA/params/default.c
*/
var _default = exports["default"] = JSON.parse("{\n    \"A\":  930,\n    \"B\":  90,\n    \"C\": -90,\n    \"STRAIN\": 310\n}");