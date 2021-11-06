function circularArrayLoop(nums: number[]): boolean {
	for (let i=0; i<nums.length; i++) {
			if (nums[i]===0)
					continue;
			
			let slow = i;
			let fast = advance(i, nums);
			
			while (sameSign(nums[slow], nums[fast]) && sameSign(nums[fast], nums[advance(fast, nums)])) {
					if (fast === slow) {
							if (slow === advance(slow, nums))
									break;
							else
									return true;
					}
					slow = advance(slow, nums);
					fast = advance(advance(fast, nums), nums);
			}
			
			let index = i;
			while (nums[index] !== 0) {
					nums[index] = 0;
					index = advance(index, nums);
			}
	}
	
	return false;
};

function sameSign(n1: number, n2: number) : boolean {
	return (n1>0 && n2>0) || (n1<0 && n2<0);
}

function advance(i: number, nums: number[]): number {
	const length = nums.length;
	
	i += nums[i];
	i %= length;
	i += length;
	i %= length;
	
	return i;
}
