function longestConsecutive(nums: number[]): number {
	const set = new Set(nums);
	const visited = new Set();
	let max = 0;
	
	for (let i=0; i<nums.length; i++) {
			let n = nums[i]
			if (visited.has(n)) continue;
			
			let cnt = 0;
			while(set.has(n)) {
					visited.add(n);
					cnt++;
					n++;
			}
			
			max = Math.max(max, cnt);
	}
	
	return max;
};
