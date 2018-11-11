function averagePair(array, target){
  let left = 0;
  let right = array.length - 1;
  while (left < right) {
    let average = (array[left] + array[right])/2;
    if (average === target) {
      return true;
    } else if (average > target) {
      right--;
    } else {
      left++;
    }
  }
  return false;
}

console.log(averagePair([1,3,3,5,6,7,10,12,19], 8));