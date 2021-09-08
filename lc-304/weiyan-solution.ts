class NumMatrix {
	sumMatrix: number[][];
	constructor(matrix: number[][]) {
		this.sumMatrix = new Array(matrix.length);
		for (let r=0; r<matrix.length; r++) {
			this.sumMatrix[r] = new Array(matrix[r].length);
			for (let c=0; c<matrix[0].length; c++) {
				if (r===0 && c===0) {
					this.sumMatrix[r][c] = matrix[r][c]
				} else if (r===0) {
					this.sumMatrix[r][c] = matrix[r][c] + this.sumMatrix[r][c-1];
				} else if (c===0) {
					this.sumMatrix[r][c] = matrix[r][c] + this.sumMatrix[r-1][c];
				} else {
					this.sumMatrix[r][c] = matrix[r][c] + this.sumMatrix[r-1][c] + this.sumMatrix[r][c-1] - this.sumMatrix[r-1][c-1];
				}
			}
		}
	}

	sumRegion(row1: number, col1: number, row2: number, col2: number): number { 
		let sum = this.sumMatrix[row2][col2];
		if (row1 > 0) {
			sum -= this.sumMatrix[row1-1][col2];
		}
		if (col1 > 0) {
			sum -= this.sumMatrix[row2][col1-1];
		}
		if (row1 > 0 && col1 > 0) {
			sum += this.sumMatrix[row1-1][col1-1];
		}
		return sum;
	}
}
