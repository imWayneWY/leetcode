function triangleNumber(nums: number[]): number {
	if (nums.length < 3) return 0;

	nums.sort((a,b) => a - b);
	let ans = 0;
	const len = nums.length;
	
	for (let i=0; i<len; i++) {
			for (let j=i+1; j<len; j++) {
					if (nums[i] > 0 && nums[j] > 0) {
							const sum = nums[i] + nums[j];
							let left = j+1, right = len-1;
							while (left <= right) {
									const mid = left + Math.trunc((right - left) / 2);
									if (nums[mid] < sum) {
											ans += mid-left+1;
											left = mid + 1;
									} else {
											right = mid - 1;
									}
							}
					}
			}
	}
	
	return ans;
};
