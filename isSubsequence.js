function isSubsequence(string1, string2) {
  let pointer1 = 0;
  let pointer2 = 0;
  while(pointer1 < string1.length) {
      if (string1[pointer1] === string2[pointer2] && pointer1 === string1.length - 1) {
          return true;
      } else if (string1[pointer1] === string2[pointer2]) {
          pointer1++;
          pointer2++;
      } else if (string1[pointer1] !== string2[pointer2] && pointer2 === string2.length - 1) {
          return false;
      } else {
          pointer2++
      }
  }
}