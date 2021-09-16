function fractionAddition(expression: string): string {
  const gcd = (a, b) => b == 0 ? a : gcd(b, a % b);
  const scm = (a, b) => (a / gcd(a, b)) * b;
  if (expression[0]!=="-") {
    expression = "+" + expression;
  }
  expression = expression + "+"; // for the last loop

  const numerators = [];
  const denominators = [];
  const isPositive = [];

  let denominator = 0;
  let end = 1;
  let start = 0;
  while(end<expression.length) {
    if (expression[end] ==='+' || expression[end] === '-') {
      const str = expression.substring(start+1, end)
      isPositive.push(expression[start]==="+");
      const [n, d] = str.split("/");
      numerators.push(parseInt(n));
      denominators.push(parseInt(d));
      if (denominator !== parseInt(d)) {
        denominator = !!denominator ? scm(denominator, parseInt(d)) : parseInt(d);
      }
      start = end;
    }
    end++;
  }
  let numerator = 0;
  for(let i=0; i<numerators.length; i++) {
    const value = numerators[i] * (denominator / denominators[i]);
    numerator = isPositive[i] ? numerator + value : numerator - value;
  }
  
  const g = Math.abs(gcd(numerator, denominator));
  if (g === 0) {
    denominator = 1;
  }
  if (g > 1) {
    numerator = numerator / g;
    denominator = denominator / g;
  }
  return numerator.toString() + '/' + denominator.toString();
};
