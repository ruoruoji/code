// var findLengthOfLCIS = function(nums) {              //空间复杂度高
//     var index = 0
//     var max = [0]
//     var pre = -1
//     for (let item of nums) {
//         if (item <= pre) 
//             index += 1
//         max[index] = max[index] ? max[index] + 1 : 1
//         pre = item
//     }
//     return max.sort((a, b) => b - a)[0]
// };

//----------------------------------------------------------------------------------------------------

var findLengthOfLCIS = function(nums) {
    var max = 0
    var total = 1
    var len = nums.length
    if (len < 2) return len
    for (let i = 1; i < len; i++) {
        if (nums[i] > nums[i - 1]) total++
        else {
            max = Math.max(max, total)
            total = 1
        }
    }
    return Math.max(max, total)
};
console.log(findLengthOfLCIS([2,2,2,2,2]))