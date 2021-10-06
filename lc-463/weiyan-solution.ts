function islandPerimeter(grid: number[][]): number {
	const rLen = grid.length;
	const cLen = grid[0].length;
	
	const getPerimeter = (row: number, col: number) : number => {
			let perimeter = 4;
			if (row > 0 && grid[row-1][col]) perimeter--;
			if (row < rLen-1 && grid[row+1][col]) perimeter--;
			if (col > 0 && grid[row][col-1]) perimeter--;
			if (col < cLen-1 && grid[row][col+1]) perimeter--;
			return perimeter;
	}
	
	let ans = 0;
	for (let i=0; i<rLen; i++) {
			for (let j=0; j<cLen; j++) {
					if (grid[i][j]) {
							ans += getPerimeter(i, j);
					}
			}
	}
	
	return ans;
};
