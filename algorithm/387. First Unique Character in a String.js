var firstUniqChar = function(s) {
    const len = s.length
    let map = new Map()
    for (let i = 0; i < len; i++) {
        let temp = map.get(s[i])
        map.set(s[i], temp ? temp + 1 : 1)
    }
    for (let item of map) {
        if (item[1] === 1) return s.indexOf(item[0])
    }
    return -1
};
