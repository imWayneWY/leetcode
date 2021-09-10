function canConstruct(ransomNote: string, magazine: string): boolean {
  const mRN = new Map();
  const mM = new Map();
  
  for (let i=0; i<ransomNote.length; i++) {
    if (mRN.has(ransomNote[i])) {
      mRN.set(ransomNote[i], mRN.get(ransomNote[i])+1);
    } else {
      mRN.set(ransomNote[i], 1);
    }
  }
  for (let i=0; i<magazine.length; i++) {
    if (mM.has(magazine[i])) {
      mM.set(magazine[i], mM.get(magazine[i])+1);
    } else {
      mM.set(magazine[i], 1);
    }
  }
  let ans = true;
  mRN.forEach((value,key) => {
    if(!mM.has(key) || mM.get(key) < value) {
      ans = false;
    }
  })
  return ans;
};
