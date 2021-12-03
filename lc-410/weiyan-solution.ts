function splitArray(nums: number[], m: number): number {
	let low=0, high = 0;
	for (let i=0; i<nums.length; i++) {
			low = Math.max(low, nums[i]);
			high += nums[i];
	}
	
	const helper = (part: number): number => {
			let cnt = 0;
			let sum = 0;
			for (let i=0; i<nums.length; i++) {
					if (sum + nums[i] <= part) {
							sum += nums[i];
					} else {
							sum = nums[i];
							cnt++;
					}
			}
			return cnt+1;
	}
	
	let ans = high;
	while (low <= high) {
			const mid = low + Math.trunc((high-low)/2);
			const count = helper(mid);
			// console.log(mid, "===>", count);
			if (count <= m) {
					ans = mid;
					high = mid - 1;
			} else {
					low = mid + 1;
			}
	}
	
	return ans;
};
