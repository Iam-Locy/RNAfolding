/*
    Energy values described in:
       Turner, D. H., & Mathews, D. H. (2009). NNDB: The Nearest Neighbor Parameter Database for predicting stability of Nucleic Acid Secondary Structure. Nucleic Acids Research, 38(suppl_1). https://doi.org/10.1093/nar/gkp892 
    and:
        https://rna.urmc.rochester.edu/NNDB/turner04/index.html
    
    The values are rounded and combined to be consistent with:
        https://github.com/ViennaRNA/ViennaRNA/blob/master/src/ViennaRNA/params/default.c
*/
export default JSON.parse(`{
    "INIT": {
        "4": 110,
        "5": 200,
        "6": 200,
        "7": 210,
        "8": 230,
        "9": 240,
        "10": 250,
        "11": 260,
        "12": 270,
        "13": 280,
        "14": 290,
        "15": 290,
        "16": 300,
        "17": 310,
        "18": 310,
        "19": 320,
        "20": 330,
        "21": 330,
        "22": 340,
        "23": 340,
        "24": 350,
        "25": 350,
        "26": 350,
        "27": 360,
        "28": 360,
        "29": 370,
        "30": 370
    },
    "ASYMM": 60,
    "XUCLS": 70,
    "1XNMM":{
        "AU/AA": 70,
        "AU/AC": 70,
        "AU/AG": 70,
        "AU/AU": 70,
        "AU/AX": 70,
        "AU/CA": 70,
        "AU/CC": 70,
        "AU/CG": 70,
        "AU/CU": 70,
        "AU/CX": 70,
        "AU/GA": 70,
        "AU/GC": 70,
        "AU/GG": 70,
        "AU/GU": 70,
        "AU/GX": 70,
        "AU/UA": 70,
        "AU/UC": 70,
        "AU/UG": 70,
        "AU/UU": 70,
        "AU/UX": 70,
        "AU/XA": 70,
        "AU/XC": 70,
        "AU/XG": 70,
        "AU/XU": 70,
        "CG/AA": 0,
        "CG/AC": 0,
        "CG/AG": 0,
        "CG/AU": 0,
        "CG/AX": 0,
        "CG/CA": 0,
        "CG/CC": 0,
        "CG/CG": 0,
        "CG/CU": 0,
        "CG/CX": 0,
        "CG/GA": 0,
        "CG/GC": 0,
        "CG/GG": 0,
        "CG/GU": 0,
        "CG/GX": 0,
        "CG/UA": 0,
        "CG/UC": 0,
        "CG/UG": 0,
        "CG/UU": 0,
        "CG/UX": 0,
        "CG/XA": 0,
        "CG/XC": 0,
        "CG/XG": 0,
        "CG/XU": 0,
        "GC/AA": 0,
        "GC/AC": 0,
        "GC/AG": 0,
        "GC/AU": 0,
        "GC/AX": 0,
        "GC/CA": 0,
        "GC/CC": 0,
        "GC/CG": 0,
        "GC/CU": 0,
        "GC/CX": 0,
        "GC/GA": 0,
        "GC/GC": 0,
        "GC/GG": 0,
        "GC/GU": 0,
        "GC/GX": 0,
        "GC/UA": 0,
        "GC/UC": 0,
        "GC/UG": 0,
        "GC/UU": 0,
        "GC/UX": 0,
        "GC/XA": 0,
        "GC/XC": 0,
        "GC/XG": 0,
        "GC/XU": 0,
        "GU/AA": 70,
        "GU/AC": 70,
        "GU/AG": 70,
        "GU/AU": 70,
        "GU/AX": 70,
        "GU/CA": 70,
        "GU/CC": 70,
        "GU/CG": 70,
        "GU/CU": 70,
        "GU/CX": 70,
        "GU/GA": 70,
        "GU/GC": 70,
        "GU/GG": 70,
        "GU/GU": 70,
        "GU/GX": 70,
        "GU/UA": 70,
        "GU/UC": 70,
        "GU/UG": 70,
        "GU/UU": 70,
        "GU/UX": 70,
        "GU/XA": 70,
        "GU/XC": 70,
        "GU/XG": 70,
        "GU/XU": 70,
        "UA/AA": 70,
        "UA/AC": 70,
        "UA/AG": 70,
        "UA/AU": 70,
        "UA/AX": 70,
        "UA/CA": 70,
        "UA/CC": 70,
        "UA/CG": 70,
        "UA/CU": 70,
        "UA/CX": 70,
        "UA/GA": 70,
        "UA/GC": 70,
        "UA/GG": 70,
        "UA/GU": 70,
        "UA/GX": 70,
        "UA/UA": 70,
        "UA/UC": 70,
        "UA/UG": 70,
        "UA/UU": 70,
        "UA/UX": 70,
        "UA/XA": 70,
        "UA/XC": 70,
        "UA/XG": 70,
        "UA/XU": 70,
        "UG/AA": 70,
        "UG/AC": 70,
        "UG/AG": 70,
        "UG/AU": 70,
        "UG/AX": 70,
        "UG/CA": 70,
        "UG/CC": 70,
        "UG/CG": 70,
        "UG/CU": 70,
        "UG/CX": 70,
        "UG/GA": 70,
        "UG/GC": 70,
        "UG/GG": 70,
        "UG/GU": 70,
        "UG/GX": 70,
        "UG/UA": 70,
        "UG/UC": 70,
        "UG/UG": 70,
        "UG/UU": 70,
        "UG/UX": 70,
        "UG/XA": 70,
        "UG/XC": 70,
        "UG/XG": 70,
        "UG/XU": 70
    },
    "2X3TMM": {
        "AU/AA": 70,
        "AU/AC": 70,
        "AU/AG": 70,
        "AU/AU": 70,
        "AU/AX": 70,
        "AU/CA": 70,
        "AU/CC": 70,
        "AU/CG": 70,
        "AU/CU": 70,
        "AU/CX": 70,
        "AU/GA": -40,
        "AU/GC": 70,
        "AU/GG": 0,
        "AU/GU": 70,
        "AU/GX": 70,
        "AU/UA": 70,
        "AU/UC": 70,
        "AU/UG": 70,
        "AU/UU": 40,
        "AU/UX": 70,
        "AU/XA": 70,
        "AU/XC": 70,
        "AU/XG": 70,
        "AU/XU": 70,
        "CG/AA": 0,
        "CG/AC": 0,
        "CG/AG": -50,
        "CG/AU": 0,
        "CG/AX": 0,
        "CG/CA": 0,
        "CG/CC": 0,
        "CG/CG": 0,
        "CG/CU": 0,
        "CG/CX": 0,
        "CG/GA": -110,
        "CG/GC": 0,
        "CG/GG": -70,
        "CG/GU": 0,
        "CG/GX": 0,
        "CG/UA": 0,
        "CG/UC": 0,
        "CG/UG": 0,
        "CG/UU": -30,
        "CG/UX": 0,
        "CG/XA": 0,
        "CG/XC": 0,
        "CG/XG": 0,
        "CG/XU": 0,
        "GC/AA": 0,
        "GC/AC": 0,
        "GC/AG": 0,
        "GC/AU": 0,
        "GC/AX": 0,
        "GC/CA": 0,
        "GC/CC": 0,
        "GC/CG": 0,
        "GC/CU": 0,
        "GC/CX": 0,
        "GC/GA": -120,
        "GC/GC": 0,
        "GC/GG": -70,
        "GC/GU": 0,
        "GC/GX": 0,
        "GC/UA": 0,
        "GC/UC": 0,
        "GC/UG": 0,
        "GC/UU": -30,
        "GC/UX": 0,
        "GC/XA": 0,
        "GC/XC": 0,
        "GC/XG": 0,
        "GC/XU": 0,
        "GU/AA": 70,
        "GU/AC": 70,
        "GU/AG": 70,
        "GU/AU": 70,
        "GU/AX": 70,
        "GU/CA": 70,
        "GU/CC": 70,
        "GU/CG": 70,
        "GU/CU": 70,
        "GU/CX": 70,
        "GU/GA": -40,
        "GU/GC": 70,
        "GU/GG": 0,
        "GU/GU": 70,
        "GU/GX": 70,
        "GU/UA": 70,
        "GU/UC": 70,
        "GU/UG": 70,
        "GU/UU": 40,
        "GU/UX": 70,
        "GU/XA": 70,
        "GU/XC": 70,
        "GU/XG": 70,
        "GU/XU": 70,
        "UA/AA": 70,
        "UA/AC": 70,
        "UA/AG": 20,
        "UA/AU": 70,
        "UA/AX": 70,
        "UA/CA": 70,
        "UA/CC": 70,
        "UA/CG": 70,
        "UA/CU": 70,
        "UA/CX": 70,
        "UA/GA": -40,
        "UA/GC": 70,
        "UA/GG": 0,
        "UA/GU": 70,
        "UA/GX": 70,
        "UA/UA": 70,
        "UA/UC": 70,
        "UA/UG": 70,
        "UA/UU": 40,
        "UA/UX": 70,
        "UA/XA": 70,
        "UA/XC": 70,
        "UA/XG": 70,
        "UA/XU": 70,
        "UG/AA": 70,
        "UG/AC": 70,
        "UG/AG": 20,
        "UG/AU": 70,
        "UG/AX": 70,
        "UG/CA": 70,
        "UG/CC": 70,
        "UG/CG": 70,
        "UG/CU": 70,
        "UG/CX": 70,
        "UG/GA": -40,
        "UG/GC": 70,
        "UG/GG": 0,
        "UG/GU": 70,
        "UG/GX": 70,
        "UG/UA": 70,
        "UG/UC": 70,
        "UG/UG": 70,
        "UG/UU": 40,
        "UG/UX": 70,
        "UG/XA": 70,
        "UG/XC": 70,
        "UG/XG": 70,
        "UG/XU": 70
    },
    "TMM": {
        "AU/AA": 70,
        "AU/AC": 70,
        "AU/AG": -10,
        "AU/AU": 70,
        "AU/AX": 70,
        "AU/CA": 70,
        "AU/CC": 70,
        "AU/CG": 70,
        "AU/CU": 70,
        "AU/CX": 70,
        "AU/GA": -30,
        "AU/GC": 70,
        "AU/GG": -30,
        "AU/GU": 70,
        "AU/GX": 70,
        "AU/UA": 70,
        "AU/UC": 70,
        "AU/UG": 70,
        "AU/UU": 10,
        "AU/UX": 70,
        "CG/AA": 0,
        "CG/AC": 0,
        "CG/AG": -80,
        "CG/AU": 0,
        "CG/AX": 0,
        "CG/CA": 0,
        "CG/CC": 0,
        "CG/CG": 0,
        "CG/CU": 0,
        "CG/CX": 0,
        "CG/GA": -100,
        "CG/GC": 0,
        "CG/GG": -100,
        "CG/GU": 0,
        "CG/GX": 0,
        "CG/UA": 0,
        "CG/UC": 0,
        "CG/UG": 0,
        "CG/UU": -60,
        "CG/UX": 0,
        "GC/AA": 0,
        "GC/AC": 0,
        "GC/AG": -80,
        "GC/AU": 0,
        "GC/AX": 0,
        "GC/CA": 0,
        "GC/CC": 0,
        "GC/CG": 0,
        "GC/CU": 0,
        "GC/CX": 0,
        "GC/GA": -100,
        "GC/GC": 0,
        "GC/GG": -100,
        "GC/GU": 0,
        "GC/GX": 0,
        "GC/UA": 0,
        "GC/UC": 0,
        "GC/UG": 0,
        "GC/UU": -60,
        "GC/UX": 0,
        "GU/AA": 70,
        "GU/AC": 70,
        "GU/AG": -10,
        "GU/AU": 70,
        "GU/AX": 70,
        "GU/CA": 70,
        "GU/CC": 70,
        "GU/CG": 70,
        "GU/CU": 70,
        "GU/CX": 70,
        "GU/GA": -30,
        "GU/GC": 70,
        "GU/GG": -30,
        "GU/GU": 70,
        "GU/GX": 70,
        "GU/UA": 70,
        "GU/UC": 70,
        "GU/UG": 70,
        "GU/UU": 10,
        "GU/UX": 70,
        "UA/AA": 70,
        "UA/AC": 70,
        "UA/AG": -10,
        "UA/AU": 70,
        "UA/AX": 70,
        "UA/CA": 70,
        "UA/CC": 70,
        "UA/CG": 70,
        "UA/CU": 70,
        "UA/CX": 70,
        "UA/GA": -30,
        "UA/GC": 70,
        "UA/GG": -30,
        "UA/GU": 70,
        "UA/GX": 70,
        "UA/UA": 70,
        "UA/UC": 70,
        "UA/UG": 70,
        "UA/UU": 10,
        "UA/UX": 70,
        "UG/AA": 70,
        "UG/AC": 70,
        "UG/AG": -10,
        "UG/AU": 70,
        "UG/AX": 70,
        "UG/CA": 70,
        "UG/CC": 70,
        "UG/CG": 70,
        "UG/CU": 70,
        "UG/CX": 70,
        "UG/GA": -30,
        "UG/GC": 70,
        "UG/GG": -30,
        "UG/GU": 70,
        "UG/GX": 70,
        "UG/UA": 70,
        "UG/UC": 70,
        "UG/UG": 70,
        "UG/UU": 10,
        "UG/UX": 70
    }
}`);
