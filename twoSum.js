// Given an array of integers, return indices of the two numbers such that they add up to a specific target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.

console.log(twoSum([2, 7, 11, 15], 9), ' Should equal [ 0, 1 ]');
console.log(twoSum([31, 2, 3, 4, 5, 6, 7, 29], 31), ' Should equal [ 1, 7 ]');

function twoSum(array, target) {
  let tuple = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] < target) {
      for (let j = i+1; j < array.length; j++) {
        if (array[i] + array[j] === target) {
          tuple = [i,j];
        }
      }
    }
  }
  return tuple;
}