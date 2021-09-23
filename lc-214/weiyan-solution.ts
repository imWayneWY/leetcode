function shortestPalindrome(s: string): string {
  const isPalindrome = (p: number) : boolean => {
    let p1 = 0, p2 = p;
    while (p1<p2) {
      if (s[p1]!==s[p2])  {
        return false;
      }
      p1++;
      p2--;
    }
    return true;
  }
  
  
  let p = s.length-1;
  let padStart = "";
  while (p>=0) {
    if (isPalindrome(p)) {
      break;
    }
    padStart += s[p];
    p--;
  }
  return padStart + s;
};
