function findCircleNum(isConnected: number[][]): number {
	let ans = 0;
	const visited = new Set();
	for (let i=0; i<isConnected.length; i++) {
			if (visited.has(i)) continue;
			ans++;

			let q = [i];

			while (q.length) {
					const newQ = [];
					for (let idx=0; idx<q.length; idx++)  {
							const row = isConnected[q[idx]];
							for (let j=0; j<row.length; j++) {
									if (row[j]===1 && !visited.has(j)) {
											visited.add(j);
											newQ.push(j);
									}
							}
					}
					q = newQ;
			}
	}
	
	return ans;
};
