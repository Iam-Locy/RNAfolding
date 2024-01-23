/*
    Energy values described in:
       Turner, D. H., & Mathews, D. H. (2009). NNDB: The Nearest Neighbor Parameter Database for predicting stability of Nucleic Acid Secondary Structure. Nucleic Acids Research, 38(suppl_1). https://doi.org/10.1093/nar/gkp892 
    and:
        https://rna.urmc.rochester.edu/NNDB/turner04/index.html
    
    The values are rounded and combined to be consistent with:
        https://github.com/ViennaRNA/ViennaRNA/blob/master/src/ViennaRNA/params/default.c
*/

export default JSON.parse(`{
    "AU/AU":  -90,
    "AU/CG": -220,
    "AU/GC": -210,
    "AU/GU":  -60,
    "AU/UA": -110,
    "AU/UG": -140,
    "CG/AU": -210,
    "CG/CG": -330,
    "CG/GC": -240,
    "CG/GU": -140,
    "CG/UA": -210,
    "CG/UG": -210,
    "GC/AU": -240,
    "GC/CG": -340,
    "GC/GC": -330,
    "GC/GU": -150,
    "GC/UA": -220,
    "GC/UG": -250,
    "GU/AU": -130,
    "GU/CG": -250,
    "GU/GC": -210,
    "GU/GU":  -50,
    "GU/UA": -140,
    "GU/UG":  130,
    "UA/AU": -130,
    "UA/CG": -240,
    "UA/GC": -210,
    "UA/GU": -100,
    "UA/UA":  -90,
    "UA/UG": -130,
    "UG/AU": -100,
    "UG/CG": -150,
    "UG/GC": -140,
    "UG/GU":   30,
    "UG/UA":  -60,
    "UG/UG":  -50,
    "XUPENALTY": 50
}`);
