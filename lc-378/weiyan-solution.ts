function kthSmallest(matrix: number[][], k: number): number {
	let cnt = 0;
	const n = matrix.length;
	while(matrix.length) {
			let min = Infinity;
			let minIdx = -1;
			for (let i=0; i<n; i++) {
					if (!matrix[i].length) continue;
					if (matrix[i][0] < min) {
							min = matrix[i][0];
							minIdx = i;
					}
			}
			cnt++;
			if (cnt === k) {
					return min;
			} else {
					matrix[minIdx].shift();
			}
	}
};