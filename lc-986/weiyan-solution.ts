function intervalIntersection(firstList: number[][], secondList: number[][]): number[][] {
	let i=0, j=0;
	
	const ans = [];
	while (i<firstList.length && j<secondList.length) {
			const [starti, endi] = firstList[i];
			const [startj, endj] = secondList[j];
			
			if ((starti >= startj && starti <=endj)
				 || (endi >= startj && endi <= endj)
				 || (startj >= starti && startj <=endi)
				 || (endj >= starti && endj <= endi)) {
					const starta = Math.max(starti, startj);
					const enda = Math.min(endi, endj);
					ans.push([starta, enda]);
			}
			
			if (endi < endj) {
					i++;
			} else {
					j++;
			}
	}
	return ans;
};
