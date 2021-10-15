function distributeCandies(candyType: number[]): number {
	const len = candyType.length;
	let set = new Set();
	
	for (let i=0; i<len; i++) {
			set.add(candyType[i]);
			if (set.size === len/2) {
					return len/2;
			}
	}
	return set.size;
};