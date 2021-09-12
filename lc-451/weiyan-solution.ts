function frequencySort(s: string): string {
  const memo = new Map();
  for (let i=0; i<s.length; i++) {
    memo.has(s[i]) ? memo.set(s[i], memo.get(s[i])+1) : memo.set(s[i], 1);
  }
  const arr = Array.from(memo);
  arr.sort((a, b) => b[1]-a[1]);
  //console.log(arr)
  let ans = "";
  for (let i=0; i<arr.length; i++) {
    for (let j=0; j<arr[i][1]; j++) {
      ans += arr[i][0];
    }
  }
  return ans;
};
