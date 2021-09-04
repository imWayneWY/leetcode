function firstMissingPositive(nums: number[]): number {
  const memo = new Array(nums.length).fill(0);
  for (const n of nums) {
    if(n>0) {
      memo[n-1] = n;
    }
  }
  for (const i of memo) {
    if (!memo[i]) {
      return i+1;
    }
  }
  return nums.length+1;
};
