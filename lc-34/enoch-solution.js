function lowerBound(nums, target) {
  let l = 1,
    r = nums.length;
  while (l < r) {
    let m = parseInt(l + (r - l) / 2);
    if (nums[m] >= target) {
      r = m;
    } else {
      l = m + 1;
    }
  }
  return l;
}

function upperBound(nums, target) {
  let l = 1,
    r = nums.length;
  while (l < r) {
    let m = parseInt(l + (r - l) / 2);
    if (nums[m] > target) {
      r = m;
    } else {
      l = m + 1;
    }
  }
  return l - 1;
}
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  let lower = lowerBound(nums, target);
  let upper = upperBound(nums, target);
  let res = [];
  // lower如果等于nums.length,说明不存在
  // lower如果等于起始值，需要判断是否等于target
  if (lower === nums.length || nums[lower] !== target) {
    return [-1, -1];
  }
  res.push(lower);
  res.push(upper);
  return res;
};
