function numDecodings(s: string): number {
	const mod = Math.pow(10,9)+7;
	const dp = new Array(s.length + 1);
	dp[s.length] = 1;
	if (s[s.length-1]==='0') {
			dp[s.length-1] = 0;
	} else if (s[s.length-1]==='*') {
			dp[s.length-1] = 9;
	} else {
			dp[s.length-1] = 1;
	}
	
	for (let i=s.length-2; i>=0; i--) {
			if (s[i]==='0') {
					dp[i] = 0;
			} else if (s[i]==='*' && s[i+1]==='*') { 
					dp[i] = dp[i+1] * 9 + dp[i+2] * 15
			} else if (s[i+1]==='*') {
					if (s[i] === '1') {
							dp[i] = dp[i+1] + dp[i+2] * 9;
					} else if (s[i] === '2') {
							dp[i] = dp[i+1] + dp[i+2] * 6;
					} else {
							dp[i] = dp[i+1];
					}
			} else if (s[i]==='*') {
					dp[i] = dp[i+1] * 9 + (parseInt(s[i+1]) <= 6 ? 2 : 1) * dp[i+2];
			} else if (parseInt(s[i] + s[i+1]) <= 26) {
					dp[i] = dp[i+1] + dp[i+2];
			} else {
					dp[i] = dp[i+1];
			}
			dp[i] = dp[i] % mod;
	}
	return dp[0] % mod;
};
