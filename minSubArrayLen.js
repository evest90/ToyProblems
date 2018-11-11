function minSubArrayLen(array, num) {
  let left = 0;
  let right = 0;
  let temp = 0;
  let minLen = Infinity;

  while (left < array.length) {
    if (temp < num && right < array.length) {
      temp += array[right];
      right++;
    } else if (temp >= num) {
      minLen = Math.min(minLen, right - left);
      temp -= array[left];
      left++;
    } else {
      break;
    }
  }
  return minLen === Infinity ? 0 : minLen;
}

console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10], 39));