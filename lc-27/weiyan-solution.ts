function removeElement(nums: number[], val: number): number {
	let length = nums.length;

	for (let i = nums.length-1; i>=0; i--) {
			if (nums[i] === val) {
					length--;
					nums[i] = nums[length];
			}
	}
	return length;
};