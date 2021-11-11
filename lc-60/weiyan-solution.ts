function getPermutation(n: number, k: number): string {
	const arr = [];
	const visited = [];
	for (let i=0; i<n; i++) {
			arr.push((i+1).toString());
			visited.push(false);
	}
	let cnt = 1;
	const backtrack = (len: number, rec: string[]) : string => {
			if (len === n) {
					if (cnt===k) {
							return [...rec].join("");
					} else {
							cnt++;
					}
					return "";
			}
			
			for (let i=0; i<n; i++) {
					if (!visited[i]) {
							visited[i] = true;
							rec.push(arr[i]);
							const res = backtrack(len+1, rec);
							if (res) return res;
							visited[i] = false;
							rec.pop();
					}
			}
	}
	
	return backtrack(0, []);
};
