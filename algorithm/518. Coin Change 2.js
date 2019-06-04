var change = function(amount, coins) {               //值得推敲
    let dp = new Array(coins.length + 1)
    for (let i = 0; i <= coins.length; i++) {
        dp[i] = new Array(amount + 1).fill(0)
    }
    dp[0][0] = 1
    for (let i = 1; i <= coins.length; i++) {
        dp[i][0] = 1
        for (let j = 1; j <= amount; j++) {
            dp[i][j] = dp[i - 1][j] + ((j >= coins[i - 1]) ? dp[i][j - coins[i - 1]] : 0) 
        }
    }
    return dp[coins.length][amount]
};
console.log(change(0, [7]))

//------------------------------------------------------------------------------------------
var change = function(amount, coins) {          //按照方法一的思路，优化空间开销而来。跟障碍物robot类似
    let dp = new Array(amount + 1).fill(0)
    dp[0] = 1
    for (let i = 1; i <= coins.length; i++) {
        for (let j = 1; j <= amount; j++) {
            dp[j] += ((j >= coins[i - 1]) ? dp[j - coins[i - 1]] : 0) 
        }
    }
    return dp[amount]
};