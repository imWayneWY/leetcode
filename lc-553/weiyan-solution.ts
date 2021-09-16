var optimalDivision = function(nums) {
	if (nums.length == 1)
			return nums[0].toString();

	if (nums.length == 2)
			return nums[0].toString() +"/" + nums[1].toString();

	let res = nums[0].toString() + "/(" + nums[1].toString();

	for (let index = 2; index < nums.length; index++)
			res += "/" + nums[index].toString();

	return res + ")";
};