// for(var i = 1; i <= 5; i++){             //不能正确打印
//     setTimeout(() => {
//         console.log(i);
//     }, i * 1000)   
// }

// for(let i = 1; i <= 5; i++){
//     setTimeout(() => {
//         console.log(i)
//     }, i * 1000)   
// }
//----------------------------------------- //方法二、三同理
// for(var i = 1; i <= 5; i++){
//     let j = i
//     setTimeout(() => {
//         console.log(j)
//     }, i * 1000)   
// }

// for(var i = 1; i <= 5; i++){          
//     (function (j) {
//         setTimeout(() => {
//             console.log(j)
//         }, i * 1000)  
//     })(i)
// }

// for(var i = 1; i <= 5; i++){             //setTimeout第三个参数
//     setTimeout((j) => {
//         console.log(j)
//     }, i * 1000, i)  
// }


//用promise和async实现每间隔1s,2s,3s...打印i 
//不同于以上相当于每隔一s打印一个，本实例打印i数字后再隔i秒打印i+1
function delay(time) {              
    return new Promise(resolve => {
        setTimeout(()=> {
            console.log(time)
            resolve()
        }, time * 1000)
    })
}
async function f() {
    for(var i = 1; i <= 5; i++) {
        await delay(i)
    }
} 
console.log("yes")
f()