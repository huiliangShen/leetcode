var countKDifference = function(nums, k) {
    // let start = 0, next = 0, count = 0
    // while(start < nums.length) {
    //     next = start + 1

    //     while(next < nums.length) {
    //         if (Math.abs(nums[start] - nums[next]) === k) {
    //             count++
    //         }
    //         next++
    //     }

    //     start++
    // }
    // return count
    const map = new Map()
    let count = 0
    nums.forEach(num => {
        if (map.has(num)) {
            map.set(num, map.get(num) + 1)
        } else {
            map.set(num, 1)
        }
    })

    for(let [key, value] of map.entries()) {
        const d1 = key - k
        const d2 = k + key
        if (map.has(d1)) {
            count += value * map.get(d1)
            map.delete(key)
        }
        if (map.has(d2)) {
            count += value * map.get(d2)
            map.delete(key)
        }
    }
    return count
};

countKDifference([1,2,2,1], 1)


