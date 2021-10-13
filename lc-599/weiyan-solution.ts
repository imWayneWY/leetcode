function findRestaurant(list1: string[], list2: string[]): string[] {
	const map = new Map<string, number>();
	
	for (let i=0; i<list1.length; i++) {
			map.set(list1[i], i);
	}
	
	let min = Infinity;
	let ans = [];
	for (let i=0; i<list2.length; i++) {
			if (map.has(list2[i])) {
					const sum = map.get(list2[i]) + i;
					if (sum === min) {
							ans.push(list2[i])
					} else if (sum < min) {
							// console.log(list2[i], "---", sum);
							ans = [list2[i]];
							min = sum;
					}
			}
	}
	return ans;
};
