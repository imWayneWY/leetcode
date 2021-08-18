/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let len = s.length;

    if(len<2){return len}

    let max = 0;
    let map = {}
    let last = 0;
    for(let i=0; i<len; i++){
        if(map[s[i]] !==undefined) {
            last = Math.max(map[s[i]]+1, last);
        }
        max = Math.max(max, i-last+1)
        map[s[i]] = i;
    }

    return max;
};
