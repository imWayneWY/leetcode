function allPathsSourceTarget(graph: number[][]): number[][] {
	const target = graph.length-1;
	const ans = [];
	
	const backtrack = (n: number, path: number[]) => {
			if (target === n) {
					ans.push([...path]);
					return;
			}
			for (let i=0; i<graph[n].length; i++) {
					path.push(graph[n][i]);
					backtrack(graph[n][i], path);
					path.pop();
			}
	}
	
	backtrack(0, [0]);
	return ans;
};
