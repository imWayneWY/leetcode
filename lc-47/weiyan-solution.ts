function permuteUnique(nums: number[]): number[][] {
	const len = nums.length;
	nums.sort((a,b) => a-b);
	const visited = new Array(nums.length).fill(false);
	const ans = [];
	
	const backtrack = (recArr: number[]) => {
			if (recArr.length === len) {
					ans.push([...recArr]);
					return;
			}
			
			for (let i=0; i<len; i++) {
					const n = nums[i];
					if (!visited[i]) {
							visited[i] = true;
							recArr.push(n);
							backtrack(recArr);
							visited[i] = false;
							recArr.pop();
					} else {
							while (i<len-1 && nums[i+1]===n) {
									i++;
							}                
					}

			}
	}
	
	backtrack([]);
	
	return ans;
};
