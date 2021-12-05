function getSum(a: number, b: number): number {
	let ans = 0;
	let carry = 0;
	for (let i=0; i<32; i++) {
			const aa = a & (1 << i);
			const bb = b & (1 << i);
			
			if (aa && bb) {
					if (carry === 1) {
							ans = ans | (1 << i);
					} else {
							carry = 1;
					}
			} else if (!aa && !bb) {
					if (carry === 1) {
							ans = ans | (1 << i);
							carry = 0;
					}
			} else {
					if (carry === 1) {
							continue;
					} else {
							ans = ans | (1 << i);
					}
			}
	}
	return ans;
};