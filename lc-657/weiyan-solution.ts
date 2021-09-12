function judgeCircle(moves: string): boolean {
  const memo = new Map();
  memo.set("U", 0);
  memo.set("R", 0);
  memo.set("L", 0);
  memo.set("D", 0);
  for (let i=0; i<moves.length; i++) {
    memo.set(moves[i], memo.get(moves[i])+1);
  }
  return memo.get("U") === memo.get("D") && memo.get("L")===memo.get("R");
};
