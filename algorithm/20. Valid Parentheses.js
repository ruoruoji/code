// var isValid = function(s) {
//     let stack = []
//     let obj = {
//         ")" : "(",
//         "}" : "{",
//         "]" : "["
//     }
//     for (let item of s) {
//         if (item in obj) {
//             if (stack.pop() !== obj[item]) return false
//         } else {
//             stack.push(item)
//         }
//     }
//     if (stack.length) return false
//     return true
// };

var isValid = function(s) {        //效率低
    let reg = /\(\)|\{\}|\[\]/g
    while (s.match(reg)) {
        s = s.split("()").join("").split("{}").join("").split("[]").join("")
    }
    if (!s) return true
    return false
};
var s = "(]"
console.log(isValid(s))