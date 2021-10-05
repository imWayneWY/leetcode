function lengthLongestPath(input: string): number {
	let p = 0;
	let name = "";
	let ans = 0;
	const stack = [];
	let idx = 0;
	while (p<input.length) {
			const c = input[p];
			if (c !== '\n' && c!=='\t') {
					name += c;
			} else {
					if (c === '\n') {

							stack[idx] = name;
							if (name.includes('.')) {
									const length = stack.slice(0,idx+1).reduce((sum, curr) => (curr.length + sum), 0) + idx;
									ans = Math.max(length, ans);
							}
							name = "";
							idx=0;
					} else if (c === '\t') {
							idx++;
					}
			}
			p++;
	}
	
	stack[idx] = name;
	// calc for the last
	if (name.includes('.')) {
			const length = stack.slice(0, idx+1).reduce((sum, curr) => (curr.length + sum), 0) + idx;
			ans = Math.max(length, ans);
	}
	
	return ans;
};
