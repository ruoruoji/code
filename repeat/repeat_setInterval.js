// function repeat(func, times, wait) {        //方法一: 此方式不合适，共享一个i
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

// const repeatFunc = repeat(console.log, 4, 1000)    
// repeatFunc("hello")
// repeatFunc("world")  


//-------------------------------------------------------------------------------------------------

// function repeat(func, times, wait) {         //方法二: 此方式不合适，共享一个i,与方法一没差
//     return (function (func, times, wait) {
//         var i = 1
//         var timer
//         return function () {
//             timer = setInterval(() => {
//                 if(i++ > times) {
//                     clearInterval(timer)
//                     timer = null
//                     return
//                 }
//                 func(arguments[0])
//             }, wait)
//         }
//     }) (func, times, wait)
// }

// const repeatFunc = repeat(console.log, 4, 1000)    
// repeatFunc("hello")
// repeatFunc("world")  

//-------------------------------------------------------------------------------------------------

function repeat(func, times, wait) {  
    return function () {
        var i = 1
        var timer
        timer = setInterval(() => {
            if(i++ > times) {
                clearInterval(timer)
                timer = null
                return
            }
            func(arguments[0])
        }, wait)
    }
}

const repeatFunc = repeat(console.log, 4, 1000)    
repeatFunc("hello")
repeatFunc("word")




作者：offer-hunter
链接：https://www.nowcoder.com/discuss/155934
来源：牛客网

function repeat(func, times, wait) {
    function set(f) {
        let timer
        let count = 1
        let print = () => {
            timer = setTimeout(() => {
                func(f)
                if (count >= times) {
                    clearTimeout(timer)
                    return
                }
                print(f)
                count++
 
            }, wait)
        }
        print()
    }
 
    return set
}




























