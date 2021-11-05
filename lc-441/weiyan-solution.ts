function arrangeCoins(n: number): number {
	if (n===1) return 1;
	let left = 1, right = n;
	
	while (left < right) {
			const mid = left + Math.trunc((right - left) / 2);
			const coins = needCoins(mid);
			const nextCoins = needCoins(mid+1);
			if (coins <= n && nextCoins > n) {
					return mid;
			} else if (coins > n) {
					right = mid;
			} else {
					left = mid;
			}
	}
};

function needCoins(n: number) : number {
	const mid = Math.trunc(n / 2);
	if (n % 2===1) {
			return mid * (1 + n) + (1 + n) / 2;
	} else {
			return mid * (1 + n);
	}
}
