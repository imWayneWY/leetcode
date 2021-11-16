// type Tree {
//     height: number;
//     row: number;
//     col: number;
// }

function cutOffTree(forest: number[][]): number {
	const rLen = forest.length;
	const cLen = forest[0].length;
	
	const treeOrder = [];
	
	for (let r=0; r<rLen; r++) {
			for (let c=0; c<cLen; c++) {
					if (forest[r][c] > 1) treeOrder.push(forest[r][c]);
			}
	}
	
	treeOrder.sort((t1, t2) => t1-t2);
	let ans = 0;
	let cur = [0,0];
	// console.log(treeOrder);
	for (let i=0; i<treeOrder.length; i++) {
			const target = treeOrder[i];
			const [r, c] = cur;
			if (forest[r][c] === target) continue;
			let q = [[r,c]];
			let steps = 0;
			let findTarget = false;
			const visited = new Set();
			visited.add(r+"-"+c);
			while (q.length) {
					const newQ = [];
					for (let i=0; i<q.length; i++) {
							const [row, col] = q[i];
							const nxtTrees = [[-1, 0], [1, 0], [0, -1], [0, 1]]
									.filter(([osR, osC]) => (osR+row >= 0
																				&& osR+row < rLen
																				&& osC+col >= 0
																				&& osC+col < cLen
																				&& forest[osR+row][osC+col] > 0));

							for (let j=0; j<nxtTrees.length; j++) {
									const nxtR = nxtTrees[j][0] + row;
									const nxtC = nxtTrees[j][1] + col;
									if (visited.has(nxtR+"-"+nxtC)) continue;
									if (forest[nxtR][nxtC] === target) {
											cur = [nxtR, nxtC];
											findTarget = true;
											break;
									}
									visited.add(nxtR+"-"+nxtC);
									newQ.push([nxtR, nxtC]);
							}
					}
					steps++;
					if(findTarget) break;
					q = newQ;
			}
			
			if (findTarget) {
					// console.log(steps);
					ans+=steps;
			} else {
					return -1;
			}
	}
	
	return ans;
};
