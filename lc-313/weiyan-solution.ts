function nthSuperUglyNumber(n: number, primes: number[]): number {
	const dp = [1];
	const pointers = new Array(primes.length).fill(0);
	
	for (let i=1; i<n; i++) {
			let min = Infinity;
			for (let j=0; j<primes.length; j++) {
					min = Math.min(min, primes[j] * dp[pointers[j]]);
			}
			dp.push(min);
			for (let j=0; j<primes.length; j++) {
					if (min === primes[j] * dp[pointers[j]]) {
							pointers[j] = pointers[j]+1;
					}
			}
	}
	return dp[n-1];
};
