function countArrangement(n: number): number {
	if (n < 3) return n;
    const visited = Array(n+1).fill(false);
	let ans = 0;

	const dfs = (i) => {
		if (i > n) {
            ans++;
            return;
        }

		for (let idx=1;idx<=n;idx++) {
            // need this here to avoid the double counting
            if (!visited[idx] && (idx % i === 0 || i % idx === 0)) {
                visited[idx] = true;
                dfs(i+1);
                visited[idx] = false;
            }
		}
        return;
	};

	dfs(1);
	return ans;
};
