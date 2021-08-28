function jobScheduling(startTime: number[], endTime: number[], profit: number[]): number {
  const jobs = [];
  for (let i=0; i<profit.length; i++) {
    jobs.push({
      startTime: startTime[i],
      endTime: endTime[i],
      profit: profit[i]
    });
  }
  jobs.sort((j1,j2) => j1.endTime - j2.endTime);
  
  const dp = new Array(jobs.length).fill(0);
  
  dp[0] = jobs[0].profit;
  for (let i=1; i<jobs.length; i++) {
    let prevDpIdx = -1;
    const startTime = jobs[i].startTime;
    for (let j=i-1; j>=0; j--) {
      if (jobs[j].endTime<=startTime) {
        prevDpIdx = j;
        break;
      }
    }
    const prevMaxProfit = prevDpIdx === -1 ? 0 : dp[prevDpIdx];
    dp[i] = Math.max(dp[i-1], jobs[i].profit + prevMaxProfit);
  }
  return dp.pop();
};
