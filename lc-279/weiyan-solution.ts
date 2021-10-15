function numSquares(n: number): number {
	const dp = [0];
	for (let i=1; i<=n; i++) {
			const sqrt = Math.trunc(Math.sqrt(i));
			let min = Infinity;
			for (let j=sqrt; j>0; j--) {
					min = Math.min(min, dp[i-j**2]+1);
			}
			dp[i] = min;
	}
	return dp[n];
};
