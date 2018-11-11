function maxSubarraySum(array, num){
  if (num > array.length) {
      return null;
  }
  let max = 0;
  let temp = 0;
  for (let i = 0; i < num; i++) {
    max += array[i];
  }
  temp = max;
  for (let i = num; i < array.length; i++) {
    temp = temp - array[i - num] + array[i];
    max = Math.max(max, temp);
  }
  return max;
}

console.log(maxSubarraySum([-3,4,0,-2,6,-1], 2))