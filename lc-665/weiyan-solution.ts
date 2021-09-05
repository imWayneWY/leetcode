function checkPossibility(nums: number[]): boolean {
  let cnt = 0;
  for (let i=0; i<nums.length-1; i++) {
    if(nums[i]-nums[i+1] > 0) {
      cnt++;
      if (cnt === 2) {
        return false;
      }
      if (i-1 >= 0 && i+2 < nums.length) {
        if (nums[i-1] > nums[i+1] && nums[i+2] < nums[i]) {
          return false;
        }
      }
    }
  }
  return true;
};
