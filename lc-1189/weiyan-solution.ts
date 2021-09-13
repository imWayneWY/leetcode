function maxNumberOfBalloons(text: string): number {
  const count = {
    'b': 0,
    'a': 0,
    'l': 0,
    'o': 0,
    'n': 0
  };
  for (let i=0; i<=text.length; i++) {
    if (count[text[i]]!==undefined) {
      count[text[i]]++;
    }
  }
  let ans = Infinity;
  for(const p in count) {
    if (p==='b' || p==='a' || p==='n') {
      ans = Math.min(ans, count[p]);
    } else {
      ans = Math.min(ans, Math.floor(count[p]/2));
    }
  }
  return ans;
};
