// var rob = function(nums) {
//     var len = nums.length
//     if (!len) return 0
//     if (len === 1) return nums[1]
//     var dp = new Array(len)
//     dp[0] = nums[0]
//     dp[1] = Math.max(nums[1], nums[0])
//     for (var i = 2; i < len; i++) {
//         dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1])
//     } 
//     return dp[len - 1]
// };

//---------------------------------------------------------------------------------------------------
var rob = function(nums) {
    var len = nums.length
    var dp = [0, 0]
    var max
    for (var i = 0; i < len; i++) {
        max = Math.max(dp[1], dp[0] + nums[i])
        dp[0] = dp[1]
        dp[1] = max
    } 

    return dp[1]
};
console.log(rob([1,2,3,1]))
