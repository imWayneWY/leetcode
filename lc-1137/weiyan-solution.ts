function tribonacci(n: number): number {
  const ans = [];
  ans[0] = 0;
  ans[1] = 1;
  ans[2] = 1;
  
  let i=3;
  while (i<=n) {
    ans[i] = ans[i-1] + ans[i-2] + ans[i-3];
    i++;
  }
  return ans[n];
};