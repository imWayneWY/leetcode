function reverseStr(s: string, k: number): string {
  let ans = [];
  for(let i=0; i<s.length; i+=k*2) {
    for (let j=0; j<k; j++) {
      if(i+k-1-j < s.length) {
        ans.push(s[i+k-1-j]);
      }
    }
    for (let j=i+k; j<i+2*k; j++) {
      if(j < s.length) {
        ans.push(s[j]);
      }
    }
  }
  return ans.join("");
};
