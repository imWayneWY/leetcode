function validIPAddress(queryIP: string): string {
	const IPv4 = queryIP.split(".");
	if (IPv4.length === 4) {
			for (let i=0; i<4; i++) {
					if (IPv4[i].length < 1 || IPv4[i].length > 3) {
							return "Neither";
					}
					if (IPv4[i][0] === '0' && IPv4[i].length > 1) {
							return "Neither";
					}
					const ip = parseInt(IPv4[i]);

					if (ip < 0 || ip > 255) {
							return "Neither";
					}
					for (let j=0; j<IPv4[i].length; j++) {
							if (!(IPv4[i][j] >= '0' && IPv4[i][j] <= '9')) {
									return "Neither";
							}
					}
			}
			return "IPv4";
	}
	
	const IPv6 = queryIP.split(":");

	if (IPv6.length === 8) {
			for (let i=0; i<8; i++) {
					const ip = IPv6[i];
					if (ip.length > 4 || ip.length < 1) {
							return "Neither";
					}
					for (let j=0; j<ip.length; j++) {
							if (!((ip[j] >= '0' && ip[j] <= '9')
								 || (ip[j] >= 'a' && ip[j] <= 'f')
								 || (ip[j] >= 'A' && ip[j] <= 'F'))) {
									return "Neither";
							}
					}
			}
			return "IPv6";
	}
	
	return "Neither";
};
