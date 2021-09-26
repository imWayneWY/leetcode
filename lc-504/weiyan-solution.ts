function convertToBase7(num: number): string {
  let n = Math.abs(num);
  let ans = "";
  while (n >= 7) {
    ans = n%7 + ans;
    n = n/7 | 0;
  }
  return (num < 0 ? '-' : '') + n + ans;
};
