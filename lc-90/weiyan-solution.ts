function subsetsWithDup(nums: number[]): number[][] {
	nums.sort((a,b) => a-b);
	const recorded = new Set();
	const visited = new Array(nums.length).fill(false);
	const ans = [];
	
	const backtrack = (recArr: number[], startIdx: number) => {
			if (!recorded.has(recArr.join("|") + "|")) {
					ans.push([...recArr]);
					recorded.add(recArr.join("|") + "|");
			}
			
			for (let i=startIdx; i<nums.length; i++) {
					if (!visited[i]) {
							visited[i] = true;
							recArr.push(nums[i]);
							backtrack(recArr, i+1);
							visited[i] = false;
							recArr.pop();
					}
			}
	}
	
	backtrack([], 0);
	return ans;
};
