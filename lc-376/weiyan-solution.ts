function wiggleMaxLength(nums: number[]): number {
	const len = nums.length;
	let prev = nums[0];
	let remvCnt = 0;
	let isUp = undefined;
	
	for (let i=1; i<len; i++) {
			const curr = nums[i];
			
			if (curr === prev) {
					remvCnt++;
			} else {
					if (isUp === undefined) {
							isUp = curr > prev;
					} else {
							if ((curr > prev && isUp) || (curr < prev && !isUp)) {
									remvCnt++;
							} else {
									isUp = !isUp;
							}
					}
					prev = curr;
			}
	}
	
	return len - remvCnt;
};
