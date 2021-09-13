
function getHint(secret: string, guess: string): string {
  let a = 0;
  let b = 0;
  const memo = new Map();
  const len = secret.length;
  for (let i=0; i<len; i++) {
    const s = secret[i];
    memo.has(s) ? memo.set(s, memo.get(s)+1) : memo.set(s, 1);
  }
  for (let i=0; i<len; i++) {
    const s = guess[i];
    if (s === secret[i]) {
      a++;
      if(memo.get(s) === 0) {
        b--;
      } else {
        memo.set(s, memo.get(s)-1);
      }
    } else {
      if(memo.has(s) && memo.get(s) > 0) {
        b++;
        memo.set(s, memo.get(s)-1);
      }
    }
  }
  return a + "A" + b + "B";
};
