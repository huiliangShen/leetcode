var mostFrequent = function(nums, key) {
    const map = new Map()
    for(let i = 0; i< nums.length - 1;i++) {
        if (nums[i] === key) {
            map.set(nums[i+1], (map.get(nums[i+1]) || 0) + 1)
        }
    }
    let max = 0, result
    for(let [key, value] of map.entries()) {
        if (max < value) {
            max = value
            result = key
        }
    }
    return result
};

console.log(mostFrequent([2,2,2,2,3], 2))