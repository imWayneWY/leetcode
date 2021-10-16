function longestPalindrome(s: string): number {
	const set = new Set();
	let ans = 0;
	for (let i=0; i<s.length; i++) {
			if (set.has(s[i])) {
					ans += 2;
					set.delete(s[i]);
			} else {
					set.add(s[i]);
			}
	}
	if (set.size > 0) ans++;
	return ans;
};