function minSteps(n: number): number {
	const ans = new Array(n+1).fill(-1);
	const cpyNums = new Array(n+1).fill(-1);
	ans[0]=0;
	cpyNums[0]=0;
	ans[1]=0;
	cpyNums[1]=0;
	ans[2]=2;
	cpyNums[2]=1;
	for (let i=3; i<=n; i++) {
			let res = Infinity;
			let cpyNum = -1;
			for (let j=i-1; j>0; j--) {
					if (cpyNums[j]!==0 && (i - ans[j])%cpyNums[j]===0) {
							if (ans[j]+((i-ans[j]/cpyNums[j])) < res) {
									cpyNum = cpyNums[j];
									res = ans[j]+((i-ans[j]/cpyNums[j]))
							}
					}
					if (i % j === 0) {
							if (((i / j)+ans[j]) < res) {
									cpyNum = ans[j];
									res = (i / j) + ans[j];
							}
					}
			}
			ans[i] = res;
			cpyNums[i] = cpyNum;
	}
	// console.log(ans);
	// console.log(cpyNums);
	return ans[n];
};