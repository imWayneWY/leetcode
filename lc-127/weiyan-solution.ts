function ladderLength(beginWord: string, endWord: string, wordList: string[]): number {
	const letterLen = beginWord.length;
	const isValid = (s1: string, s2: string): boolean => {
			let cnt = 0;
			for (let i=0; i<letterLen; i++) {
					if (s1[i] !== s2[i]) cnt++;
			}
			return cnt === 1;
	}
	
	if (wordList.indexOf(endWord) < 0) return 0;
	const visited = new Set();
	let q = [beginWord];
	let ans = 1;
	let findIt = false;
	
	while (q.length) {
			// console.log(q);
			let newQ = [];
			ans++;
			for (let idx=0; idx<q.length; idx++) {
					const ss = q[idx];

					for (let i=0; i<wordList.length; i++) {
							const str = wordList[i];
							if (visited.has(str)) continue;

							if (isValid(str, ss)) {
									if (str === endWord) {
											findIt = true;
									} else {
											visited.add(str);
											newQ.push(str);
									}
							}
							
							if (findIt) break;
					}
					if (findIt) break;
			}
			if (findIt) break;
			q = newQ;
	}
	
	return findIt ? ans : 0;
};
