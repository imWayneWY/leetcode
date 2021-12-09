function canReach(arr: number[], start: number): boolean {
	const len = arr.length;
	let q = [start];
	const visited = new Array(len).fill(false);
	while (q.length) {
			const newQ = [];
			for (let i=0; i<q.length; i++) {
					const curr = q[i];
					const r = arr[curr];
					if (curr + r < len && !visited[curr + r]) {
							if (arr[curr+r] === 0) return true;
							newQ.push(curr + r);
							visited[curr + r] = true;
					}
					if (curr - r >= 0 && !visited[curr - r]) {
							if (arr[curr-r] === 0) return true;
							newQ.push(curr - r);     
							visited[curr - r] = true;
					}
			}
			q = newQ;
	}
	return false;
};
