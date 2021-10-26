const CC_a = 97; // char code of 'a'

function removeDuplicateLetters(s: string): string {
    const lastIndex = new Array(26).fill(-1);
    const len = s.length;
    
    for (let i=0; i < len; i++) {
        lastIndex[s.charCodeAt(i)-CC_a] = i;
    }
    
    const visited = new Set();
    const stack = [];
    for (let i=0; i < len; i++) {
        const c = s.charAt(i);
        if (visited.has(c)) continue; 

        while(stack.length > 0 
              && stack[stack.length - 1].charCodeAt(0) > s.charCodeAt(i) 
              && lastIndex[stack[stack.length-1].charCodeAt(0) - CC_a] > i) {
            visited.delete(stack.pop());
        }
        
       
        visited.add(c);
        stack.push(c);
    }
    
    return stack.join('');
};
