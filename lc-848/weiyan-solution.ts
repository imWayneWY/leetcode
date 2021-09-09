function shiftingLetters(s: string, shifts: number[]): string {
  const len = shifts.length
  let prev = 0;
  const ans = new Array(len);
  
  for (let i=len-1; i>=0; i--) {
    let newCC = (s.charCodeAt(i) + (prev + shifts[i]) % 26);
    if(newCC > 122) {
      newCC = newCC-26
    }
    prev += shifts[i];

    ans[i] = String.fromCharCode(newCC);
  }
  return ans.join('');
};
