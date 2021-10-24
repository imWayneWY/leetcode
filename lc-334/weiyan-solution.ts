function increasingTriplet(nums: number[]): boolean {
	const len = nums.length;
	
	let max = nums[len-1];
	let second = -Infinity;
	
	for (let i = len-2; i>=0; i--) {
			const n = nums[i];
			if (n >= max) {
					max = n;
			} else {
					if (n >= second) {
							second = n;
					} else {
							return true;
					}
			}
	}
	
	return false;
};
