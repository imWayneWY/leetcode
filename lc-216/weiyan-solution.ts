function combinationSum3(k: number, n: number): number[][] {
	if (k >= n) return [];
	if (n > 45) return [];
	const used = new Array(10).fill(false);
	const ans = [];

	const backtrack = (m: number, start:number, sum: number) => {
			if (m===k) {
					const res = [];
					for (let i=1; i<=9; i++) {
							if (used[i]) res.push(i);
					}
					ans.push(res);
					return;
			}

			if (m===k-1) {
					if (n-sum <= 9 && n-sum >=1 && n-sum >= start && !used[n-sum]) {
							used[n-sum] = true;
							backtrack(m+1, n-sum+1, n);
							used[n-sum] = false;                
					}
			} else {
					for(let i=start; i<=9; i++) {
							if (!used[i] && sum + i < n) {
									used[i] = true;
									backtrack(m+1, i+1, sum+i);
									used[i] = false;
							}
					}
			}
	}
	
	backtrack(0, 1, 0);
	return ans;
};
