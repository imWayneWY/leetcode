function numberToWords(num: number): string {
  if (num===0) return 'Zero';
  const ens = {
    '1': 'One',
    '2': 'Two',
    '3': 'Three',
    '4': 'Four',
    '5': 'Five',
    '6': 'Six',
    '7': 'Seven',
    '8': 'Eight',
    '9': 'Nine',
  }
  const tens = {
    '2': 'Twenty',
    '3': 'Thirty',
    '4': 'Forty',
    '5': 'Fifty',
    '6': 'Sixty',
    '7': 'Seventy',
    '8': 'Eighty',
    '9': 'Ninety'
  }
  const tenPlus = {
    '0': 'Ten',
    '1': 'Eleven',
    '2': 'Twelve',
    '3': 'Thirteen',
    '4': 'Fourteen',
    '5': 'Fifteen',
    '6': 'Sixteen',
    '7': 'Seventeen',
    '8': 'Eighteen',
    '9': 'Nineteen',
  }
  const arr = num.toString().split('');
  let digit = 1;
  const ans = [];
  const isValid = (d: number) => {
    for(let i=0; i<3; i++) {
      if(d-i >= 0 && arr[d-i]!=='0') {
        return true;
      }
    }
    return false;
  }
  for(let i=arr.length-1; i>=0; i--) {
    if (digit%3 === 1) {
      if(digit===4)
        isValid(i) && ans.unshift('Thousand');
      else if (digit===7) {
        isValid(i) && ans.unshift('Million');
      } else if (digit===10) {
        isValid(i) && ans.unshift('Billion');
      }
      if(i!==0 && arr[i-1]==='1' && tenPlus[arr[i]]) {
        ans.unshift(tenPlus[arr[i]]);
        i--;
        digit++;
      } else {
        ens[arr[i]] && ans.unshift(ens[arr[i]]);
      }
    } else if (digit%3===2) {
      tens[arr[i]] && ans.unshift(tens[arr[i]])
    } else {
      ens[arr[i]] && ans.unshift('Hundred');
      ens[arr[i]] && ans.unshift(ens[arr[i]]);
    }
    digit++;
  }
  return ans.join(' ');
};
