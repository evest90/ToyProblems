function sameFrequency(num1, num2){
  // stringify numbers, and if numbers aren't equal in length, return false
  // Create two separate empty objects
  // Iterate through first number string
    // store frequency of each number
  // Iterate through second number string
    // If current exists in object
      // subtract 1 from the object
    // If current value is less than 0
      // return false
  // return true

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
