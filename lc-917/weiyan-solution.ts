function reverseOnlyLetters(s: string): string {
  const len = s.length;
  let p1=0, p2=len-1;
  let arr = new Array(len);
  while(p2>p1) {
    if (isLetter(s.charCodeAt(p1)) && isLetter(s.charCodeAt(p2))) {
      arr[p1] = s[p2];
      arr[p2] = s[p1];
      p1++;
      p2--;
    } else {
      if (!isLetter(s.charCodeAt(p1))) {
        arr[p1] = s[p1];
        p1++;
      }
      if (!isLetter(s.charCodeAt(p2))) {
        arr[p2] = s[p2];
        p2--;
      }
    }
  }
  if(p1===p2) arr[p1] = s[p1];
  return arr.join('');
};
  
function isLetter(code: number) {
  return (code>=65 && code<=90) || (code>=97 && code<=122);
}
