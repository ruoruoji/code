// function repeat(func, times, wait) {        //方法一: 此方式不合适，共享一个i
//     var count = 1
//     var timer
//     return function _set(str) {
//         if(count++ > times) {
//             timer = null
//             return
//         }
//         timer = setTimeout(() => {
//             func(str)
//             _set(str)
//         }, wait)
//     }
// }

// const repeatFunc = repeat(console.log, 4, 1000)    
// repeatFunc("hello")
// repeatFunc("world")  


//-------------------------------------------------------------------------------------------------

function repeat(func, times, wait) {        
    return function (str) {
        var count = 1
        var timer
        (function f(str) {
            if(count++ > times) {
                timer = null
                return
            }
            timer = setTimeout(() => {
                func(str)
                f(str)
            }, wait)
        })(str)
    }
}

const repeatFunc = repeat(console.log, 4, 1000)    
repeatFunc("hello")
repeatFunc("world")    
