
function totalHammingDistance(nums: number[]): number {
	let ans = 0;
	
	for (let i=0; i<32; i++) {
			let countZero = 0;
			for (let j=0; j<nums.length; j++) {
					countZero += nums[j] & 1;
					nums[j] >>= 1;
			}
			ans += countZero * (nums.length - countZero);
	}
	return ans;
};
