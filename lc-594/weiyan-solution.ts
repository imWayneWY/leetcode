function findLHS(nums: number[]): number {
	const map = new Map();
	let ans = 0;
	for (let i=0; i<nums.length; i++) {
			const n = nums[i];
			map.has(n) ? map.set(n, map.get(n) + 1) : map.set(n, 1);
			let sum = map.get(n);
			const left = map.has(n-1) ? map.get(n-1) : 0;
			const right = map.has(n+1) ? map.get(n+1) : 0;
			const max = Math.max(left, right);
			if (max > 0) {
					ans = Math.max(sum+max, ans);
			}
	}
	
	return ans;
};
