var lastStoneWeight = function(stones) {
    while (stones.length > 1) {
        stones.sort((a, b) => b - a)
        var temp = stones[0] - stones[1]
        stones.splice(0, 2)
        stones.push(temp)
    }
    return stones[0]
};

console.log(lastStoneWeight([1, 3]))