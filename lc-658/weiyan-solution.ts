function findClosestElements(arr: number[], k: number, x: number): number[] {
	let low = 0, high = arr.length - 1;
	let isExist = false;
	while (low <= high) {
			const mid = low + Math.trunc((high - low)/2);
			if (arr[mid] === x) {
					isExist = true;
					low = mid;
					break;
			} else if (arr[mid] < x) {
					low = mid + 1;
			} else {
					high = mid - 1;
			}
	}
	
	if (!isExist) {
			if (low===arr.length) low--;
			if (high<0) high=0;
			if (Math.abs(arr[low]-x) >= Math.abs(x-arr[high])) low = high;
	}
	// console.log(low)
	let cnt = 1;
	const ans = [arr[low]];
	let left = low-1;
	let right = low+1;
	
	while (cnt < k) {
			if (left >=0 && right < arr.length) {
					const l = arr[left];
					const r = arr[right];
					if (r - x < x - l) {
							ans.push(r);
							right++;
					} else {
							ans.unshift(l);
							left--;
					}
			} else if (left >=0) {
					ans.unshift(arr[left]);
					left--;
			} else {
					ans.push(arr[right]);
					right++;
			}
			cnt++;
	}
	return ans;
};