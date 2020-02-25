// function curry(fn, args = []) {
//     return function() {
//         args = [...args, ...arguments];  
//         debugger
//         if(args.length < fn.length) {
//             return curry.call(this, fn, args);  //call和apply的区别 
//         } else {
//             return fn.apply(this, args);
//         }
//     }
// }

// function sum(a,b,c) {
//     return a + b + c;
// }
// var f = curry(sum)
// console.log(f(1)(2,3))
// console.log(f(1)(2)(3))  
// // 这样执行会报错是因为第一个f(1)执行时候使f函数的args变成了[1]，导致第二个中参数多了一个


// 正解
function curry(fn, args = []) {
    return function() {
        let _args = [...args, ...arguments];  
        if(_args.length < fn.length) {
            return curry.call(this, fn, _args);  //call和apply的区别 
        } else {
            return fn.apply(this, _args);
        }
    }
}

function sum(a,b,c) {
    return a + b + c;
}
var f = curry(sum)
console.log(f(1)(2,3))
console.log(f(1)(2)(3))  