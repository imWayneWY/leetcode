function toHex(num: number): string {
	const dic = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"]
	let str = ""
	if (num < 0) num = num + 2**32
	while (num > 15) {
			str = dic[num % 16] + str
			num = Math.floor(num / 16)
	}
	str = dic[num % 16] + str
	if (str[0] === "0" && str.length > 1) str = str.slice(1) 
	return str
};
