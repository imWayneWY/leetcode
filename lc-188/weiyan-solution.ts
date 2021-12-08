function maxProfit(k: number, prices: number[]): number {
	const days = prices.length;
	if (k > Math.trunc(days / 2)) k = Math.trunc(days/2);
	/*
			days:
			k: number of transactions
			status:
					0: empty, isn't holding any stock
					1: full, is holding a stock
	*/
	const dp = new Array(days + 1);
	for (let i=0; i<days+1; i++) {
			dp[i] = new Array(k+1);
			for (let j=0; j<k+1; j++) {
					dp[i][j] = new Array(2).fill(0);
			}
	}
	for (let nk=0; nk<k+1; nk++) {
			dp[0][nk][0] = 0;
			dp[0][nk][1] = Number.MIN_SAFE_INTEGER;
	}
	
	let maxRes = 0;
	for (let i=1; i<days+1; i++) {
			for (let nk=1; nk<k+1; nk++) {
					dp[i][nk][0] = Math.max(dp[i-1][nk][0], dp[i-1][nk][1] + prices[i-1]);
					dp[i][nk][1] = Math.max(dp[i-1][nk][1], dp[i-1][nk-1][0] - prices[i-1]);
			
					maxRes = Math.max(maxRes, dp[i][nk][0]);
			}
	}

	return maxRes;
};
