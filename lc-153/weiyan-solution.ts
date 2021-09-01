
function findMin(nums: number[]): number {
	if(nums.length === 1) {
        return nums[0];
    }

    let left = 0,
        right = nums.length - 1,
        mid;
    
    // no rotation
    if(nums[right] > nums[0]) {
        return nums[0];
    }
    
    while(left <= right) {
        mid = left + Math.floor((right - left) / 2);
        
        // if mid element id less than previous element, then that is the smallest element
        if(nums[mid] < nums[mid - 1]) {
            return nums[mid];
        } else if(nums[mid] >= nums[0]) {
		
            // if mid elment is greater than first element, then that means that is the original second half of the array, and since it is rotated, the smallest element will be in the right side
            // equal condition for such a case: [2, 1] - when mid element is the first element
            left = mid + 1;
        } else {
		
            // if mid element is less than the first element, then that means that this is the original first half of the array, and the smallest element will be on the left side
            right = mid - 1;
        }
    }
};
