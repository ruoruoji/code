const arr = [
    {
        a: 1,
        b: 10,
    },
    {
        a: 1,
        b: 0
    },
    {
        a: 0,
        b: 50
    }
]

arr.sort((a, b) => {
    if (a.a === b.a) {
        return a.b - b.b
    }
    return a.a - b.a
})