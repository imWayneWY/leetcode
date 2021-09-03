function findErrorNums(nums: number[]): number[] {
  nums.sort((m,n) => m-n);
  let miss = 0;
  let duplicate = 0;
  let prev = nums[0];

  for (let i=0; i<nums.length; i++) {
    if (i===0 && nums[i]!==1) {
      miss = 1;
    }
    if (nums[i]-prev>1) {
      miss = prev+1;
    } else {
      prev=nums[i];
    }
    if (i<nums.length-1 && nums[i]===nums[i+1]) {
      duplicate = nums[i];
    }
    if (duplicate && miss) {
      break;
    }
  }
  if(!miss) miss = nums.length;

  return [duplicate, miss];
}