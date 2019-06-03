var maxSubArray = function(nums) {
    var dp = nums.slice(0)
    var max = nums[nums.length - 1]
    for (let i = nums.length - 2; i >= 0; i--) {
        if (dp[i] < dp[i] + dp[i + 1]){
            dp[i] = dp[i] + dp[i + 1]
        }
        max = Math.max(max, dp[i])
    }
    return max
};
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))