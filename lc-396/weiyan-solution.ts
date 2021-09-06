
function maxRotateFunction(nums: number[]): number {
	const len = nums.length;
	let f = 0;
	let sum = 0;
	let ans = 0;
	for (let i=0; i<len; i++) {
		f += nums[i] * i;
		sum += nums[i];
	}
	ans = f;
	for (let i=1; i<len; i++) {
		f = f + sum - len * nums[len-i];
		ans = Math.max(f, ans);
	}
	return ans;
};
