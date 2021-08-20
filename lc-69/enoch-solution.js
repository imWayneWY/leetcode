/**
 * @param {number} x
 * @return {number}
 */
 var mySqrt = function (x) {
    if (x <= 1) return x;
    let left = 1,
        right = x + 1;
    while (left < right) {
        let mid = parseInt(left + (right - left) / 2);
        let temp = mid * mid;
        if (temp > x) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    // left: smallest number such that left * left > x
    return left - 1;
};

console.log(mySqrt(4), ' === 2');
console.log(mySqrt(5), ' === 2');
console.log(mySqrt(8), ' === 2');