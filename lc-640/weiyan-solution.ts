function solveEquation(equation: string): string {
  let [left, right] = equation.split('=');
  if(left[0] !== '-') {
    left = '+' + left;
  }
  if(right[0] !== '-') {
    right = '+' + right;
  }
  equation = [left,right].join("=") + '+';
  let numOfX = 0;
  let sum = 0;
  let start = 0;
  let end = 1;
  let afterEquator = false;
  while(end < equation.length) {
    if (equation[end]==='+' || equation[end]==='-' || equation[end]==='=') {
      const str = equation.substring(start, end);
      if (str[str.length-1]==='x') {
        const n = str.length!==2 ? parseInt(str.substring(1, str.length-1)) : 1;
        numOfX = ((str[0] === '+' && !afterEquator) || (str[0]==='-' && afterEquator)) ? numOfX+n : numOfX-n;
      } else {
        const n = parseInt(str.substring(1));
        sum  = ((str[0] === '+' && !afterEquator) || (str[0]==='-' && afterEquator)) ? sum+n : sum-n;
      }
      
      if(equation[end]==='=') {
        afterEquator = true;
        end++;
      }
      start = end;
    }
    end++;
  }
  if (numOfX===0 && sum===0) return "Infinite solutions";
  if (numOfX===0 && sum!==0) return "No solution";
  const ans = (0-sum)/numOfX;
  return "x="+ans.toString();
};
