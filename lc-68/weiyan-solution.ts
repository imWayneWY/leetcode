function fullJustify(words: string[], maxWidth: number): string[] {
  let start = 0;
  let sumLen = 0;
  let arr = [];
  let cntArr = [];
  let line = 0;
  for (let i=0; i<words.length; i++) {
    if ((i-start + sumLen + words[i].length > maxWidth)) {
      start = i;
      cntArr[line] = sumLen;
      sumLen = words[i].length;
      line++;
      arr[line] = [words[i]];
    } else {
      sumLen += words[i].length;
      arr[line] = arr[line] ? [...arr[line], words[i]] : [words[i]];
    }
  }
  cntArr[line] = sumLen;
  let ans = [];
  for (let i=0; i<arr.length; i++) {
    if (i===arr.length-1 || arr[i].length===1) {
      let str = arr[i].join(" ");
      str += new Array(maxWidth - str.length).fill(" ").join("");
      ans.push(str);
    } else {
      const space = Math.floor((maxWidth - cntArr[i]) / (arr[i].length - 1));
      let extra = (maxWidth - cntArr[i]) % (arr[i].length - 1);
      let str = ""
      for (let j = 0; j < arr[i].length; j++) {
        str = str+arr[i][j];
        if (j!==arr[i].length-1) {
          str += new Array(space).fill(" ").join("");
          if (extra) {
            str += " ";
            extra--;
          }          
        }
      }
      ans.push(str);
    }
  }
  return ans;
};
