function maxCount(m: number, n: number, ops: number[][]): number {
	let minX = m
	let minY = n
	
	for (let op of ops) {
			minX = Math.min(op[0], minX)
			minY = Math.min(op[1], minY)
	}

	return minX * minY
};
