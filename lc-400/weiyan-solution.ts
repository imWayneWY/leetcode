function findNthDigit(n: number): number {
	if (n < 10) return n;

	// find how many digits is needed
	let digits = 1;
	let range = 9;
	let prev = range;
	while (range < n) {
			digits++;
			prev = range;
			range += 9 * (10**(digits - 1)) * digits;
	}
	
	// find the number
	const i = n - prev;
	const num = Math.floor(i / digits) + (10**(digits-1));

	if (i % digits === 0) {
			return parseInt((num-1).toString()[digits - 1]);
	} else {
			return parseInt(num.toString()[i % digits - 1]);
	}
};
