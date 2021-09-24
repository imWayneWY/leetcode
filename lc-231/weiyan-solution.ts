/**
 * @param {number} n
 * @return {boolean}
 */
 var isPowerOfTwo = function(n) {
	const binary = n.toString(2);
	if(binary[0]!=='1') return false;
	for(let i=1; i<binary.length; i++) {
			if(binary[i]!=='0') return false;
	}
	return true;
};