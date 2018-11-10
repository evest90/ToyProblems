// Implement a function called countUniqueValues, which accepts a sorted array,
// and counts the unique values in the array. There can be negative numbers in the array,
// but it will always be sorted.

function countUniqueValues(array) {
  let pointer = 0;
  for (let i = 1; i < array.length; i++) {
    if (array[pointer] !== array[i]) {
      pointer++;
      array.splice(pointer, 1, array[i]);
    }
    if (i === array.length - 1) {
      return pointer + 1;
    }
  }
  return 0;
}

console.log(countUniqueValues([1,1,1,1,1,2]))













// function countUniqueValues(array) {
//   if (!array.length) {
//     return 0;
//   }
//   let counter = 1;
//   let current = array[0];
//   for (let num of array) {
//     if (num !== current) {
//       counter++;
//       current = num;
//     }
//   } 
//   return counter;
// }