function sortArrayByParityII(nums: number[]): number[] {
	let evenP = 0;
	let oddP = 1;
	
	while (evenP<nums.length && oddP<nums.length) {
			if(nums[evenP]%2===1 && nums[oddP]%2===0) {
					const tmp = nums[evenP];
					nums[evenP] = nums[oddP];
					nums[oddP] = tmp;
			} else if (nums[evenP]%2===1) {
					oddP+=2;
			} else if (nums[oddP]%2===0) {
					evenP+=2;
			} else {
					evenP+=2;
					oddP+=2;
			}
	}
	return nums;
};
