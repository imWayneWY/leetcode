function fourSumCount(nums1: number[], nums2: number[], nums3: number[], nums4: number[]): number {
	const len = nums1.length;
	const map1 = new Map();
	const map2 = new Map();
	for (let i=0; i < len; i++) {
			for (let j=0; j < len; j++) {
					const sum1 = nums1[i] + nums2[j];
					const sum2 = nums3[i] + nums4[j];
					map1.has(sum1) ? map1.set(sum1, map1.get(sum1)+1) : map1.set(sum1, 1);
					map2.has(sum2) ? map2.set(sum2, map2.get(sum2)+1) : map2.set(sum2, 1);
			}
	}
	
	let ans = 0;
	map1.forEach((value, key) => {
			if (map2.has(0-key)) {
					ans += value * map2.get(0-key);
			}
	})
	
	return ans;
};
