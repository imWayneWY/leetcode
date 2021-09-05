function findMiddleIndex(nums: number[]): number {
  let leftSum = 0;
  let rightSum = nums.reduce((a, b) => a + b, 0);
  for (let i = 0; i<nums.length; i++) {
    rightSum -= nums[i];
    leftSum = i===0 ? 0 :leftSum+nums[i-1];
    if (rightSum === leftSum) return i;
  }
  return -1;
};
