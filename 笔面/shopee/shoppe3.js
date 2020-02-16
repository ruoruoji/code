
// function isPalindrome (str) {
//     var half = str.length / 2
//     var i = 0 
//     var j = 0
//     if (str.length % 2) {
//         i = j = Math.ceil(half)
//     } else {
//         i = half - 1
//         j = half
//     }
//     while (i >= 0 || j <= str.length - 1) {
//         if (str[i] !== str[j]) return false
//         i--
//         j++
//     }
//     return true
// }
// part 1
// 最长回文子串， 不正确解法，60%成功率，假设最大子串以中心展开
// function longestPalindrome (str) {
//     // write code here
//     var len = str.length
//     var half = len / 2
//     var i = 0 
//     var j = 0
//     var res = ''
//     if (len % 2) {
//         i = j = Math.floor(half)
//         res = str[i]
//         i--
//         j++
//     } else {
//         i = half - 1
//         j = half
//     }
//     while (i >= 0 || j <= len - 1) {
//         if (str[i] === str[j]) {
//             res = str[i] + res + str[j]
//         } else {
//             return res 
//         }
//         i--
//         j++
//     }
//     return res
// }

// part 2，二维数组记录起始和结束地址
// var longestPalindrome = function(s) {
//     const len = s.length
//     if (len <= 1) return s
    
//     const pd = []
//     let maxLen = 1
//     let storeIndex = [0, 0]
//     let res = ''
//     for (let i = 0; i < len; i++) {
//         pd[i] = new Array(len).fill(0)
//         pd[i][i] = 1
//         if (s[i] === s[i + 1]) {
//             pd[i][i + 1] = 2
//             if (maxLen < 2) {
//                 maxLen = 2
//                 storeIndex = [i, i + 1]
//             }
            
//         }
//     }

//     for (let j = 2; j < len; j++) {
//         for (let i = 0; i <= j; i++) {
//             if (i + 1 < len && pd[i + 1][j - 1] !== 0 && s[i] === s[j]) {
//                 const calc = j - i + 1
//                 pd[i][j] = calc
//                 if (maxLen < calc) {
//                     maxLen = calc
//                     storeIndex = [i, j]
//                 }
//             }
//         }
//     }
    
//     for (let index = storeIndex[0]; index <= storeIndex[1]; index++) {
//         res += s[index]
//     }
//     return res
// };


// part 3，part 2的第一步优化
var longestPalindrome = function(s) {
    const len = s.length
    if (len <= 1) return s
    
    const pd = []
    let maxLen = 0
    let startIndex = 0
    let res = ''
    for (let i = 0; i < len; i++) {
        pd[i] = new Array(len).fill(false)
    }
    for (let j = 0; j < len; j++) {
        for (let i = 0; i <= j; i++) {
            let calc = j - i + 1
            if (s[i] === s[j]) {
                if (calc <= 2) {
                    pd[i][j] = true
                } else if (pd[i + 1][j - 1]) {
                    pd[i][j] = true
                }
            }
            if (pd[i][j] && calc > maxLen) {
                maxLen = calc
                startIndex = i
            }
        }
    }
    // debugger
    for (let index = 0; index < maxLen; index++) {
        res += s[index + startIndex]
    }
    return res
};
console.log(longestPalindrome("aabad"))
// console.log(longestPalindrome("cbbd"))

// 01234567
//  1234567
//   234567
//    34567
//     4567
//      567
//       67
//        7