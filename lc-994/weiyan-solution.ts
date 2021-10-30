function orangesRotting(grid: number[][]): number {
	const targets = new Set();
	let rottenStack = [];
	
	for (let i=0; i<grid.length; i++) {
			for (let j=0; j<grid[0].length; j++) {
					if (grid[i][j] === 2) {
							rottenStack.push({i, j});
					}
					if (grid[i][j] === 1) {
							targets.add(i+"-"+j);
					}
			}
	}
	
	if (targets.size === 0) return 0;
	let ans = 0;
	while (rottenStack.length) {
			// spread
			const newStack = [];
			for (let idx=0; idx<rottenStack.length; idx++) {
					const {i, j} = rottenStack[idx];
					if (i > 0 && grid[i-1][j]===1) {
							newStack.push({i: i-1, j});
							grid[i-1][j] = 2;
							targets.delete((i-1)+"-"+j);
					}
					if (i < grid.length-1 && grid[i+1][j]===1) {
							newStack.push({i: i+1, j});
							grid[i+1][j] = 2;
							targets.delete((i+1)+"-"+j);                
					}
					if (j > 0 && grid[i][j-1]===1) {
							newStack.push({i, j:j-1});
							grid[i][j-1] = 2;
							targets.delete(i+"-"+(j-1));
					}
					if (j < grid[0].length-1 && grid[i][j+1]===1) {
							newStack.push({i, j: j+1});
							grid[i][j+1] = 2;
							targets.delete(i+"-"+(j+1));                
					}
			}
			
			if (newStack.length) {
					ans++;
					rottenStack = newStack;
			} else {
					break;
			}
	}
	
	return targets.size > 0 ? -1 : ans;
};
