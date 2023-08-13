const repeatString = function (string, n) {
  let word = "";
  if (n < 0) {
    return "ERROR";
  }
  for (let i = 0; i < n; i++) {
    word += string;
  }
  return word;
};

// Do not edit below this line
module.exports = repeatString;
