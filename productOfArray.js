// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60

function productOfArray(array) {
  if (array.length < 1) {
      return 1;
  } else {
      return array[0] * productOfArray(array.slice(1));
  }
}