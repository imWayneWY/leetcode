function checkRecord(n: number): number {
	const mod = Math.pow(10, 9)+7;
	const memo = new Array(n+1);
	for (let i=0; i<n+1; i++) {
			memo[i] = [[0,0,0],[0,0,0]];
	}
	const dp = (A: number, lastL: number, remain: number): number => {
			if (memo[remain][A][lastL]) return memo[remain][A][lastL]
			if (remain === 1) {
					let ans = 3;
					if (A === 1) ans--;
					if (lastL === 2) ans--;
					return ans;
			} else {
					let ans = dp(A, 0, remain-1);   // attach P
					if (A === 0) ans += dp(A+1, 0, remain-1);  // attach A
					if (lastL < 2) ans += dp(A, lastL+1, remain-1);  // attach L
					memo[remain][A][lastL] = ans % mod;
					return ans % mod;
			}    
	}
	return dp(0, 0, n);
};
