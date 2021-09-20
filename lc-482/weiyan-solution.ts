function licenseKeyFormatting(s: string, k: number): string {
  let ans = "";
  let i=s.length-1;
  let cnt = 0;
  while (i>=0) {
    if (s[i] !== '-') {
      ans = s[i].toUpperCase() + ans;
      cnt++;
      if (cnt===k) {
        cnt=0;
        ans = '-' + ans;
      }
    }
    i--;
  }
  

  return  ans[0] === '-' ? ans.substring(1) : ans;
};
