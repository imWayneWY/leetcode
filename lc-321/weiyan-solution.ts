function maxNumber(nums1: number[], nums2: number[], k: number): number[] {
	/*
			for
					nums1 -> i
					nums2 -> k - i
							max
			merge them
			compare
	*/
	
	const len1 = nums1.length;
	const len2 = nums2.length;
	
	let ans = [];
	for (let i=0; i<=k; i++) {
			if (i <= nums1.length && k-i <= nums2.length) {
					const max1 = getMax(nums1, i);
					const max2 = getMax(nums2, k - i);
					const tmp = merge(max1, max2);
					ans = ans.length === 0 ? tmp : greater(ans, tmp);            
			}
	}
	
	return ans;
};

function getMax(nums: number[], k: number): number[] {
	if (k === 0) return [];
	const len = nums.length;
	const stack = [nums[0]]
	for (let i=1; i<len; i++) {
			const cur = nums[i];
			
			while (stack.length && stack[stack.length - 1] < cur && len - i - 1 >= k-stack.length) {
					stack.pop();
			}
			
			stack.length < k && stack.push(cur);
	}
	return stack;
}

function merge(nums1: number[], nums2: number[]) : number[] {
	let p1 = 0, p2 = 0;
	const stack = [];
	while (p1 < nums1.length || p2 < nums2.length) {
			if (p1 < nums1.length && p2 < nums2.length) {
					const n1 = nums1[p1];
					const n2 = nums2[p2];
					if (n1 > n2) {
							stack.push(n1);
							p1++;
					} else if (n1 < n2) {
							stack.push(n2);
							p2++;
					} else {
							// this part should be a function
							let pp1 = p1;
							let pp2 = p2;
							while (pp1 < nums1.length && pp2 < nums2.length && nums1[pp1] === nums2[pp2]) {
									pp1++;
									pp2++;
							}
							if (pp1<nums1.length && pp2<nums2.length) {
									if (nums1[pp1] > nums2[pp2]) {
											stack.push(n1);
											p1++;
									} else if (nums1[pp1] < nums2[pp2]) {
											stack.push(n2);
											p2++;
									}
							} else {
									if (pp1 < nums1.length) {
											stack.push(n1);
											p1++;
									} else {
											stack.push(n2);
											p2++;
									}
							}
					}
			} else if (p1 < nums1.length) {
					stack.push(nums1[p1]);
					p1++;
			} else {
					stack.push(nums2[p2]);
					p2++;
			}
	}
	return stack;
}

function greater(nums1: number[], nums2: number[]) : number[] {
	for (let i = 0; i<nums1.length; i++) {
			if (nums1[i] > nums2[i]) {
					return nums1;
			} else if (nums1[i] < nums2[i]) {
					return nums2;
			}
	}
	return nums1;
}
