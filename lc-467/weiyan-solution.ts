function findSubstringInWraproundString(p: string): number {
  const len = p.length;
  const dp = new Array(26).fill(0);
  let cnt = 0;
  let initC = 97;
  for (let i=0; i<len; i++) {
    if (i===0) {
      cnt = 1;
      dp[p.charCodeAt(i)-initC] = 1;
    } else {
      if ((p.charCodeAt(i) - p.charCodeAt(i-1) - 1) % 26 === 0) {
        cnt++
      } else {
        cnt = 1;
      }
      dp[p.charCodeAt(i)-initC] = Math.max(cnt, dp[p.charCodeAt(i) - initC]);
    }
  }
  
  let ans = 0;
  for (let i=0; i<dp.length; i++) {
    ans += dp[i];
  }
  return ans;
};
