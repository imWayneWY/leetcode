function findSubstring(s: string, words: string[]): number[] {
	const wordLen = words[0].length;
	const length = words.length;
	
	const map = new Map<string, number>(); // word as key, counts as value;
	
	for (let i=0; i<length; i++) {
			map.has(words[i]) ? map.set(words[i], map.get(words[i])+1) : map.set(words[i], 1);
	}
	
	const ans = [];
	const subStrLen = wordLen * length;
	for (let i=0; i<=s.length-subStrLen; i++) {
			const subStr = s.substr(i, subStrLen);
			const mark = new Map(map);
			for (let j=0; j<subStrLen; j+=wordLen) {
					const key = subStr.substr(j, wordLen);
					if (!mark.has(key) || !mark.get(key)) {
							break;
					}
					mark.get(key) !== 1 ? mark.set(key, mark.get(key) - 1) : mark.delete(key);
			}
			if (mark.size === 0) {
					ans.push(i);
			}
	}
	return ans;
};