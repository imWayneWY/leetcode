var findDuplicates = function(nums) {
	const sets = new Set(),res = [];  

	for(n of nums)
			sets.has(n)? res.push(n) : sets.add(n)
	
	return res;
};
