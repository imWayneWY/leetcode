function findUnsortedSubarray(nums: number[]): number {
	const len = nums.length;
	
	let l=0, r=len-1;
	let max = nums[0];
	let min = nums[len-1];
	
	for (let i=0; i<len; i++) {
			if (max <= nums[i])
					max = nums[i];
			else
					l = i;
	}
	
	for (let j=len-1; j>=0; j--) {
			if (nums[j] <= min)
					min = nums[j];
			else
					r = j;
	}
	
	if (l === 0 && r === len-1) return 0;
	return l - r + 1;
};