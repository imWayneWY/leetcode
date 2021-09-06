function slowestKey(releaseTimes: number[], keysPressed: string): string {
  let prev = 0;
  let ans = "0";
  let max = 0;
  for (let i=0; i<releaseTimes.length; i++) {
    const dur = releaseTimes[i] - prev;
    prev = releaseTimes[i];
    if (!(dur < max)) {
      if (dur === max) {
        ans = ans.charCodeAt(0) < keysPressed.charCodeAt(i) ? keysPressed.charAt(i) : ans;
      } else {
        max = dur;
        ans = keysPressed.charAt(i);
      }
    }
  }
  return ans;
};
