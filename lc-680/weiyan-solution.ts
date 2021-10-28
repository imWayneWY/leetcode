function validPalindrome(s: string): boolean {
	let left=0, right=s.length-1;
	let isRmvd = false;
	
	while (left < right) {
			if (s[left] === s[right]) {
					left++;
					right--;
			} else if (!isRmvd) {
					isRmvd = true;
					return isPalindrome(s.substring(left, right)) || isPalindrome(s.substring(left+1, right+1));
			} else {
					return false;
			}
	}
	
	return true;
};

function isPalindrome(s: string): boolean {
 let left=0, right=s.length-1;
	
	while (left < right) {
			if (s[left] === s[right]) {
					left++;
					right--;
			} else {
					return false;
			}
	}
	
	return true; 
}
