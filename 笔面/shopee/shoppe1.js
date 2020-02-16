// const str = readline()
const isNum = i => /\d/.test(i)

const fn = str => {
    let res = ''
    for (let item of str) {
        if (isNum(item)) {
            res += item
        } else {
            res = ''
        }
        if (res.length === 3) return res
    }
    return false
}