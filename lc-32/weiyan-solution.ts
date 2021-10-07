function longestValidParentheses(s: string): number {
	const len = s.length;
	if (len<2) return 0;
	
	const dp = new Array(len).fill(0);
	
	dp[1] = s[0] === '(' && s[1] === ')' ? 2 : 0;
	let ans = dp[1];
	
	for (let i = 2; i < len; i++) {
			if (s[i] === '(') {
					dp[i] = 0;
			} else {
					if (s[i-1] === '(') {
							dp[i] = dp[i-2] + 2;
					} else {
							if (i - dp[i-1] - 1 < 0 || s[i - dp[i-1] - 1]===')') {
									dp[i] = 0
							} else {
									dp[i] = i - dp[i-1] - 1 >= 1 ? 2 + dp[i-1] + dp[i - dp[i-1] - 2] : 2 + dp[i-1];
							}
					}
			}
			ans = Math.max(dp[i], ans);
	}
	
	return ans;
};
