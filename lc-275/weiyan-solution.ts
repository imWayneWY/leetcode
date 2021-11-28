function hIndex(citations: number[]): number {
	const len = citations.length;
	let low = 0, high = len - 1;
	let ans = 0;
	
	while (low <= high) {
			const mid = low + Math.trunc((high - low) / 2);
			// console.log(mid);
			if (citations[mid] >= len-mid) {
					ans = Math.max(len-mid, ans);
					high = mid - 1;
			} else {
					low = mid + 1;
			}
	}
	return ans;
};