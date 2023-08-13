const sumAll = function (firstNumber, secondNumber) {
  if (
    typeof firstNumber !== "number" ||
    typeof secondNumber !== "number" ||
    firstNumber < 0 ||
    secondNumber < 0
  ) {
    return "ERROR";
  }
  let sum = 0;
  if (firstNumber < secondNumber) {
    while (firstNumber <= secondNumber) {
      sum += firstNumber;
      firstNumber++;
    }
  } else if (firstNumber > secondNumber) {
    while (secondNumber <= firstNumber) {
      sum += secondNumber;
      secondNumber++;
    }
  } else {
    sum = firstNumber;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
