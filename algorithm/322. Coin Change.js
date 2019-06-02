// var coinChange = function(coins, amount) {          //贪心算法并不嫩满足所以情况
//     coins.sort((a, b) => a - b)
//     let total = 0
//     let index = coins.length - 1
//     while (amount > 0 && index >= 0) {
//         if (amount >= coins[index]) {
//             total += Math.floor(amount / coins[index])
//             amount = amount % coins[index]
//         }
//         index -= 1
//     }
//     return amount === 0 ? total : -1
// };

//-----------------------------------------------------------------------------------------------------------

var coinChange = function(coins, amount) {
    let dp = new Array(amount + 1).fill(amount + 1)
    dp[0] = 0
    for (let i = 1;i <= amount; i++) {
        for (let j = 0; j < coins.length; j++) {
            if (i >= coins[j] && dp[i] > dp[i - coins[j]] + 1) {
                dp[i] = dp[i - coins[j]] + 1
            }
        }
        
    }
    return dp[amount] > amount ? -1 : dp[amount]
};
console.log(coinChange([186,419,83,408], 6249))