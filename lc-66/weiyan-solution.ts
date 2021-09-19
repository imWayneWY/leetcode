function plusOne(digits: number[]): number[] {
  let carry = 0;
  for (let i=digits.length-1; i>=0; i--) {
    const n = i===digits.length-1 ? digits[i] + carry + 1 : digits[i] + carry;
    if (n<10) {
      digits[i] = n;
      return digits;
    } else {
      carry = 1;
      digits[i] = 0;
      if (i===0) {
        digits.unshift(1);
        return digits;
      }
    }
  }
};
