function isIsomorphic(s: string, t: string): boolean {
	if (s.length !== t.length) return false;
	const len = s.length;
	
	const s2c = new Map();
	const c2s = new Map();
	for (let i = 0; i<len; i++) {
			const sc = s[i];
			const tc = t[i];
			if (!s2c.has(sc) && !c2s.has(tc)) {
					s2c.set(sc, tc);
					c2s.set(tc, sc);
			} else {
					if (tc !== s2c.get(sc) || sc !== c2s.get(tc)) {
							return false;
					}
			}
	}
	return true;
};
