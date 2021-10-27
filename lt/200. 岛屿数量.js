// 200. 岛屿数量 dfs  ✅
// /**
//  * @param {character[][]} grid
//  * @return {number}
//  */
 var numIslands = function(grid) {
  let count = 0;
  let len = grid.length;
  for(let i = 0; i < len; i++) {
    let len = grid[i].length;
    for(let j = 0; j < len; j++) {
      if(grid[i][j] === '1') {
        count++;
        sinking(i, j);
      }
    }
  }
  // 沉岛，1 => 0，防止重复统计
  function sinking(i, j) {
    if(i < 0 || j < 0 || i >= grid.length || j >= grid[i].length || grid[i][j] === '0') {
      return;
    }
    grid[i][j] = '0';
    // 遍历四个方向
    sinking(i, j + 1) // 右
    sinking(i, j - 1) // 左
    sinking(i + 1, j) // 下
    sinking(i - 1, j) // 上
  }
  return count;
};

let grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]

numIslands(grid);

