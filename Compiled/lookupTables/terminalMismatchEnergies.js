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
var _default = exports["default"] = JSON.parse("{\n  \"AU/AA\": -80,\n  \"AU/AC\": -100,\n  \"AU/AG\": -80,\n  \"AU/AU\": -100,\n  \"AU/AX\": -80,\n  \"AU/CA\": -60,\n  \"AU/CC\": -70,\n  \"AU/CG\": -60,\n  \"AU/CU\": -70,\n  \"AU/CX\": -60,\n  \"AU/GA\": -80,\n  \"AU/GC\": -100,\n  \"AU/GG\": -80,\n  \"AU/GU\": -100,\n  \"AU/GX\": -80,\n  \"AU/UA\": -60,\n  \"AU/UC\": -80,\n  \"AU/UG\": -60,\n  \"AU/UU\": -80,\n  \"AU/UX\": -60,\n  \"AU/XA\": -60,\n  \"AU/XC\": -70,\n  \"AU/XG\": -60,\n  \"AU/XU\": -70,\n  \"AU/XX\": -60,\n\n  \"CG/AA\": -150,\n  \"CG/AC\": -150,\n  \"CG/AG\": -140,\n  \"CG/AU\": -150,\n  \"CG/AX\": -140,\n  \"CG/CA\": -100,\n  \"CG/CC\": -110,\n  \"CG/CG\": -100,\n  \"CG/CU\": -80,\n  \"CG/CX\": -80,\n  \"CG/GA\": -140,\n  \"CG/GC\": -150,\n  \"CG/GG\": -160,\n  \"CG/GU\": -150,\n  \"CG/GX\": -140,\n  \"CG/UA\": -100,\n  \"CG/UC\": -140,\n  \"CG/UG\": -100,\n  \"CG/UU\": -120,\n  \"CG/UX\": -100,\n  \"CG/XA\": -100,\n  \"CG/XC\": -110,\n  \"CG/XG\": -100,\n  \"CG/XU\": -80,\n  \"CG/XX\": -80,\n  \"GC/AA\": -110,\n  \"GC/AC\": -150,\n  \"GC/AG\": -130,\n  \"GC/AU\": -150,\n  \"GC/AX\": -110,\n  \"GC/CA\": -110,\n  \"GC/CC\": -70,\n  \"GC/CG\": -110,\n  \"GC/CU\": -50,\n  \"GC/CX\": -50,\n  \"GC/GA\": -160,\n  \"GC/GC\": -150,\n  \"GC/GG\": -140,\n  \"GC/GU\": -150,\n  \"GC/GX\": -140,\n  \"GC/UA\": -110,\n  \"GC/UC\": -100,\n  \"GC/UG\": -110,\n  \"GC/UU\": -70,\n  \"GC/UX\": -70,\n  \"GC/XA\": -110,\n  \"GC/XC\": -70,\n  \"GC/XG\": -110,\n  \"GC/XU\": -50,\n  \"GC/XX\": -50,\n  \"GU/AA\": -30,\n  \"GU/AC\": -100,\n  \"GU/AG\": -80,\n  \"GU/AU\": -100,\n  \"GU/AX\": -30,\n  \"GU/CA\": -60,\n  \"GU/CC\": -70,\n  \"GU/CG\": -60,\n  \"GU/CU\": -70,\n  \"GU/CX\": -60,\n  \"GU/GA\": -60,\n  \"GU/GC\": -100,\n  \"GU/GG\": -80,\n  \"GU/GU\": -100,\n  \"GU/GX\": -80,\n  \"GU/UA\": -60,\n  \"GU/UC\": -80,\n  \"GU/UG\": -60,\n  \"GU/UU\": -60,\n  \"GU/UX\": -50,\n  \"GU/XA\": -30,\n  \"GU/XC\": -70,\n  \"GU/XG\": -60,\n  \"GU/XU\": -60,\n  \"GU/XX\": -30,\n  \"UA/AA\": -100,\n  \"UA/AC\": -80,\n  \"UA/AG\": -110,\n  \"UA/AU\": -80,\n  \"UA/AX\": -80,\n  \"UA/CA\": -70,\n  \"UA/CC\": -60,\n  \"UA/CG\": -70,\n  \"UA/CU\": -50,\n  \"UA/CX\": -50,\n  \"UA/GA\": -110,\n  \"UA/GC\": -80,\n  \"UA/GG\": -120,\n  \"UA/GU\": -80,\n  \"UA/GX\": -80,\n  \"UA/UA\": -70,\n  \"UA/UC\": -60,\n  \"UA/UG\": -70,\n  \"UA/UU\": -50,\n  \"UA/UX\": -50,\n  \"UA/XA\": -70,\n  \"UA/XC\": -60,\n  \"UA/XG\": -70,\n  \"UA/XU\": -50,\n  \"UA/XX\": -50,\n  \"UG/AA\": -100,\n  \"UG/AC\": -80,\n  \"UG/AG\": -110,\n  \"UG/AU\": -80,\n  \"UG/AX\": -80,\n  \"UG/CA\": -70,\n  \"UG/CC\": -60,\n  \"UG/CG\": -70,\n  \"UG/CU\": -50,\n  \"UG/CX\": -50,\n  \"UG/GA\": -50,\n  \"UG/GC\": -80,\n  \"UG/GG\": -80,\n  \"UG/GU\": -80,\n  \"UG/GX\": -50,\n  \"UG/UA\": -70,\n  \"UG/UC\": -60,\n  \"UG/UG\": -70,\n  \"UG/UU\": -50,\n  \"UG/UX\": -50,\n  \"UG/XA\": -50,\n  \"UG/XC\": -60,\n  \"UG/XG\": -70,\n  \"UG/XU\": -50,\n  \"UG/XX\": -50\n}\n");