
function hammingDistance(x: number, y: number): number {
	let xor = x^y;
	let ans = 0;

	while(xor) {
			ans += xor % 2;
			xor = Math.floor(xor / 2);
	}
	return ans;
};
