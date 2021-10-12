function fractionToDecimal(numerator: number, denominator: number): string {
	if (numerator === 0) return "0";
	let ans = "";
	if (numerator > 0 && denominator < 0
		 || numerator < 0 && denominator > 0) {
			ans = "-";
	}
	
	numerator = Math.abs(numerator);
	denominator = Math.abs(denominator);
	
	ans += Math.trunc(numerator / denominator).toString();
	let mod = numerator % denominator;
	if (mod === 0) {
			return ans;
	}
	
	ans += '.';
	const map = new Map();
	
	while (mod !== 0) {
			if (map.has(mod)) {
					const position = map.get(mod);
					ans = ans.slice(0, position) + '(' + ans.slice(position) + ')';
					break;
			}
			
			map.set(mod, ans.length);
			mod *= 10;
			ans += Math.trunc(mod / denominator).toString();
			mod = mod % denominator;
	}
	
	return ans;
};
