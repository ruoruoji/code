// function repeat(func, times, wait) {  
//     var i = 1
//     var timer
//     return function () {
//         timer = setInterval(() => {
//             if(i++ > times) {
//                 clearInterval(timer)
//                 timer = null
//                 return
//             }
//             func(arguments[0])
//         }, wait)
//     }
// }

// // const repeatFunc = repeat(console.log, 4, 1000)    //此方式不合适，共享一个i
// // repeatFunc("hello")
// // repeatFunc("world")  


//-------------------------------------------------------------------------------------------------

function repeat(func, times, wait) {     
    return (function (func, times, wait) {
        var i = 1
        var timer
        return function () {
            timer = setInterval(() => {
                if(i++ > times) {
                    clearInterval(timer)
                    timer = null
                    return
                }
                func(arguments[0])
            }, wait)
        }
    }) (func, times, wait)
}

const repeatFunc = repeat(console.log, 4, 1000)    //此方式仍不合适，共享一个i
repeatFunc("hello")
repeatFunc("world")  
