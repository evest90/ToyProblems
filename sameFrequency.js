function sameFrequency(num1, num2){
  const string1 = num1.toString();
  const string2 = num2.toString();
  
  if (string1.length !== string2.length) {
    return false;
  }

  const obj = {};
  for (let num of string1) {
    obj[num] = ++obj[num] || 2;
  }
  for (let num of string2) {
    if (obj[num]) {
      obj[num]--;
    }
    if (!obj[num]) {
      return false;
    }
    
  }
  return true;
}

console.log(sameFrequency(182, 281))
