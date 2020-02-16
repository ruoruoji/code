// const util = (str1, str2, flag) => {
//     str1 = typeof str1 === 'undefined' ? 0 : str1
//     str2 = typeof str2 === 'undefined' ? 0 : str2
//     const res = Number(str1) + Number(str2) + flag
//     if (res >= 10) return [1, res - 10]
//     return [0, res]
// } 
// function add (a, b) {
//     // write code here
//     let flag = 0
//     let result = ''
//     let res = ''
//     let len1 = a.length - 1
//     let len2 = b.length - 1 
//     while (len1 >= 0 || len2 >= 0) {
//         [flag, res] = util(a.len1, b.len2, flag)
//         result = res + result
//     }
//     if (flag) result = 1 + result
    
//     return result
// }

function util (a, b, flag) {
    var str1 = typeof a === 'undefined' ? 0 : Number(a)
    var str2 = typeof b === 'undefined' ? 0 : Number(b)
    var res = str1 + str2 + flag
    if (res >= 10) return [1, res - 10]
    return [0, res]
} 
// 大数相加, 80%通过率
function add (a, b) {
    // write code here
    var flag = 0
    var result = ''
    var res = ''
    var len1 = a.length - 1
    var len2 = b.length - 1
    var isNum = num => /^(\d)*$/.test(num)
    if (!isNum(a) || !isNum(b)) return 'NaN'
    while (len1 >= 0 || len2 >= 0) {
        [flag, res] = util(a[len1], b[len2], flag)
        result = res + result
        len1--
        len2--
    }
    if (flag) result = 1 + result
    
    return result
}

console.log(add("1234567890123456789093232848777","100000000"))
console.log(add("null","100000000"))
