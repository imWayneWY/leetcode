function minStartValue(nums: number[]): number {
	let sum = 0;
	let ans = 0;
	
	for (let i=0; i<nums.length; i++) {
			sum += nums[i];
			ans = Math.min(sum, ans);
	}
	
	return ans < 0 ? 1 - ans : 1;
};
