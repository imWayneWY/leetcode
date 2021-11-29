function accountsMerge(accounts: string[][]): string[][] {
	const visited = new Array(accounts.length).fill(false);
	const ans = [];

	for (let i=0; i<accounts.length; i++) {
			if (visited[i]) continue;
			
			const name = accounts[i][0];
			const emails = Array.from(new Set([...accounts[i].slice(1)]));
			visited[i] = true;
			let queue = [...emails];
			
			while (queue.length) {
					const newQueue = [];
					for (let j=0; j<queue.length; j++) {
							const curEmail = queue[j];
							for (let k=i+1; k<accounts.length; k++) {
									if (visited[k] || accounts[k][0] !== name) continue;
									if (accounts[k].indexOf(curEmail) >= 0) {
											visited[k] = true;
											for (let l=1; l<accounts[k].length; l++) {
													if (accounts[k][l] !== curEmail && emails.indexOf(accounts[k][l]) === -1) {
															emails.push(accounts[k][l]);
															newQueue.push(accounts[k][l]);
													}
											}
									}
							}
					}
					queue = newQueue;
			}
			
			ans.push([name, ...emails.sort()]);
	}
	
	return ans;
};