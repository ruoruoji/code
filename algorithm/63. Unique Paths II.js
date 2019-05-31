// var uniquePathsWithObstacles = function(obstacleGrid) {       //方法一： 自底向上，递推查询实现DP
//     if (obstacleGrid[0][0] === 1) return 0                    //用二维数组模拟dp数组。！！！深拷贝要注意，并且此方法空间复杂度高                          
//     var n = obstacleGrid.length
//     var m = obstacleGrid[0].length
//     var dp = JSON.parse(JSON.stringify(obstacleGrid))
//     for (let i = 0; i < n; i++) {
//         for (let j = 0; j < m; j++) {
//             if (i === 0) {
//                 if(dp[i][j - 1] === 0 || obstacleGrid[i][j] === 1) dp[i][j] = 0
//                 else dp[i][j] = 1
//             } else {
//                 if (j === 0) {
//                     if(dp[i - 1][j] === 0 || obstacleGrid[i][j] === 1) dp[i][j] = 0
//                     else dp[i][j] = 1
//                 }
//             }
//         }
//     }
//     for (let i = 1; i < n; i++) {
//         for (let j = 1; j < m; j++) {
//             if (obstacleGrid[i][j] === 1) dp[i][j] = 0
//             else dp[i][j] = dp[i - 1][j] + dp[i][j - 1] 
//         }
//     }
//     return dp[n -1][m - 1]
// };

//----------------------------------------------------------------------------------------------------------------------

var uniquePathsWithObstacles = function(obstacleGrid) {       //方法二： 自底向上，递推查询实现DP
    if (obstacleGrid[0][0] === 1) return 0                    //用两个一维数组模拟dp数组。模仿uniquePaths的高效实现，但空间复杂度还是高
    var n = obstacleGrid.length
    var m = obstacleGrid[0].length
    var dp = []
    var row = []
    var col = []
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (i === 0) {
                if(row[j - 1] === 0 || obstacleGrid[i][j] === 1) row[j] = 0
                else row[j] = 1
            } else {
                if (j === 0) {
                    if(col[i - 1] === 0 || obstacleGrid[i][j] === 1) col[i] = 0
                    else col[i] = 1
                    break
                }
            }
        }
    }
    if (n === 1) return row[m - 1]
    if (m === 1) return col[n - 1]
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (obstacleGrid[j][i] === 1) dp[j] = 0
            else dp[j] = (typeof(dp[j]) === "undefined" ? col[j] : dp[j]) + (typeof(dp[j - 1]) === "undefined" ? row[i] : dp[j - 1])
        }
    }
    return dp[n -1]
};
console.log(uniquePathsWithObstacles([[0], [1]]))
