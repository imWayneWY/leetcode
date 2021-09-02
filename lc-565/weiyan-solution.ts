function arrayNesting(nums: number[]): number {
  let ans = 0;
  const memo = new Array(nums.length).fill(false);
  for (let i=0; i<nums.length; i++) {
    if (memo[i]) continue;
    let isDuplicate = false;
    const s = [nums[i]];
    while(!isDuplicate) {
      const nextIdx = s[s.length-1];
      if (s.includes(nums[nextIdx])) {
        isDuplicate = true;
      } else {
        s.push(nums[nextIdx]);
      }
    }
    s.forEach(idx => memo[idx]=true)
    ans = Math.max(ans, s.length);
  }
  return ans;
};
