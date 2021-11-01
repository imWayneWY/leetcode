function findRepeatedDnaSequences(s: string): string[] {
	const len = s.length;
	
	if (len < 11) return [];
	const memo = new Map<string, boolean>(); // string as key, has added to ans as value
	const ans = [];
	
	let p = 0;
	while (p < len - 9) {
			const str = s.substr(p, 10);
			if (!memo.has(str)) {
					memo.set(str, false);
			} else {
					if (!memo.get(str)) {
							ans.push(str);
							memo.set(str, true);
					}
			}
			p++;
	}
	return ans;
};