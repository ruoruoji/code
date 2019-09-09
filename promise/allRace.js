Promise.allRace = (promises) => {
    return new Promise((resolve, reject) => {
        const len = promises.length
        if (!len) return reject('request error')
        const done = (() => {
            let i = 0
            let res = []
            return (data) => {
                i++
                if (data) res = [...res, ...data]
                if (i === len) {
                    if (res.length) resolve(res)
                    else reject('network error')
                }
            }
        })()
        promises.forEach(promise => {
            promise.then(res => done(res)).catch(() => done(null))
        });
    })
}

const a = new Promise((resolve) => setTimeout(() => resolve([1, 2]), 3000))
const b = new Promise((resolve) => setTimeout(() => resolve([3, 4]), 2000))
console.log(Promise.allRace([a, b]).then(res => console.log(res), e => console.log(e)))