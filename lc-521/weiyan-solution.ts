function findLUSlength(a: string, b: string): number {
  if (a.length !== b.length) return Math.max(a.length, b.length);
  if (a===b) {
    return -1
  } else {
    return a.length;
  }
};
