function strStr(haystack: string, needle: string): number {
  const len = needle.length;
  if (len > haystack.length) return -1;
  
  if (needle.length === 0) return 0;
  
  let start = 0, end = len-1;
  while (end < haystack.length) {
    let isMatch = true;
    for(let i=start; i<=end; i++) {
      if (haystack[i] !== needle[i - start]) {
        isMatch = false;
        break;
      }
    }
    if (isMatch) {
      return start;
    }
    start++;
    end++;
  }
  
  return -1;
};