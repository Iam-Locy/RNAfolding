import fold from "./folding/fold.mjs"
import foldWithAdapter from "./folding/foldWithAdapter.mjs"
import bpDistabnce from "./folding/bpDistance.mjs"

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
    RNA folded with Adapter: ${RNAFoldedWithAdapter}\n\n
    Base pair distance between the two folds: ${distance}
`)