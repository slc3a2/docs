/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
  let result,
    isNegative = false;

  if (dividend === 0) {
    return 0;
  }
  if (dividend === divisor) {
    return 1;
  }
  if (divisor < 0 && dividend < 0) {
    isNegative = false;
    divisor = Math.abs(divisor);
    dividend = Math.abs(dividend);
  } else {
    if (divisor < 0) {
      isNegative = true;
      divisor = Math.abs(divisor);
    }
    if (dividend < 0) {
      isNegative = true;
      dividend = Math.abs(dividend);
    }
  }

  if (divisor === 1) {
    if (dividend >= 2147483647 && isNegative === false) {
      return 2147483647;
    } else {
      return dividend * (isNegative ? -1 : 1);
    }
  }

  for (let i = 0, j = 0; i < dividend; i += divisor, j++) {
    if (i + divisor > dividend) {
      result = j;
    }
  }
  return result * (isNegative ? -1 : 1);
};

console.log(divide(10, 3));
console.log(divide(7, -3));
console.log(divide(-1, 1));
console.log(divide(-1, -2));
console.log(divide(2, 2));
console.log(divide(-2147483648, -1));
console.log(divide(-2147483648, 1));
