function leastInterval(tasks: string[], n: number): number {
	if (n===0) return tasks.length;
	
	const map = new Map();
	for (let i=0; i<tasks.length; i++) {
			const t = tasks[i];
			map.has(t) ? map.set(t, map.get(t)+1) : map.set(t, 1);
	}
	
	const arr = Array.from(map, ([task, cnt]) => cnt);
	
	let maxCnt = 0;
	arr.forEach(c => maxCnt = Math.max(maxCnt, c));
	let ans = (maxCnt - 1) * (n+1);

	arr.forEach(c => c===maxCnt && ans++);
	
	return Math.max(ans, tasks.length);
};
