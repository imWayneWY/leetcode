function reverseWords(s: string): string {
  let ans = "";
  let word = "";
  for (let i=s.length-1; i>=0; i--) {
    if(s[i]===" ") {
      if (!word) {
        continue;
      } else {
        ans += word+" ";
        word = "";
      }
    } else {
      word = s[i] + word;
    }
  }
  ans += word;
  return ans.trim();
};
