function validUtf8(data: number[]): boolean {    
	let p = 0;
	while(p < data.length) {
			const num = data[p];
			if (num >> 7 !== 0) {
					if (num >> 5 === 0b110) {
							p++;
							if (data[p] >> 6 !== 0b10) {
									return false;
							}
					} else if (num >> 4 === 0b1110) {
							for (let i=0; i<2; i++) {
									p++;
									if (data[p] >> 6 !== 0b10) {
											return false;
									}
							}
					} else if (num >> 3 === 0b11110) {
							for (let i=0; i<3; i++) {
									p++;
									if (data[p] >> 6 !== 0b10) {
											return false;
									}
							}                
					} else {
							return false;
					}
			}
			// if num >> 7 === 0, it's 1 byte, simply continue
			p++;
	}
	return true;
};
