
type MemoProps = {
  idx: number;
  cnt: number;
}
function firstUniqChar(s: string): number {
  const memo = new Map<string, MemoProps>();
  
  for (let i=0; i<s.length; i++) {
    const c = s[i];
    if (memo.has(c)) {
      const m = memo.get(c);
      m.cnt++;
      memo.set(c, m);
    } else {
      memo.set(c, {idx: i, cnt: 1});
    }
  }
  
  let ans = -1;
  memo.forEach((value) => {
    if (value.cnt===1) {
      ans = ans === -1 ? value.idx : Math.min(value.idx, ans);
    }
  });
  return ans;
};
