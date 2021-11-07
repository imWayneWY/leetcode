function integerReplacement(n: number): number {
	if (n===1) return 0;
	if (n % 2 === 0) {
			return integerReplacement(n/2) + 1;
	} else {
			return Math.min(integerReplacement(n-1)+1, integerReplacement((n+1)/2)+2);
	}
};
