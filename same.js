// Write a function "same" which accepts two arrays. The function should return true if every
// value in the array has it's corresponding value squared in the second array. 
// The frequency of values must be the same

// Examples:
  console.log(same([1,2,3], [4,1,9])) //= true
  console.log(same([1,2,3], [1,9])) //= false
  console.log(same ([1,2,1], [4,4,1]))// = false


function same(arr1, arr2) {
  const obj1 = {};
  const obj2 = {};
  for (let num of arr1) {
    if (obj1[Math.pow(num, 2)]) {
      obj1[Math.pow(num, 2)]++;
    } else {
      obj1[Math.pow(num, 2)] = 1;
    }
  }
  for (let num of arr2) {
    if (obj2[num]) {
      obj2[num]++;
    } else {
      obj2[num] = 1;
    }
  }
  if (Object.keys(obj1).length !== Object.keys(obj2).length){
    return false;
  }
  for (let num of arr2) {
    if (obj1[num] !== obj2[num]) {
      return false;
    }
  }
  return true;
}