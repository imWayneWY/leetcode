function checkRecord(s: string): boolean {
  let aCnt = 0;
  let lCnt = 0;
  let isLate = false;
  let ans = true;
  for (let i=0; i<s.length; i++) {
    if (s[i]==='A') {
      aCnt++;
      if(aCnt===2) {
        ans = false;
        break;
      }
    }
    if (s[i]==='L') {
      if (lCnt === 0 && !isLate) {
        lCnt=1;
        isLate = true;
      } else {
        lCnt++;
        if (lCnt===3) {
          ans = false;
          break;
        }
      }
    }
    if (s[i]!=='L' && isLate) {
      isLate = false;
      lCnt = 0;
    }
  }
  return ans;
};
