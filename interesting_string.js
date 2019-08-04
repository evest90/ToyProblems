// Given a string s consisting of digits 0-9 and lowercase English letters a-z.

// A string is interesting if you can split it into several substrings, 
// such that each substring starts with a number and this number represents the number of characters after it. 
// Retrun true if string s is intersting, otherwise false.

// Example 1:

// Input: "4g12y6hunter"
// Output: true
// Explanation: We can split it into "4g12y" and "6hunter".
// Example 2:

// Input: "124gray6hunter"
// Output: true
// Explanation: We can divide it into "12", "4gray", "6hunter".
// Example 3:

// Input: "31ba2a"
// Output: false



let interestingString = string => {
  const subStrings = [];

  for (let i = 0; i < string.length; i++) {
    let current = string[i];
    if (!isNaN(parseFloat(current)) && (string.length - i - 1) >= parseFloat(current)) {
      subStrings.push(string.slice(i, i + parseFloat(current) + 1))
    }
  }

  let result = [subStrings[0]];
  for (let i = 1; i < subStrings.length; i++) {
    let current = subStrings[i];
    result.push(current);
    let temp = result.join('');
    if (string.includes(temp) && temp.length === string.length) {
      return true;
    } else if (!string.includes(temp)) {
      result.pop();
    }
  }
  return false;
}

interestingString("31ba2a")