function maxTurbulenceSize(arr: number[]): number {
  const len = arr.length;
  if (len < 2) return len;
  let rec = 1;
  let ans = 1;
  let p = 1;
  while (p<len && arr[p]===arr[p-1]) {
    p++;
  }
  let expectIncrease = arr[p] - arr[p-1] < 0;
  if (p!==len) {
    rec = 2;
    ans = 2;
  }
  while(p < len) {
    const isIncrease = arr[p] - arr[p-1] > 0;
    if (arr[p]===arr[p-1]) {
      ans = Math.max(rec, ans);
      const curr = arr[p];
      while(p < len) {
        if(arr[p]!==curr) {
          expectIncrease = arr[p] - arr[p-1] < 0;
          rec = 2;
          break;
        }
        p++;
      }

    } else if (isIncrease !== expectIncrease) {
      ans = Math.max(rec, ans);
      rec=2;
      expectIncrease = arr[p] - arr[p-1] < 0;
    }else {
      expectIncrease = !expectIncrease;
      rec++;
    }
    // console.log(p, '----', rec);
    p++;
  }
  ans = Math.max(rec, ans);
  return ans;
};
