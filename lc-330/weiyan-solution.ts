function minPatches(nums: number[], n: number): number {
  let miss = 1;
  let idx = 0;
  let ans = 0;
  
  while(miss <= n) {
    if (idx < nums.length && nums[idx] <= miss) {
      miss += nums[idx++];
    } else {
      miss += miss;
      ans++;
    }
  }
  return ans;
};
