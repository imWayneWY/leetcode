function isPowerOfFour(n: number): boolean {
  const binary = n.toString(2);

  if (binary[0] !== '1') return false;
  if (binary.length%2 !== 1) return false;
  for (let i=1; i<binary.length; i+=2) {
    if (binary[i] !== '0' || binary[i+1] !== '0') {
      return false;
    }
  }
  return true;
};
