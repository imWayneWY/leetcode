function numUniqueEmails(emails: string[]): number {
	const set = new Set();
	
	for (let i=0; i<emails.length; i++) {
			const email = emails[i];
			let isDomain = false;
			let realEmail = "";
			for (let j=0; j<email.length; j++) {
					const c = email[j];
					if (c === '@') {
							realEmail += c;
							isDomain = true;
					} else if (!isDomain) {
							if (c !== '.') {
									if (c==='+') {
											while(email[j+1]!=='@' && j+1<email.length) {
													j++;
											}
									} else {
											realEmail += c;
									}
							}
					} else {
							realEmail += c;
					}
			}

			set.add(realEmail) 
	}
	return set.size;
};
