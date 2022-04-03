var minimalKSum = function(nums, k) {
    nums.sort((a, b) => a - b)
    let res = 0
    for(let i = 0;i<nums.length;i++) {
        let start = i === 0 ? 0 : nums[i - 1]
        let end = nums[i]
        start += 1
        while (start < end && k > 0) {
            res += start
            k--
            start++
        }
    }
    if(k > 0) {
       let last = nums[nums.length - 1] + 1
       while(k > 0) {
        res += last
        k--
        last++
       }
    }
    return res
};
let nums = [1]
let k = 100000000
// let k = 1000000000n
console.log(minimalKSum(nums, k))