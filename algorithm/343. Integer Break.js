var integerBreak = function(n) {                            //DP解法，还有更高效的规律解法暂且不深究
    if (n === 2 ) return 1
    if (n === 3) return 2
    let dp = new Array(n + 1).fill(0)
    dp[1] = 1
    dp[2] = 2
    dp[3] = 3
    for (let i = 4; i <= n; i++) {
        for (let j = 1; j <= Math.floor(i / 2); j++) {
            dp[i] = Math.max(dp[i], dp[j] * dp[i - j])
        }
    }
    return dp[n]
};
console.log(integerBreak(10))