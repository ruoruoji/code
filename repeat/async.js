function delay(time) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve()
        }, time)
    })
}

function repeat(func, times, time) {
    return async function() {
        for(let i = 0; i < times; i++) {
            func(...arguments)
            await delay(time)
        }
    }
}

const repeatFunc = repeat(console.log, 4, 1000)    
repeatFunc("hello", "nihao")
repeatFunc("world")  
