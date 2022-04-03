var sortJumbled = function(mapping, nums) {
    const map = new Map()
    const exist = new Map()
    for(let i = 0; i< nums.length;i++) {
        let mapNum
        if (exist.has(nums[i])) {
            mapNum = exist.get(nums[i])
        } else {
            mapNum = mappingFn(mapping, nums[i])
            exist.set(nums[i], mapNum)
        }
       
        if (!map.has(mapNum)) {
            map.set(mapNum, [nums[i]])
        } else {
            let _nums = map.get(mapNum)
            _nums.push(nums[i])
            map.set(mapNum, _nums)
        }
    }
    const keys = [...map.keys()]
    // console.log(keys)
    keys.sort((a, b) => a - b)
    // console.log(map.entries())
    let result = []

    keys.forEach(key => {
        const value = map.get(key)
        result = [...result, ...value]
    })
    return result
};

function mappingFn(map, num) {
    let result = 0  // _local = num.toString().split('').map(e => +e)
    if (num === 0) {
        return map[num]
    }
    let i = 0
    while(num != 0) {
        let mod = num % 10
        result = map[mod] * (i === 0 ? 1 : Math.pow(i, 10)) + result 
        num = Math.floor(num / 10)
        i++
    }
    // _local.forEach(l => {
    //     result.push(map[l])
    // })
    return result
}

console.log(sortJumbled([8,9,4,0,2,1,3,5,7,6], [991,338,38]))