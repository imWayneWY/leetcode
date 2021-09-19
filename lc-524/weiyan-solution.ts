function findLongestWord(s: string, dictionary: string[]): string {
  dictionary.sort().sort((a, b) => b.length-a.length);

  for (let i=0; i<dictionary.length; i++) {
    const word = dictionary[i];
    let sp = 0, wp = 0;
    while (sp<s.length && wp<word.length) {
      if (s[sp] === word[wp]) {
        sp++;
        wp++;
      } else {
        sp++;
      }
      if (wp===word.length) {
        return word;
      }
    }
  }

  return "";
};
