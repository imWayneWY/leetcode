function minMoves(nums: number[]): number {
  let min = Infinity;
  let len = nums.length;
  let sum = 0;
  for (let i=0; i<nums.length; i++) {
    min = Math.min(nums[i], min);
    sum += nums[i];
  }
  return sum - min * len;
};