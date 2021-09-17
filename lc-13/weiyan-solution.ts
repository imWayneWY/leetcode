function romanToInt(s: string): number {
  const romans = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000
  };
  s+="E"; // add an extra char for ending
  
  let ans = 0;
  let temp = romans[s[0]];
  let p=1;
  while(p<s.length) {
    if(s[p]!=="E") {
      if(romans[s[p]] === romans[s[p-1]]) {
        temp+=romans[s[p]];
      } else {
        if(romans[s[p]] < romans[s[p-1]]) {
          ans += temp;
          temp = romans[s[p]];
        } else {
          ans -= temp;
          temp = romans[s[p]];
        }
      }
    } else {
      ans += temp;
    }
    p++;
  }
  return ans;
};
