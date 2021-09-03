function findPoisonedDuration(timeSeries: number[], duration: number): number {
  let ans = 0;
  
  for (let i=0; i<timeSeries.length-1; i++) {
    const nxt = timeSeries[i+1];
    if (timeSeries[i]+duration > nxt) {
      ans += nxt - timeSeries[i];
    } else {
      ans += duration;
    }
  }
  return ans + duration;
};
