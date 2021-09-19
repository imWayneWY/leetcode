function finalValueAfterOperations(operations: string[]): number {
  let ans = 0;
  for (let i=0; i<operations.length; i++) {
    if (operations[i] === "X++" || operations[i] === "++X") {
      ans++;
    } else {
      ans--;
    }
  }
  return ans;
};