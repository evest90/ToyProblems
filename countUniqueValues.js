// Implement a function called countUniqueValues, which accepts a sorted array,
// and counts the unique values in the array. There can be negative numbers in the array,
// but it will always be sorted.

function countUniqueValues(array) {
  if (!array.length) {
    return 0;
  }
  let counter = 1;
  let current = array[0];
  for (let num of array) {
    if (num !== current) {
      counter++;
      current = num;
    }
  } 
  return counter;
}