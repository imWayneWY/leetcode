function repeatedStringMatch(a: string, b: string): number {
  const lenB = b.length;
  
  let res = a;
  let cnt = 1;
  while (res.length < lenB) {
    res += a;
    cnt++;
  }
  if (res.includes(b)) {
    return cnt;
  }
  res += a;
   if (res.includes(b)) {
    return cnt + 1;
  }
  return -1;
};
