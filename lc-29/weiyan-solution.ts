function divide(dividend: number, divisor: number): number {
	if (dividend === 0) return 0;
	if (dividend === -(2**31) && divisor === -1) return 2**31 - 1;
	
	let sign = 1;
	if ((dividend < 0 && divisor > 0) || (dividend > 0 && divisor < 0)) {
			sign = -1;
	}
	
	dividend = dividend > 0 ? -dividend : dividend;
	divisor = divisor > 0 ? -divisor : divisor;
	
	return sign * helper(dividend, divisor);
};

function helper(a: number, b: number) {
	// a: -1, b: -5
	if (a >= b) return a>b ? 0 : 1;
	
	let count = 1;
	let res = 0;
	let tb = b;
	
	while (a <= tb && tb < 0) {
			a -= tb;
			res += count;
			tb += tb;
			count += count;
	}
	
	return res + helper(a, b);
}
