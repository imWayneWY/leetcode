function poorPigs(buckets: number, minutesToDie: number, minutesToTest: number): number {
	let pigs = 0;
	
	while (Math.pow((minutesToTest / minutesToDie + 1), pigs) < buckets) {
			pigs++;
	}
	return pigs;
};
