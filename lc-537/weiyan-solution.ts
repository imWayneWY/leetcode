function complexNumberMultiply(num1: string, num2: string): string {
  const num1part1 = parseInt(num1.split("+")[0]);
  const num2part1 = parseInt(num2.split("+")[0]);
  const num1part2 = parseInt(num1.split("+")[1].split("i")[0]);
  const num2part2 = parseInt(num2.split("+")[1].split("i")[0]);
  
  const part1 = ((num1part1 * num2part1) - 1 * (num1part2 * num2part2)).toString();
  const part2 = (num1part1 * num2part2 + num2part1 * num1part2).toString() + "i";
  return part1 + "+" +part2;
};
