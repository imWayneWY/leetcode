function searchMatrix(matrix: number[][], target: number): boolean {
	const cLen = matrix[0].length;
	const rLen = matrix.length;
	
	const getVal = (n: number): number => (matrix[Math.trunc(n/cLen)][n % cLen]);
	
	let l=0, h=cLen*rLen - 1;
	
	while (l<=h) {
			const m = Math.trunc((h-l) / 2) + l;
			const v = getVal(m);
	
			if (v === target) {
					return true;
			} else if (v < target) {
					l = m+1;
			} else {
					h = m-1;
			}
	}
	return false;
};
