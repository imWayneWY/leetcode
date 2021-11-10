function combinationSum2(candidates: number[], target: number): number[][] {
	const ans = [];
	candidates.sort((a,b) => a-b);

	const backtrack = (recArr: number[], start:number, sum: number) => {
			if (sum===target) {
					ans.push([...recArr]);
					return;
			}
			for (let i=start; i<candidates.length; i++) {
					const n = candidates[i];
					if (sum + n <= target) {
							recArr.push(n);
							backtrack(recArr, i+1, sum+n);
							recArr.pop();
					}
					while (i<candidates.length-1 && candidates[i+1] === n) {
							// skip the same element
							i++;
					}
			}
	}
	
	backtrack([], 0, 0);
	return ans;
};
