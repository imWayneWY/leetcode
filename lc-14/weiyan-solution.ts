function longestCommonPrefix(strs: string[]): string {
  let ans = [];
  let idx = 0;
  while (idx>=0) {
    const s = strs[0][idx];
    let isCP = true;
    for (let i=0; i<strs.length; i++) {
      if (strs[i].length === idx) {
        idx = -1;
        isCP = false;
        break;
      }
      if(strs[i][idx] !== s) {
        isCP = false;
        break;
      }
    }
    if (isCP) {
      ans.push(s);
      idx++;
    } else {
      idx = -1;
    }
  }
  return ans.join("");
};
