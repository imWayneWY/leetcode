function hasAlternatingBits(n: number): boolean {
	let shouldBeOne = n & 1 ? 1 : 0;
	while (n) {
			if (shouldBeOne !== (n & 1)) {
					return false;
			}
			shouldBeOne = shouldBeOne===1 ? 0 : 1;
			n >>= 1;
	}
	return true;   
};
