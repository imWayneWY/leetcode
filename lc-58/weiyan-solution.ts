function lengthOfLastWord(s: string): number {
  if (s==="") return 0;
  let p = s.length - 1;
  let ans = 0;
  while(p>=0) {
    if (s[p]!==" ") {
      break;
    }
    p--;
  }
  while(p>=0) {
    if (s[p]!==" ") {
      ans++;
    } else {
      break;
    }
    p--;
  }
  return ans;
};
