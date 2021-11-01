function minSubArrayLen(target: number, nums: number[]): number {
	const len = nums.length;
	if (len === 1) return nums[0] >= target ? 1 : 0;
	if (nums[0] >= target) return 1;

	let ans = Infinity;
	let left = 0, right = 1;
	let sum = nums[0] + nums[1];

	
	while (right < len) {
			if (nums[right] >= target) return 1;
			
			if (sum < target) {
					right++;
					if (right < len) sum+=nums[right];
			} else {
					const len = right - left + 1;
					ans = Math.min(ans, len);
					left++;
					sum-=nums[left-1];
			}
	}
	
	return ans === Infinity ? 0 : ans;
};
