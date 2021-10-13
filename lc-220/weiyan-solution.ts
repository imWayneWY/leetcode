function containsNearbyAlmostDuplicate(nums: number[], k: number, t: number): boolean {
	if (nums.length === 0 || t < 0) return false;
	
	const map = new Map();
	const w = t + 1;
	
	for (let i=0; i<nums.length; i++) {
			if (i - k - 1 >= 0 && map.has(getId(nums[i-k-1], w))) {
					map.delete(getId(nums[i-k-1], w));
			}
			
			if (map.has(getId(nums[i], w))) {
					return true;
			}
			
			if (map.has(getId(nums[i], w) -1) && Math.abs(map.get(getId(nums[i], w) - 1) - nums[i]) <= t) {
					return true;
			}
			if (map.has(getId(nums[i], w) +1) && Math.abs(map.get(getId(nums[i], w) + 1) - nums[i]) <= t) {
					return true;
			}
			map.set(getId(nums[i], w), nums[i]);
	}
	
	return false;
};

function getId(num: number, w: number): number {
	if (num >= 0) {
			return Math.trunc(num / w);
	} else {
			return Math.trunc((num + 1 )/w-1);
	}
}

