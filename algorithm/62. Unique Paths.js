// var f = function(m, n, mem) {       //方法一： 自顶向下，递归 + 存储查询实现DP
//     if (m < 1 || n < 1) {           //var mem = new Array(m + 1).fill([])填入一个对象，导致变一个都变
//         return 1
//     } else if (m <  2){
//         return 1
//     } else if (n <  2){
//         return 1
//     } else {
//         if(!mem[m][n]) mem[m][n] = f(m - 1, n, mem) + f(m, n - 1, mem)
//         return mem[m][n]
//     }         
// }
// var uniquePaths = function(m, n) {
//     var mem = new Array(m + 1)
//     for (let i = 0; i < m + 1; i++) {
//         mem[i] = []
//     }
//     return f(m, n, mem)
// };
// console.log(uniquePaths(3, 3))

//-------------------------------------------------------------------------------------------------

// var uniquePaths = function(m, n) {         //方法一： 自底向上，递推查询实现DP
//     var dp = new Array(n)
//     for (let i = 0; i < n; i++) {
//         if (i === 0) dp[i] = new Array(m).fill(1)
//         else {
//             dp[i] = new Array(m)
//             dp[i][0] = 1
//         }
//     }
//     for (let i = 1; i < n; i++) {
//         for (let j = 1; j < m; j++) {
//             dp[i][j] = dp[i - 1][j] + dp[i][j - 1]    
//         }
//     }
//     return dp[n -1][m - 1]
// };
// console.log(uniquePaths(3, 2))

//-------------------------------------------------------------------------------------------------

var uniquePaths = function(m, n) {    //精妙，值得推敲
    if (m === 1 || n === 1) return 1;
  
    var arr = [];
    var i, j;
  
    for (i = 1; i < m; i++) {
      for (j = 1; j < n; j++) {
        arr[j] = (arr[j] || 1) + (arr[j - 1] || 1);
      }
    }
  
    return arr[n - 1];
  };