const map = new Map<string, boolean>();

function isScramble(s1: string, s2: string): boolean {
    if (s1 === s2) return true;
    if(map.has(s1+"-"+s2)) return map.get(s1+"-"+s2);
    const len = s1.length;
    
    for (let i=1; i<len; i++) {
        const part1 = s1.substr(0, i);
        const part2 = s1.substr(i);
        if (part2 + part1 === s2) {
            map.set(s1+"-"+s2, true);
            return true;
        }
        
        if (isScramble(part1, s2.substr(0, i)) && isScramble(part2, s2.substr(i))
           || isScramble(part1, s2.substr(len-i)) && isScramble(part2, s2.substr(0, len-i))) {
            map.set(s1+"-"+s2, true);
            return true;
        }
    }
    map.set(s1+"-"+s2, false);
    return false;
};
