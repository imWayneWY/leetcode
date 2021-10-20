function findKthLargest(nums: number[], k: number): number {
	let targetIndex = nums.length - k;
	
	let lo = 0, hi = nums.length - 1;
	while(true) {
			const onePartition = partition(nums, lo, hi);
			
			if (onePartition === targetIndex) {
					return nums[targetIndex];
			} else if (onePartition > targetIndex) {
					hi = onePartition - 1;
			} else {
					lo = onePartition + 1;
			}
	}
};

// get index of nums[lo]
function partition (nums: number[], lo: number, hi: number): number {
	if (lo === hi) return lo;
	
	let i=lo, j=hi+1;
	const cmp = nums[lo];
	
	while (true) {
			while (nums[++i] < cmp) {
					if (i===hi)
							break;
			}
			while (nums[--j] > cmp) {
					if (j===lo)
							break;
			}
			
			if (i >= j) break;
			
			exch(nums, i, j);
	}
	
	exch(nums, j, lo);
	return j;
}

function exch(nums: number[], i, j): void {
	const tmp = nums[i];
	nums[i] = nums[j];
	nums[j] = tmp;
}
