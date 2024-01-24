const fold = require("./folding/fold.js")
const foldWithAdapter = require("./folding/foldWithAdapter.js")
const bpDistabnce = require("./folding/bpDistance.js")

function generateRandomSeq(n){
    var out = ""

    for(let i = 0; i < n; i++){
        out += ['A', 'C', 'G', 'U'][Math.floor(Math.random()*4)]
    }

    return out
}

const RNAseq = generateRandomSeq(30)
const RNAstr = fold(RNAseq)

const AdapterSeq = generateRandomSeq(15)
const AdapterStr = fold(AdapterSeq)

const adapter = {
    seq: AdapterSeq,
    str: AdapterStr
}

const RNAFoldedWithAdapter = foldWithAdapter(RNAseq, adapter)

const distance = bpDistabnce(RNAstr[0], RNAFoldedWithAdapter[0])

console.log(`
    RNA: ${RNAseq}\n
    Structure of RNA: ${RNAstr}\n\n
    Adapter: ${AdapterSeq}\n
    Structure of Adapter: ${AdapterStr}\n\n
    RNA folded with ADapter: ${RNAFoldedWithAdapter}\n\n
    Base pair distance between the two folds: ${distance}
`)