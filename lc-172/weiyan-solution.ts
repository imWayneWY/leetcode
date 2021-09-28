function trailingZeroes(n: number): number {
	let count = 0;
	
// first iteration: find quantity of numbers divisible by 5
// second iteration: find quantity of numbers divisible by 25. It is numbers from first iteration / 5. 25 = 5*5,
// but we counted first 5 in first iteration, so we add only one 5 for every number divisible by 25.
// etc for 125, 625 and so on
	while (n) {
			n = Math.floor(n / 5);
			count += n;
	}
	return count;
};
