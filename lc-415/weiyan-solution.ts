function addStrings(num1: string, num2: string): string {
  let p1=num1.length-1, p2=num2.length-1;
  let ans = [];
  let carry = 0;
  while (p1>=0 || p2>=0) {
    let sum = carry;
    if (p1>=0) sum += parseInt(num1[p1]);
    if (p2>=0) sum += parseInt(num2[p2]);
    
    if (sum > 9) {
      sum = sum % 10;
      carry = 1;
      ans.unshift(sum.toString());
    } else {
      carry = 0;
      ans.unshift(sum.toString());
    }
    
    p1--;
    p2--;
  }
  
  if (carry===1) {
    ans.unshift("1");
  }
  return ans.join("");
};
