var solveNQueens = function (n) {
  const map = [];
  const res = [];
  for (let i = 0; i < n; i++) {
    map.push([]);
    for (let j = 0; j < n; j++) {
      map[i][j] = 0;
    }
  }
  // console.log(map);

  const insert = (map, row = 0) => {
    if (row === map.length) {
      res.push(map.slice());
      return;
    }
    for (let col = 0, len = map.length; col < len; col++) {
      if (isSafe(map, row, col)) {
        map[row][col] = 1;
        insert(map, row + 1);
        map[row][col] = 0;
      }
    }
  };

  const isSafe = (list, row, col) => {
    const len = list.length;
    // 同一列
    for (let i = 0; i < len; i++) {
      if (list[i][col] === 1) return false;
    }
    // 斜右上方
    for (let i = row - 1, j = col + 1; i >= 0 && j < len; i--, j++) {
      if (list[i][j] === 1) return false;
    }
    // 斜左上方
    for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
      if (list[i][j] === 1) return false;
    }
    return true;
  };

  insert(map);
  return res;
};

console.log(solveNQueens(8));
