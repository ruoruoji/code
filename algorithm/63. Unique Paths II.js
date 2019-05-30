var uniquePathsWithObstacles = function(obstacleGrid) {       //方法一： 自底向上，递推查询实现DP
    if (obstacleGrid[0][0] === 1) return 0
    var n = obstacleGrid.length
    var m = obstacleGrid[0].length
    var dp = JSON.parse(JSON.stringify(obstacleGrid))
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (i === 0) {
                if(dp[i][j - 1] === 0 || obstacleGrid[i][j] === 1) dp[i][j] = 0
                else dp[i][j] = 1
            } else {
                if (j === 0) {
                    if(dp[i - 1][j] === 0 || obstacleGrid[i][j] === 1) dp[i][j] = 0
                    else dp[i][j] = 1
                }
            }
        }
    }
    for (let i = 1; i < n; i++) {
        for (let j = 1; j < m; j++) {
            if (obstacleGrid[i][j] === 1) dp[i][j] = 0
            else dp[i][j] = dp[i - 1][j] + dp[i][j - 1] 
        }
    }
    return dp[n -1][m - 1]
};
console.log(uniquePathsWithObstacles([[0,1,0,0,0],[1,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]]))