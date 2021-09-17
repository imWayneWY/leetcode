function compress(chars: string[]): number {
  let cnt = 1;
  let p = 1;
  let curr = chars[0];
  let wp = 0;
  while(p<chars.length) {
    if (chars[p] === curr) {
      cnt++
    } else {
      chars[wp] = curr;
      wp++;
      if(cnt > 1) {
        const cntArr = cnt.toString().split("");
        for (let i=0; i<cntArr.length; i++) {
          chars[wp] = cntArr[i];
          wp++;
        }
      }
      cnt = 1;
      curr = chars[p];
    }
    p++;
  }
  chars[wp]=curr;
  wp++;
  if(cnt > 1) {
    const cntArr = cnt.toString().split("");
    console.log(cntArr);
    for (let i=0; i<cntArr.length; i++) {
      chars[wp] = cntArr[i];
      wp++;
    }
  }
  return wp;
};
