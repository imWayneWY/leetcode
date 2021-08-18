/**
 * 从后向前遍历，dp[i] 为当前字符的解码方法数
 * s[i] = 0时，dp[i]=0
 * s[i]+s[i+1]小于等于26，dp[i]=dp[i+1]+dp[i+2]
 * 否则dp[i]=dp[i+1]
 * @param s 
 * @returns 
 */
function numDecodings(s: string): number {
  const dp = new Array<number>(s.length+1);
  dp[s.length] = 1;
  dp[s.length-1] = s[s.length-1] === '0' ? 0 : 1;
  
  for(let i=s.length-2; i>=0; i--) {
    if (s[i]==='0') {
      dp[i]=0;
    } else if (parseInt(s[i]+s[i+1])<=26) {
      dp[i] = dp[i+1] + dp[i+2];
    } else {
      dp[i] = dp[i+1];
    }
  }
  return dp[0];
};