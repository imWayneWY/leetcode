function integerBreak(n: number): number {
	if (n < 4) return n - 1;
	
	let remain = n, product = 1;
	
	while (remain > 4) {
			remain -= 3;
			product *= 3;
	}
	
	return product * remain;
};