/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var shiftGrid = function (grid, k) {
  const gridLen = grid[0].length;
  console.log(gridLen);
  const result = [],
    linear = grid.flat(1);
  let last = linear.slice(linear.length - k);

  for (let i = linear.length - 1; i >= 0; i--) {
    if (linear[i - k]) {
      linear[i] = linear[i - k];
    } else {
      linear[i] = last[last.length - 1];
      last.pop();
    }
  }

  const len = linear.length,
    n = gridLen;
  let maxTime = len % n === 0 ? len / n : Math.floor(len / n + 1);
  for (let i = 0; i < maxTime; i++) {
    let slice = linear.slice(i * n, i * n + n);
    result.push(slice);
  }
  console.log(linear, result);

  return result;
};

// shiftGrid(
//   [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//   ],
//   3
// );

shiftGrid([[1], [2], [3], [4], [7], [6], [5]], 23);
