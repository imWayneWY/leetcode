function largestNumber(nums: number[]): string {
	return nums.map(n => n.toString()).sort((a, b) => {
			let p = 0;
			while (p<a.length && p<b.length) {
					if (a[p] !== b[p]) {
							return parseInt(b[p]) - parseInt(a[p]);
					} else {
							p++;
					}
			}
			
			if (p===a.length) {
					const c = a[p-1];
					const i = parseInt(c);
					while (p<b.length) {
							if (b[p] !== c) {
									return parseInt(b[p]) - i;
							}
							p++;
					}
			} else {
					const c = b[p-1];
					const i = parseInt(c);
					while (p<a.length) {
							if (a[p] !== c) {
									return i - parseInt(a[p]);
							}
							p++;
					}    
			}
			
			return 1;
	}).join("");
};