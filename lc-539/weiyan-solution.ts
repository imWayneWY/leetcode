function findMinDifference(timePoints: string[]): number {
  const parseTime = [];
  for(let i=0; i<timePoints.length; i++) {
    const [hh, mm] = timePoints[i].split(':');
    parseTime.push(parseInt(hh)*60+parseInt(mm));
  }
  parseTime.sort((a,b) => a-b);
  let ans = Infinity;
  for (let i=1; i<parseTime.length; i++) {
    ans = Math.min(ans, parseTime[i]-parseTime[i-1]);
  }
  ans = Math.min(ans, (24*60)-parseTime[parseTime.length-1]+parseTime[0]);
  return ans;
};
