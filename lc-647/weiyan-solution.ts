function countSubstrings(s: string): number {
  const countPalindrome = (l: number, r: number) : number => {
    let cnt = 0;
    while (l>=0 && r<s.length && s[l] === s[r]) {
      cnt++;
      l--;
      r++;
    }
    return cnt;
  }
  
  let ans = 0;
  for (let i=0; i<s.length; i++) {
    ans += countPalindrome(i, i);
    ans += countPalindrome(i, i+1)
  }
  return ans;
};
