function findDisappearedNumbers(nums: number[]): number[] {
	const res = [];
	const a = new Array(nums.length);
	for (let i=0; i<nums.length; i++) {
			a[nums[i]-1] = 1;
	}
	for(let j=0; j<nums.length; j++) {
			if(!a[j]) res.push(j+1)
	}
	return res;
};
