function detectCapitalUse(word: string): boolean {
  const firstCapital = word.charCodeAt(0) < 91;
  let allCaptial = false;
  if (firstCapital && word.length > 1) {
    allCaptial = word.charCodeAt(1) < 91;
  }
  for (let i=1; i<word.length; i++) {
    if (firstCapital) {
      let cc = word.charCodeAt(i);
      if (allCaptial && cc > 96) return false;
      if (!allCaptial && cc < 91) return false;
    } else {
      if (word.charCodeAt(i) < 91) {
        return false;
      }
    }
  }
  return true;
};