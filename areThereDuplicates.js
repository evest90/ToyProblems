function areThereDuplicates() {
  let args = Array.from(arguments);
  const obj = {};
  for (let el of args) {
    obj[el] = ++obj[el] || 1;
  }
  for (let key in obj) {
    if (obj[key] > 1) {
      return true;
    }
  }
  return false;
}

console.log(areThereDuplicates(1,2,2))