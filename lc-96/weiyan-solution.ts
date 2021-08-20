/**
 * dp记录的是n会有多少个bst
 * dp[0]设置为1是为了避免dp[i-j-1] * dp[j]时候为0
 * dp[n]等于左面的树的数量乘有面的树的数量
 * @param n 
 * @returns 
 */
function numTrees(n: number): number {
  const dp = [];
  dp[0] = 1;
  dp[1] = 1
  for (let i=2; i<=n; i++) {
    let res = 0;
    for(let j=0; j<i; j++) {
      res += dp[i-j-1] * dp[j]
    }
    dp[i] = res;
  }
  return dp[n];
};
