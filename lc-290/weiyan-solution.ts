/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
 var wordPattern = function(pattern, s) {
	const k2v = new Map();
	const v2k = new Map();
	
	const arr = s.split(' ');
	
	if (pattern.length !== arr.length) return false;
	
	for (let i=0; i<arr.length; i++) {
			const key = pattern[i];
			const value = arr[i]
			if (!k2v.has(key) && !v2k.has(value)) {
					k2v.set(key, value);
					v2k.set(value, key);
			} else {
					if (k2v.get(key) !== value || v2k.get(value) !== key) {
							return false;
					}
			}
	}
	
	return true;
};
