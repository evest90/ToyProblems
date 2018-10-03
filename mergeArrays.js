// Given two sorted arrays A and B, each of which contains no duplicate integers, the lists can be merged together as follows:
// A = [ 1, 3, 4, 5 ]
// B = [ 2, 4, 6, 8 ]
// MERGED = [1, 2, 3, 4, 5, 6, 8]

// write a function that accepts N number of such arrays, and returns the merged list. The solution should run in O(log(n)) time (edited)

function mergeNArrays() {
  let arrayOfArraysOfNumbers = Array.from(arguments);
  let combined = arrayOfArraysOfNumbers.reduce((acc, el) => acc.concat(el));
  let set = new Set(combined);
  let answer = Array.from(set).sort();
  return answer
}

console.log(mergeNArrays([ 1, 3, 4, 5 ], [ 2, 4, 6, 8 ]));

