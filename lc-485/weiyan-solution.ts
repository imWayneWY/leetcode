function findMaxConsecutiveOnes(nums: number[]): number {
	let max = 0;
	let res = 0;
	for (let i=0; i<nums.length; i++) {
			if(nums[i]) {
					max++;
			} else {
					res = Math.max(max, res);
					max = 0;
			}
	}
	res = Math.max(max,res);
	return res;
};

