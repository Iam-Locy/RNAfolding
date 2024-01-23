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
var _default = exports["default"] = JSON.parse("{\n    \"AU/AU\":  -90,\n    \"AU/CG\": -220,\n    \"AU/GC\": -210,\n    \"AU/GU\":  -60,\n    \"AU/UA\": -110,\n    \"AU/UG\": -140,\n    \"CG/AU\": -210,\n    \"CG/CG\": -330,\n    \"CG/GC\": -240,\n    \"CG/GU\": -140,\n    \"CG/UA\": -210,\n    \"CG/UG\": -210,\n    \"GC/AU\": -240,\n    \"GC/CG\": -340,\n    \"GC/GC\": -330,\n    \"GC/GU\": -150,\n    \"GC/UA\": -220,\n    \"GC/UG\": -250,\n    \"GU/AU\": -130,\n    \"GU/CG\": -250,\n    \"GU/GC\": -210,\n    \"GU/GU\":  -50,\n    \"GU/UA\": -140,\n    \"GU/UG\":  130,\n    \"UA/AU\": -130,\n    \"UA/CG\": -240,\n    \"UA/GC\": -210,\n    \"UA/GU\": -100,\n    \"UA/UA\":  -90,\n    \"UA/UG\": -130,\n    \"UG/AU\": -100,\n    \"UG/CG\": -150,\n    \"UG/GC\": -140,\n    \"UG/GU\":   30,\n    \"UG/UA\":  -60,\n    \"UG/UG\":  -50,\n    \"XUPENALTY\": 50\n}");