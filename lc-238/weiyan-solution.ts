function productExceptSelf(nums: number[]): number[] {
  const len = nums.length;
  const ans = new Array(len);
  const left = new Array(len).fill(1);
  const right = new Array(len).fill(1);
  
  for (let i=1; i<len; i++) {
    left[i] = nums[i-1] * left[i-1];
    right[len-i-1] = nums[len-i] * right[len-i];
  }
  for (let i=0; i<len; i++) {
    ans[i] = left[i] * right[i];
  }
  return ans;
};
