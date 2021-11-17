function largestDivisibleSubset(nums: number[]): number[] {
	if (nums.length===1) return nums;
	nums.sort((n1, n2) => n1-n2);
	const dp = new Array(nums.length);
	
	for (let i=0; i<nums.length; i++) {
			dp[i] = new Array();
			
			let idx = -1;
			let maxCnt = -1;
			for (let j=i-1; j>=0; j--) {
					if (nums[i] % nums[j] === 0) {
							if (maxCnt < dp[j].length) {
									idx = j;
									maxCnt = dp[j].length;
							}
					}
			}
			
			if (idx >= 0) {
					dp[i] = [...dp[idx]];
			}
			dp[i].push(nums[i]);
	}
	
	let maxCnt = -1;
	let idx = -1;
	for (let i=0; i<dp.length; i++) {
			if (dp[i].length > maxCnt) {
					idx = i;
					maxCnt = dp[i].length;
			}
	}
	
	return dp[idx];
};
