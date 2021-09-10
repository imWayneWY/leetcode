function reverseWords(s: string): string {
  const arr = s.split(" ");
  const ans = [];
  for (let i=0; i<arr.length; i++) {
    const str = arr[i];
    ans.push(str.split("").reverse().join(""));
  }
  return ans.join(" ");
};
