function nthUglyNumber(n: number): number {
	const dp = [1];
	let p2 = 0, p3 = 0, p5 = 0;
	for (let i=1; i<n; i++) {
			const c2 = dp[p2] * 2;
			const c3 = dp[p3] * 3;
			const c5 = dp[p5] * 5;
			const min = Math.min(c2, c3, c5);
			dp.push(min);
			if (c2 === min) p2++;
			if (c3 === min) p3++;
			if (c5 === min) p5++;
	}
	// console.log(dp);
	return dp[n-1];
};
