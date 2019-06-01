//本质是斐波那契数列
// var climbStairs = function(n) {          //自顶向下的传统操作超时
//     if (n === 1) return 1
//     if (n === 2) return 2
//     return climbStairs(n -1) + climbStairs(n - 2)
// };

//------------------------------------------------------------------------------------------------------

// var fib = function(n, mem) {               //自顶向下查询参数优化
//     if (n === 1) return 1
//     if (n === 2) return 2
//     if (!mem[n]) mem[n] = fib(n - 1, mem) + fib(n - 2, mem)
//     return mem[n]
// } 
// var climbStairs = function(n) {
//     let mem = new Array(n)
//     let res = fib(n, mem)
//     return res
// };

//------------------------------------------------------------------------------------------------------

var climbStairs = function(n) {            //自底向上DP
    let mem = new Array(n)
    mem[1] = 1
    mem[2] = 2
    for (let i = 3; i <= n; i++) {
        mem[i] = mem[i - 1] + mem[i - 2]
    }
    return mem[n]
};