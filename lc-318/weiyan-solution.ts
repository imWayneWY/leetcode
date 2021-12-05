const CHAR_A = 97;

function maxProduct(words: string[]): number {
    let ans = 0;
    for (let i=0; i<words.length; i++) {
        const word = words[i];
        let wordBit = getWordBit(word);
        for (let j=i+1; j<words.length; j++) {
            let noShare = true;
            for (let k=0; k<words[j].length; k++) {
                if ((1 << (words[j].charCodeAt(k) - CHAR_A)) & wordBit) {
                    noShare = false;
                    break;
                }
            }
            if (noShare) ans = Math.max(ans, word.length * words[j].length);
        }
    }
    return ans;
};

function getWordBit(word: string): number {
    let bit = 0;
    for (let i=0; i<word.length; i++) {
        bit |= 1 << (word.charCodeAt(i) - CHAR_A);
    }
    return bit;
}
