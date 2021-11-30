function search(nums: number[], target: number): boolean {
	let l = 0;
	let h = nums.length-1;
	
	while(l <= h) {
			const m = l + Math.floor((h-l) / 2);
			if (nums[m] === target) {
					return true;
			} else {
					while (l <= m && nums[l] === nums[m]){
							l++;
					}
					if (l > m) {
							l = m+1;
							continue;
					}
					if (nums[l] < nums[m]) {
							if (nums[l] <= target && nums[m] > target) {
									h = m - 1;
							} else { 
									l = m + 1; 
							}
							
					} else {
							if (nums[m] < target && nums[h] >= target) {
									l = m + 1; 
							} else {
									h = m - 1;
							}
					}
			}
	}
	return false;
};