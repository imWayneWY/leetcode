function findRelativeRanks(score: number[]): string[] {
  const sortedScroe = [...score].sort((a,b) => b-a);
  let memo = new Map();
  const firstThree = {
    0: "Gold Medal",
    1: "Silver Medal",
    2: "Bronze Medal"
  };
  for (let i=0; i<score.length; i++) {
    let rank = (i+1).toString();
    if (i<3) {
      rank = firstThree[i];
    }
    memo.set(sortedScroe[i], rank);
  }
  let ans = [];
  for (let i=0; i<score.length; i++) {
    ans.push(memo.get(score[i]));
  }
  return ans;
};
