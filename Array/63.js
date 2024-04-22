/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    if (obstacleGrid[0][0] === 1) {
        return 0;
    }

    let m = obstacleGrid.length;
    let n = obstacleGrid[0].length;

    let dp = new Array(m).fill(0).map(() => new Array(n).fill(0));

    dp[0][0] = 1;

    for (let j = 1; j < n; j++) {
        if (obstacleGrid[0][j] === 0 && dp[0][j - 1] !== 0) {
            dp[0][j] = dp[0][j - 1];
        }
    }

    for (let i = 1; i < m; i++) {
        if (obstacleGrid[i][0] === 0 && dp[i - 1][0] !== 0) {
            dp[i][0] = dp[i - 1][0];
        }
    }

    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (obstacleGrid[i][j] === 0) {
                dp[i][j] = (obstacleGrid[i - 1][j] === 0 ? dp[i - 1][j] : 0) + (obstacleGrid[i][j - 1] === 0 ? dp[i][j - 1] : 0);
            }
        }
    }

    return dp[m - 1][n - 1];
};