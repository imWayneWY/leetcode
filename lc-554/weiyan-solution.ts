function leastBricks(wall: number[][]): number {
	const map = new Map();
	for (let i = 0; i<wall.length; i++) {
			if (wall[i].length > 1) {
					let idx = 0;
					for (let j=0; j<wall[i].length-1; j++) {
							idx += wall[i][j];
							map.has(idx) ? map.set(idx, map.get(idx)+1) : map.set(idx, 1);
					}
			}
	}
	
	if (map.size > 0) {
			let max = 0;
			map.forEach((value) => max = Math.max(value, max));
			return wall.length - max;
	} else {
			return wall.length;
	}
};
