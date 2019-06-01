// var maxProfit = function(prices) {            //方法一：效仿LIS的O(n^2)Time，不高效
//     const len = prices.length
//     let dp = new Array(len).fill(0)
//     let max = 0
//     for (let i = 0; i < len; i++) {
//         for (let j = 0; j < i; j++) {
//             if (prices[i] > prices[j]) {
//                 if (dp[i] < prices[i] - prices[j]) {
//                     dp[i] = dp[j] + prices[i] - prices[j]
//                 }
//             }
//         }
//         max = Math.max(max, dp[i])
//     }
//     return max
// };

//-------------------------------------------------------------------------------------------------------------

var maxProfit = function(prices) {     //抽象出来的O(N)Time, 与机器人障碍那题类似
    const len = prices.length
    var minValue = prices[0]
    var maxPro = 0
    for (let i = 1; i < len; i++) {
        if (prices[i] > minValue) {
            maxPro = Math.max(prices[i] - minValue, maxPro)
        } else if (prices[i] < minValue) {
            minValue = prices[i]
        }
    }
    return maxPro
};
console.log(maxProfit([7,6,4,3,1]))