const backPack = function (m, A) {
    let dp = new Array(A.length + 1)
    for (let i = 0; i <= A.length; i++) {
        dp[i] = new Array(m + 1).fill(0)
    }
    console.log(dp)
    for (let i = 1; i <= A.length; i++) {
        for (let j = 1; j <= m; j++) {
            if (j >= A[i]) {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - A[i]] + A[i])
            }
        }
    }
    console.log(dp)
    return dp[A.length][m]
}
console.log(backPack(10, [3,4,8,5]))