function findPairs(nums: number[], k: number): number {
	let ans = 0;
	const memo = new Set();
	const zeroMemo = new Set();
	
	for (let i=0; i<nums.length; i++) {
			const n = nums[i];
			if (k !== 0) {
					if (memo.has(n)) continue;


					if (memo.has(n - k)) {
							ans++;
					}
					if (memo.has(k + n)) {
							ans++;
					}            
			} else {
					if (memo.has(n) && !zeroMemo.has(n)) {
							zeroMemo.add(n);
							ans++;
					}
			}
			memo.add(n);
	}
	
	return ans;
};
