function countKDifference(nums: number[], k: number): number {
  const memo = new Map();
  let ans = 0;
  for (let i=0; i<nums.length; i++) {
    memo.has(nums[i]) ? memo.set(nums[i], memo.get(nums[i])+1) : memo.set(nums[i], 1);
    const target1 = nums[i]+k;
    const target2 = nums[i]-k;
    if(memo.has(target1)) ans+=memo.get(target1);
    if(memo.has(target2)) ans+=memo.get(target2);
  }
  return ans
};
