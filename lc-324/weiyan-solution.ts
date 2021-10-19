function wiggleSort(nums: number[]): void {
	let ordered = [...nums.sort((a,b)=> a>b? 1: -1)] // We sort the numbers by their order in a new array

	let endPoint = nums.length -1; // We get the index of the last number
	let midPoint = Math.ceil(nums.length/2) -1; // We get the index of the last number of a hypothtical list, if we were to divide that list into even part - bigger numbers and smaller numbers - the first half is the smaller, and this index represents the biggest of the small ones.

	let pointer = 0; // We create a pointer that indicates where we are in the process of repopulating the array
// We want to stop when we've already entered the smallest number. We start repopulating the list, taking the last item of each list (small ints and big ints), one at a time.
	while(midPoint>=0){
			nums[pointer] = ordered[midPoint];
			pointer++
			
			if(pointer<nums.length) nums[pointer] = ordered[endPoint]
			pointer++
			
			endPoint--
			midPoint--
	} 
};
