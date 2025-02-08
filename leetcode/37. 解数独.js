/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function (board) {
  const rows = new Array(9).fill(0).map(() => new Array(9).fill(false));
  const cols = new Array(9).fill(0).map(() => new Array(9).fill(false));
  const boxes = new Array(9).fill(0).map(() => new Array(9).fill(false));
  const empty = [];
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] === ".") {
        empty.push([i, j]);
      } else {
        const num = board[i][j] - 1;
        rows[i][num] = true;
        cols[j][num] = true;
        boxes[Math.floor(i / 3) * 3 + Math.floor(j / 3)][num] = true;
      }
    }
  }
  const dfs = (index) => {
    if (index === empty.length) {
      return true;
    }
    const [i, j] = empty[index];
    for (let num = 0; num < 9; num++) {
      if (
        !rows[i][num] &&
        !cols[j][num] &&
        !boxes[Math.floor(i / 3) * 3 + Math.floor(j / 3)][num]
      ) {
        board[i][j] = String(num + 1);
        rows[i][num] = true;
        cols[j][num] = true;
        boxes[Math.floor(i / 3) * 3 + Math.floor(j / 3)][num] = true;
        if (dfs(index + 1)) {
          return true;
        }
        board[i][j] = ".";
        rows[i][num] = false;
        cols[j][num] = false;
        boxes[Math.floor(i / 3) * 3 + Math.floor(j / 3)][num] = false;
      }
    }
    return false;
  };
  dfs(0);
};
