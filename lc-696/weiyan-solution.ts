function countBinarySubstrings(s: string): number {
  if (s.length===1) return 0;
  let ans = 0;
  for (let i=1; i<s.length; i++) {
    if (s[i]!==s[i-1]) {
      const left = s[i-1];
      const right = s[i];
      let lp = i-1;
      let rp = i;
      while(lp>=0 && rp<s.length) {
        if (s[lp]===left && s[rp]===right) {
          ans++;
        } else {
          break;
        }
        lp--;
        rp++;
      }
    }
  }
  return ans;
};
