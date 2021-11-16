function minMutation(start: string, end: string, bank: string[]): number {
	const letterLen = 8;
	const isValid = (s1: string, s2: string): boolean => {
			let cnt = 0;
			for (let i=0; i<letterLen; i++) {
					if (s1[i] !== s2[i]) cnt++;
			}
			return cnt === 1;
	}
	
	if (bank.indexOf(end) < 0) return -1;
	const visited = new Set();
	let q = [start];
	let ans = 0;
	let findIt = false;
	
	while (q.length) {
			// console.log(q);
			let newQ = [];
			ans++;
			for (let idx=0; idx<q.length; idx++) {
					const ss = q[idx];

					for (let i=0; i<bank.length; i++) {
							const str = bank[i];
							if (visited.has(str)) continue;

							if (isValid(str, ss)) {
									if (str === end) {
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
	
	return findIt ? ans : -1;
};
