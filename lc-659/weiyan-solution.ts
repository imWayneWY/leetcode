function isPossible(nums: number[]): boolean {
	const len = nums.length;
	
	if (len < 3) return false;

	let list = []
	let count = []
	for(let i=0; i<nums.length; i++){
			let next = nums[i]
			let newSeq = true
			for(let j=list.length-1; j>=0; j--){
					if(list[j]===next){
							list[j] = next + 1
							count[j]++
							newSeq = false
							break
					}
			}
			if(newSeq) {
					list.push(next+1)
					count.push(1)
			}
	}
	return !count.find(a=>a<3)
};