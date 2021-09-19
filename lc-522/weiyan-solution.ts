function findLUSlength(strs: string[]): number {
  let ans = -1;
  for (let i=0; i<strs.length; i++) {
    for (let j=0; j<strs.length; j++) {
      if (i!==j && isSubstring(strs[i], strs[j])) {
        break;
      }
      if (j===strs.length-1) ans = Math.max(ans, strs[i].length);
    }
  }
  return ans;
};

function isSubstring(sub: string, str: string): boolean {
  let p1=0, p2=0;
  
  while (p2 < str.length) {
    if (p1===sub.length) break;
    
    if (sub[p1] === str[p2]) {
      p1++;
    }
    p2++;
  }
  
  return p1 === sub.length;
};
