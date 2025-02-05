/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
  const m = obstacleGrid.length;
  const n = obstacleGrid[0].length;

  const dp = new Array(m).fill().map(() => new Array(n));

  if (obstacleGrid[0][0] === 1) {
    dp[0][0] = 0;
  } else {
    dp[0][0] = 1;
  }

  for (let i = 1; i < m; i++) {
    let r;
    if (dp[i - 1][0] === 0) {
      r = 0;
    } else {
      r = obstacleGrid[i][0] === 1 ? 0 : 1;
    }
    dp[i][0] = r;
  }

  for (let j = 1; j < n; j++) {
    let r;
    if (dp[0][j - 1] === 0) {
      r = 0;
    } else {
      r = obstacleGrid[0][j] === 1 ? 0 : 1;
    }
    dp[0][j] = r;
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = obstacleGrid[i][j] === 1 ? 0 : dp[i - 1][j] + dp[i][j - 1];
    }
  }
  return dp[m - 1][n - 1];
};

console.log(
  uniquePathsWithObstacles([
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 0],
  ])
);
