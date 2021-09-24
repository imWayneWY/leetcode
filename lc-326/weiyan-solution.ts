
function isPowerOfThree(n: number): boolean {
  const trinary = n.toString(3);
  if (trinary[0]!=='1') return false;
  
  for (let i=1; i<trinary.length; i++) {
    if (trinary[i]!=='0') {
      return false;
    }
  }
  return true;
};