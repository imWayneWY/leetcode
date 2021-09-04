function hIndex(citations: number[]): number {
  citations.sort((m,n) => n-m);
  for(let i=0; i<citations.length; i++) {
    if (i+1 > citations[i]) {
      return i;
    }
  }
  return citations.length;
};
