/**
 Do not return anything, modify nums in-place instead.
 */
 function rotate(nums: number[], k: number): void {
  const len = nums.length;
  const kk = k % len;
  const right = nums.splice(len-kk);
  nums.splice(0, 0, ...right);
};