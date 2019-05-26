// var romanToInt = function(s) {
//     var sum = 0 
//     for (let i in s) {
//         switch (s[i]){
//             case 0:
//                 break
//             case 'I': 
//                 if (s[+i + 1] === "V" || s[+i + 1] == 'X') {
//                     sum -= 1
//                 } else {
//                     sum += 1
//                 }
//                 break
//             case 'V':
//                 sum += 5
//                 break
//             case 'X':
//                 if (s[+i + 1] === "L" || s[+i + 1] == 'C') {
//                     sum -= 10
//                 } else {
//                     sum += 10
//                 }
//                 break
//             case 'L':
//                 sum += 50
//                 break
//             case 'C':
//                 if (s[+i + 1] === "D" || s[+i + 1] == 'M') {
//                     sum -= 100
//                 } else {
//                     sum += 100
//                 }
//                 break
//             case 'D':
//                 sum += 500
//                 break
//             case 'M':
//                 sum += 1000
//                 break
//             default:
//                 break
//         }          
//     }
//     return sum 
// };

var romanToInt = function(s) {
    const ROMAN_NUMERALS = {
        'I' : 1,
        'V' : 5,
        'X' : 10,
        'L' : 50,
        'C' : 100,
        'D' : 500,
        'M' : 1000,
    };
    let sum = 0;
    for(let i in s) {
        let current = ROMAN_NUMERALS[s[i]], next = ROMAN_NUMERALS[s[+i + 1]];
        console.log(current, next)
        if(next && current < next ) {
            sum -= current;
        }
		else {
            sum += current;
        }
    }
    return sum;
};

console.log(romanToInt("LVIII"))