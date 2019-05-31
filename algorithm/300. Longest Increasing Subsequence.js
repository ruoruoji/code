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
                                                    
                                                          //方法二   O(n*logn)Time
