const originalDigits = (s) => {
	let m = {};
	let f = Array(10).fill(0);
	for (const c of s) {
			m.hasOwnProperty(c) ? m[c]++ : m[c] = 1;
	}
	f[0] = m['z'] || 0;
	f[2] = m['w'] || 0;
	f[4] = m['u'] || 0;
	f[6] = m['x'] || 0;
	f[8] = m['g'] || 0;
	f[1] = (m['o'] || 0) - f[0] - f[2] - f[4];
	f[3] = (m['h'] || 0) - f[8];
	f[5] = (m['f'] || 0) - f[4];
	f[7] = (m['s'] || 0) - f[6];
	f[9] = (m['i'] || 0) - f[6] - f[8] - f[5];
	let res = '';
	for (let i = 0; i < 10; i++) {
			res += (i + '').repeat(f[i]);
	}
	return res;
};
