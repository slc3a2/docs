/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function (arr) {
  let sortArr = arr.sort((a, b) => {
    return a - b;
  });

  const result = [];
  let min = Infinity;

  for (let i = 0, len = sortArr.length; i < len; i++) {
    if (Math.abs(sortArr[i] - sortArr[i + 1]) < min) {
      min = Math.abs(sortArr[i] - sortArr[i + 1]);
    }
  }

  for (let i = 0, len = sortArr.length; i < len; i++) {
    if (Math.abs(sortArr[i] - sortArr[i + 1]) === min) {
      result.push([sortArr[i], sortArr[i + 1]]);
    }
  }
  // console.log(sortArr, min, result);
  return result;
};

minimumAbsDifference([4, 2, 1, 3]);
