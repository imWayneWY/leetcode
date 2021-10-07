function isValid(code: string): boolean {
	let p = 0;
	const len = code.length;
	const stack = [];
	let firstTag = "";
	let lastTag = "";

	while (p < len) {
			const c = code[p];
			if (c === '<') {
					// handle cdata
					if (code.substr(p, 9)==="<![CDATA[") {
							if (stack.length===0) return false;
							p+=9;
							while(code.substr(p,3) !== ']]>' && p<len) {
									p++;
							}
							if (p === len) return false;
							p+=2;
					} else {
							// handle tagname
							let tagName = "";
							let isCloseTag = false;
							if (p===len-1) return false;
							if (code[p+1] === '/') {
									isCloseTag = true;
									p++;
							}
							while (p<len-1 && code[p+1]!=='>') {
									if (code.charCodeAt(p+1)<65 || code.charCodeAt(p+1)>90) return false;
									tagName += code[p+1];
									p++;
							}
							if (p===len-1 && code[p]!=='>') return false;
							if (!tagName || tagName.length > 9) return false;

							if (isCloseTag) {
									const prevTag = stack.pop();
									if (prevTag !== tagName) {
											return false;
									}
									lastTag = tagName;
							} else {
									if (!firstTag) firstTag = tagName;
									stack.push(tagName);
							}
							
							
							p++;  // skip the last ">"
					}
			}
			else {
					// unwrapped area
					if (stack.length===0) return false;
			}
			p++;
	}
	return stack.length === 0 && firstTag === lastTag;
};
