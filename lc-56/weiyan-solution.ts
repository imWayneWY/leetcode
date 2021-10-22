function merge(intervals: number[][]): number[][] {
    
	intervals.sort((a, b) => a[0] - b[0]);
	const ans = [intervals[0]];
	
	for (let i=1; i<intervals.length; i++) {
			const curr = intervals[i];
			let prev = ans[ans.length-1];
			if (prev[1] >= curr[0]) {
					prev = [prev[0], Math.max(curr[1], prev[1])];
					ans[ans.length-1] = prev;
			} else {
					ans.push(curr);
			}
	}
	return ans;
};