function fizzBuzz(n: number): string[] {
  let cntF = 0;
  let cntB = 0;
  const ans = [];
  for (let i=0; i<n; i++) {
    cntF++;
    cntB++;
    if (cntF===3 && cntB===5) {
      cntF=0;
      cntB=0;
      ans.push("FizzBuzz");
    } else if (cntF===3) {
      cntF=0;
      ans.push("Fizz");
    } else if (cntB===5) {
      cntB=0;
      ans.push("Buzz");
    } else {
      ans.push((i+1).toString());
    }
  }
  return ans;
};
