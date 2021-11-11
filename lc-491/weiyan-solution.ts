function findSubsequences(nums: number[]): number[][] {
	const visited = new Array(nums.length).fill(false);
	const memo = new Set();
	const ans = [];
	
	const backtrack = (length: number, recArr: number[], prev: number, startIdx: number) => {
			if (length >= 2) {
					const res = [...recArr];
					if (!memo.has(res.join("|"))) {
							ans.push(res);
							memo.add(res.join("|"))
					}
			}
			
			for (let i=startIdx; i<nums.length; i++) {
					if (!visited[i] && nums[i] >= prev) {
							visited[i] = true;
							recArr.push(nums[i]);
							backtrack(length+1, recArr, nums[i], i+1);
							visited[i] = false;
							recArr.pop();
					}
			}
	}
	
	backtrack(0, [], -101, 0);
	return ans;
};
