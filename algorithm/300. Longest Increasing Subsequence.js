// var lengthOfLIS = function(nums) {                    //方法一： O(n^2)Time and O(n)Space
//     var len = nums.length
//     if (!len) return 0
//     var dp = new Array(len).fill(1)
//     var max = 1
//     for (let i = 0; i < len; i++) {
//         for(let j = i - 1; j >= 0; j--) {
//             if (nums[i] > nums[j])  dp[i] = Math.max(dp[i], dp[j] + 1) 
//         }
//         max = Math.max(dp[i], max)
//     }
//     return max
// };

//------------------------------------------------------------------------------------------------------
                                                    
var lengthOfLIS = function(nums) {             //方法二   O(n*logn)Time  不太理解，仍需推敲
    if (!nums.length) return 0                 //二分查找优化。找到dp中第一个>=item的元素替换或push
    let dp = [nums[0]]
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > dp[dp.length - 1]) dp.push(nums[i])
        else {
            let left = 0, right = dp.length - 1
            while (left < right) {
                let mid = Math.floor((left + right) / 2)
                if (nums[i] > dp[mid]) left = mid + 1
                else right = mid
            }
            dp[left] = nums[i] 
        }
    }
    return dp.length
};
console.log(lengthOfLIS([10,9,2,5,3,7,101,18]))