/**
 Do not return anything, modify nums1 in-place instead.
 */
 function merge(nums1: number[], m: number, nums2: number[], n: number): void {
	if (n === 0) return;

	let p1 = m-1;
	let p2 = n-1;
	let p = m+n-1;
	
	while (p >= 0) {
			const num1 = nums1[p1];
			const num2 = nums2[p2];
			if (num1 > num2 || p2 < 0) {
					nums1[p] = num1;
					p1--;
			} else {
					nums1[p] = num2;
					p2--;
			}
			p--;
	}
};