
function findMaxLength(nums: number[]): number {
	const len = nums.length;
	const map = new Map();
	
	let sum = 0;
	let ans = 0;
	for (let i=0; i<len; i++) {
			if (nums[i]===0) {
					sum -= 1;
			} else {
					sum += 1;
			}
			if (sum === 0) {
					ans = Math.max(ans, i+1);
			} else {
					if (map.has(sum)) {
							ans = Math.max(ans, i - map.get(sum));
					}
			}
			!map.has(sum) && map.set(sum, i);
	}
	// console.log(map);
	return ans;
};
