/**
 Do not return anything, modify nums in-place instead.
 */
 function sortColors(nums: number[]): void {
	for (let i=1; i<nums.length; i++) {
			let p = i;
			while (p>0 && nums[p] < nums[p-1]) {
					const tmp = nums[p];
					nums[p] = nums[p-1];
					nums[p-1] = tmp;
					p--;
			}
	}
};