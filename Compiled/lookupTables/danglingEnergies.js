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
var _default = exports["default"] = JSON.parse("{\n  \".A/AU\": -70,\n  \".C/AU\": -10,\n  \".G/AU\": -70,\n  \".U/AU\": -10,\n  \".A/CG\": -110,\n  \".C/CG\": -40,\n  \".G/CG\": -130,\n  \".U/CG\": -60,\n  \".A/GC\": -170,\n  \".C/GC\": -80,\n  \".G/GC\": -170,\n  \".U/GC\": -120,\n  \".A/GU\": -70,\n  \".C/GU\": -10,\n  \".G/GU\": -70,\n  \".U/GU\": -10,\n  \".A/UA\": -80,\n  \".C/UA\": -50,\n  \".G/UA\": -80,\n  \".U/UA\": -60,\n  \".A/UG\": -80,\n  \".C/UG\": -50,\n  \".G/UG\": -80,\n  \".U/UG\": -60,\n  \".X/AU\": -10,\n  \".X/CG\": -40,\n  \".X/GC\": -80,\n  \".X/GU\": -10,\n  \".X/UA\": -50,\n  \".X/UG\": -50,\n  \"A./AU\": -30,\n  \"C./AU\": -30,\n  \"G./AU\": -40,\n  \"U./AU\": -20,\n  \"A./CG\": -50,\n  \"C./CG\": -30,\n  \"G./CG\": -20,\n  \"U./CG\": -10,\n  \"A./GC\": -20,\n  \"C./GC\": -30,\n  \"G./GC\":   0,\n  \"U./GC\":   0,\n  \"A./GU\": -30,\n  \"C./GU\": -30,\n  \"G./GU\": -40,\n  \"U./GU\": -20,\n  \"A./UA\": -30,\n  \"C./UA\": -10,\n  \"G./UA\": -20,\n  \"U./UA\": -20,\n  \"A./UG\": -30,\n  \"C./UG\": -10,\n  \"G./UG\": -20,\n  \"U./UG\": -20,\n  \"X./AU\": -20,\n  \"X./CG\": -10,\n  \"X./GC\":  0,\n  \"X./GU\": -20,\n  \"X./UA\": -10,\n  \"X./UG\": -10\n}");