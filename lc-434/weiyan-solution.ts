function countSegments(s: string): number {
  let ans = 0;
  if (s === "") return ans;
  let isContent = s[0] !== " ";
  if (isContent) ans++;
  for (let i=1; i<s.length; i++) {
    if (s[i]===" " && isContent) {
      isContent = false;
    } else if (!isContent && s[i]!==" ") {
      ans++;
      isContent = true;
    }
  }
  return ans;
};
