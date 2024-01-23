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
var _default = exports["default"] = JSON.parse("{\n    \"INIT\":{\n        \"3\": 540,\n        \"4\": 560,\n        \"5\": 570,\n        \"6\": 540,\n        \"7\": 600,\n        \"8\": 550,\n        \"9\": 640,\n        \"10\": 650,\n        \"11\": 660,\n        \"12\": 670,\n        \"13\": 680,\n        \"14\": 690,\n        \"15\": 690,\n        \"16\": 700,\n        \"17\": 710,\n        \"18\": 710,\n        \"19\": 720,\n        \"20\": 720,\n        \"21\": 730,\n        \"22\": 730,\n        \"23\": 740,\n        \"24\": 740,\n        \"25\": 750,\n        \"26\": 750,\n        \"27\": 750,\n        \"28\": 760,\n        \"29\": 760,\n        \"30\": 770\n    },\n    \"HAIRPINMM\":{\n        \"AU/AA\": -30,\n        \"AU/AC\": -50,\n        \"AU/AG\": -30,\n        \"AU/AU\": -50,\n        \"AU/AX\": -30,\n        \"AU/CA\": -10,\n        \"AU/CC\": -20,\n        \"AU/CG\": -10,\n        \"AU/CU\": -20,\n        \"AU/CX\": -10,\n        \"AU/GA\": -120,\n        \"AU/GC\": -50,\n        \"AU/GG\": -110,\n        \"AU/GU\": -50,\n        \"AU/GX\": -50,\n        \"AU/UA\": -10,\n        \"AU/UC\": -30,\n        \"AU/UG\": -10,\n        \"AU/UU\": -120,\n        \"AU/UX\": -10,\n        \"AU/XA\": -10,\n        \"AU/XG\": -20,\n        \"AU/XC\": -10,\n        \"AU/XU\": -20,\n        \"AU/XX\": -10,\n        \"CG/AA\": -150,\n        \"CG/AC\": -150,\n        \"CG/AG\": -140,\n        \"CG/AU\": -150,\n        \"CG/AX\": -140,\n        \"CG/CA\": -100,\n        \"CG/CC\": -110,\n        \"CG/CG\": -100,\n        \"CG/CU\": -80,\n        \"CG/CX\": -80,\n        \"CG/GA\": -230,\n        \"CG/GC\": -150,\n        \"CG/GG\": -240,\n        \"CG/GU\": -150,\n        \"CG/GX\": -150,\n        \"CG/UA\": -100,\n        \"CG/UC\": -140,\n        \"CG/UG\": -100,\n        \"CG/UU\": -210,\n        \"CG/UX\": -100,\n        \"CG/XA\": -100,\n        \"CG/XC\": -110,\n        \"CG/XG\": -100,\n        \"CG/XU\": -80,\n        \"CG/XX\": -80,\n        \"GC/AA\": -110,\n        \"GC/AC\": -150,\n        \"GC/AG\": -130,\n        \"GC/AU\": -150,\n        \"CG/AX\": -110,\n        \"GC/CA\": -110,\n        \"GC/CC\": -70,\n        \"GC/CG\": -110,\n        \"GC/CU\": -50,\n        \"GC/CX\": -50,\n        \"GC/GA\": -250,\n        \"GC/GC\": -150,\n        \"GC/GG\": -220,\n        \"GC/GU\": -150,\n        \"GC/GX\": -150,\n        \"GC/UA\": -110,\n        \"GC/UC\": -100,\n        \"GC/UG\": -110,\n        \"GC/UU\": -160,\n        \"GC/UX\": -100,\n        \"GC/XA\": -110,\n        \"GC/XC\": -70,\n        \"GC/XG\": -110,\n        \"GC/XU\": -50,\n        \"GC/XX\": -50,\n        \"GU/AA\": 20,\n        \"GU/AC\": -50,\n        \"GU/AG\": -30,\n        \"GU/AU\": -50,\n        \"GU/AX\":  20,\n        \"GU/CA\": -10,\n        \"GU/CC\": -20,\n        \"GU/CG\": -10,\n        \"GU/CU\": -20,\n        \"GU/CX\": -10,\n        \"GU/GA\": -100,\n        \"GU/GC\": -50,\n        \"GU/GG\": -110,\n        \"GU/GU\": -50,\n        \"GU/GX\": -50,\n        \"GU/UA\": -10,\n        \"GU/UC\": -30,\n        \"GU/UG\": -10,\n        \"GU/UU\": -100,\n        \"GU/UX\": -10,\n        \"GU/XA\":  20,\n        \"GU/XC\": -20,\n        \"GU/XG\": -10,\n        \"GU/XU\": -20,\n        \"GU/XX\":  20,\n        \"UA/AA\": -50,\n        \"UA/AC\": -30,\n        \"UA/AG\": -50,\n        \"UA/AU\": -30,\n        \"UA/AX\": -30,\n        \"UA/CA\": -20,\n        \"UA/CC\": -10,\n        \"UA/CG\": -20,\n        \"UA/CU\": 0,\n        \"UA/CX\": 0,\n        \"UA/GA\": -150,\n        \"UA/GC\": -30,\n        \"UA/GG\": -150,\n        \"UA/GU\": -30,\n        \"UA/GX\": -30,\n        \"UA/UA\": -20,\n        \"UA/UC\": -10,\n        \"UA/UG\": -20,\n        \"UA/UU\": -90,\n        \"UA/UX\": -10,\n        \"UA/XA\": -20,\n        \"UA/XC\": -10,\n        \"UA/XG\": -20,\n        \"UA/XU\":  0,\n        \"UA/XX\":  0,\n        \"UG/AA\": -50,\n        \"UG/AC\": -30,\n        \"UG/AG\": -60,\n        \"UG/AU\": -30,\n        \"UG/AX\": -30,\n        \"UG/CA\": -20,\n        \"UG/CC\": -10,\n        \"UG/CG\": -20,\n        \"UG/CU\":  0,\n        \"UG/CX\":  0,\n        \"UG/GA\": -90,\n        \"UG/GC\": -30,\n        \"UG/GG\": -110,\n        \"UG/GU\": -30,\n        \"UG/GX\": -30,\n        \"UG/UA\": -20,\n        \"UG/UC\": -10,\n        \"UG/UG\": -20,\n        \"UG/UU\": -90,\n        \"UG/UX\": -10,\n        \"UG/XA\": -20,\n        \"UG/XC\": -10,\n        \"UG/XG\": -20,\n        \"UG/XU\":  0,\n        \"UG/XX\":  0\n    },\n    \"SPECIAL\": {\n        \"CAACG\":     680,\n        \"GUUAC\":     690,\n        \"CUACGG\":    280,\n        \"CUCCGG\":    270,\n        \"CUUCGG\":    370,\n        \"CUUUGG\":    370,\n        \"CCAAGG\":    330,\n        \"CCCAGG\":    340,\n        \"CCGAGG\":    350,\n        \"CCUAGG\":    370,\n        \"CCACGG\":    370,\n        \"CCGCGG\":    360,\n        \"CCUCGG\":    250,\n        \"CUAAGG\":    360,\n        \"CUCAGG\":    370,\n        \"CUUAGG\":    350,\n        \"CUGCGG\":    280,\n        \"CAACGG\":    550,\n        \"ACAGUGCU\":  290,\n        \"ACAGUGAU\":  360,\n        \"ACAGUGUU\":  180,\n        \"ACAGUACU\":  280\n    }\n}");