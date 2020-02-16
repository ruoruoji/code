export const compose = (fns) => {
    if (fns.length === 1) return fns[0]
    return (x) => fns.reverse().reduce((res, fn) => fn(res), x)
}

// const compose = (fnArr) => {
//     const arr = fnArr.reverse()
//     const first = arr.shift()
//     debugger
//     return (x) => arr.reduce((res, item) => item(res), first(x))
// }

// // const compose = (fns) => {
// //     if (fns.length === 1) return fns[0]
// //     return (x) => fns.reverse().reduce((res, fn) => fn(res), x)
// // }

// var toUpperCase = function(x) { return x.toUpperCase(); };
// var exclaim = function(x) { return x + '!'; };

// var shout = compose([exclaim, toUpperCase]);
// console.log(shout("send in the clowns"));