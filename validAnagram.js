// Given two strings, write a function to determine if the second string is an anagram of the first.
// An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema,
// formed by iceman. 

function validAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  const obj1 = {};
  const obj2 = {};
  for (let char of str1) {
    obj1[char] = ++obj1[char] || 1;
  }
  for (let char of str2) {
    obj2[char] = ++obj2[char] || 1;
  }
  console.log('obj1', obj1);
  console.log('obj2', obj2)
  for (let char of str1) {
    if (obj1[char] !== obj2[char]) {
      return false;
    }
  }
  return true;
}