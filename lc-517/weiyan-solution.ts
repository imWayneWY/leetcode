function findMinMoves(machines: number[]): number {
	const sum = machines.reduce((prev, curr) => prev + curr);
	const len = machines.length;
	if (sum % len !== 0) return -1;
	const avg = sum / len;
	
	const left = new Array(len);
	const right = new Array(len);
	
	for (let i=0; i<len; i++) {
			// some ops for left and right
			if (i===0) {
					left[i] = 0;
					right[i] = machines[i] - avg;
			} else if (i===len-1) {
					right[i] = 0;
					left[i] = machines[i] - avg;
			} else {
					left[i] = -right[i-1];
					// left[i] + right[i] = machine[i]  - avg;
					right[i] = machines[i] - avg - left[i];
			}
	}
	
	let res = 0;
	for (let i=0; i<len; i++) {
			let temp = 0;
			if (left[i] > 0) {
					temp += left[i];
			}
			if (right[i] > 0) {
					temp += right[i];
			}
			res = Math.max(res, temp);
	}
	
	return res;
};
