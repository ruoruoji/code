// var backPack = function (m, A) {                         //二维数据空间可优化
//     let dp = new Array(A.length)
//     for (let i = 0; i < A.length; i++) {
//         dp[i] = new Array(m + 1).fill(0)
//     }
//     for (let i = 0; i <= m; i++) {
//         if (i >= A[0]) dp[0][i] = A[0]
//     }
//     for (let i = 1; i < A.length; i++) {
        
//         for (let j = 1; j <= m; j++) {
//             if (j >= A[i]) {
//                 dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - A[i]] + A[i])
//             } else {
//                 dp[i][j] = dp[i - 1][j]
//             }
//         }
//     }
//     for (let item of dp) {console.log(item)}
//     return dp[A.length - 1][m]
// }

//---------------------------------------------------------------------------------------------------------

var backPack = function (m, A) {                         //优化后，避免影响从大到小
    let dp = new Array(m + 1).fill(0)
    for (let i = 0; i <= m; i++) {
        if (i >= A[0]) dp[i] = A[0]
    }
    for (let i = 1; i < A.length; i++) {
        
        for (let j = m; j >= 1; j--) {
            if (j >= A[i]) {
                dp[j] = Math.max(dp[j], dp[j - A[i]] + A[i])
            }
        }
    }
    
    return dp[m]
}
console.log(backPack(90, [12,3,7,4,5,13,2,8,4,7,6,5,7]))