var findNumberOfLIS = function(nums) {
    var len = nums.length
    var dp = new Array(len).fill(1)
    var count = new Array(len).fill(1)
    var max = 0
    var res = 0
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                if (dp[i] < dp[j] + 1) {
                    dp[i] = dp[j] + 1
                    count[i] = count[j]
                } else if (dp[i] === dp[j] + 1) {
                    count[i] += count[j]
                }
            }
        }
        max = Math.max(max, dp[i])
    }
    for (let i = 0; i < len; i++) {
        if (dp[i] === max) res += count[i]
    }
    return res
};
console.log(findNumberOfLIS(
    [1,1,1,2,2,2,3,3,3]))