function countNumbersWithUniqueDigits(n: number): number {
	if (n===0) return 1;
	
	let ans = 10;
	for (let i=1; i<n; i++) {
			let j = 9;
			let base = 9;
			for (let k=0; k<i; k++) {
					base *= j--;
			}
			ans += base;
	}
	return ans;
};
