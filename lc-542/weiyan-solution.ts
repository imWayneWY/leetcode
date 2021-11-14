function updateMatrix(mat: number[][]): number[][] {
	let rows = mat.length;
	 if (rows === 0) {
			 return mat;
	 }
	 let cols = mat[0].length;
	 
	 
	 let q = [];
	 let dist = new Array (rows).fill(0);
	 dist = dist.map(i => new Array(cols).fill(+Infinity))   
	 
	 for (let y = 0; y < rows; y++) {
			 for (let x = 0; x < cols; x++) {
					 if (mat[y][x] === 0) {
							 dist[y][x] = 0;
							 q.push([y, x])
					 }
			 }
	 }
	 
	 while (q.length != 0) {
			 let zero = q.shift();
			 let y = zero[0];
			 let x = zero[1];
			 let wave = [[y-1, x], [y+1, x], [y, x-1], [y, x+1]];
			 wave = wave.filter(i => i[0]>=0 && i[1]>=0 && i[0]<rows && i[1]<cols);
			 wave.forEach( i => {
					 if (dist[i[0]][i[1]] > dist[y][x] + 1) {
							 dist[i[0]][i[1]] = dist[y][x] + 1;
							 q.push([i[0], i[1]]);
					 }
			 })
	 }

	 
	 return dist;
};
