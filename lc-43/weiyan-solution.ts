function multiply(num1: string, num2: string): string {
  let ans = [];
  for (let i=num1.length-1; i>=0; i--) {
    for (let j=num2.length-1; j>=0; j--) {
      const val = parseInt(num1[i]) * parseInt(num2[j]);
      let idx = (num1.length + num2.length) - (i+j+2);

      let tens = Math.floor(val/10);
      let ones = Math.floor(val%10);
      // console.log("calculating: ", num1[i], " x ", num2[j], " tens--->", tens, " ones---->", ones, " idx---->", idx);
      
      // deal with ones;
      ones = ans[idx] ? ans[idx] + ones : ones;

      if (ones > 9) {
        tens++;
        ans[idx] = ones%10;
      } else {
        ans[idx] = ones;
      }
      // deal with tens
      idx++;
      let carry = 0;
      tens = ans[idx] ? ans[idx] + tens : tens;
        
      if (tens > 9) {
        carry = 1;
        ans[idx] = tens%10;
      } else {
        ans[idx] = tens;
      }
      

      // deal with carry
      while(carry) {
        idx++;
        const n = ans[idx] ? ans[idx] + 1 : 1;
        
        if (n > 10) {
          ans[idx] = 0;
        } else {
          ans[idx] = n;
          carry = 0;
        }
      }
      // console.log(ans);
    }
  }
  let ret = ans.reverse().join("");
  let start = 0;
  while(ret[start]==='0') {
    start++;
  }
  return ret.substring(start).length ? ret.substring(start) : "0";
};
