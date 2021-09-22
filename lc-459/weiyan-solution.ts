function repeatedSubstringPattern(s: string): boolean {
  return (s+s).slice(1, s.length*2-1).includes(s);
};
