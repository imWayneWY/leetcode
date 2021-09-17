function countAndSay(n: number): string {
  if (n===1) return "1";
  const say = countAndSay(n-1);
  let ans = "";
  let p = 0;
  let prev = say[0];
  let cnt = 0;
  while(p<say.length) {
    if(say[p]===prev) {
      cnt++;
    } else {
      ans = ans + cnt.toString() + prev;
      prev=say[p];
      cnt=1;
    }
    p++;
  }
  ans = ans + cnt.toString() + prev;
  return ans;
};
