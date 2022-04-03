var halveArray = function(nums) {
    let total = getTotal(nums);
    nums.sort((a, b) => b - a);
    let i = 0, sum = total, count = 0;
    while(sum >  total / 2) {
        if (count === 0) {
            i = 0
        } else {
            i = findMax(nums)
        }
        
        let remain = nums[i] / 2
        nums[i] = remain
        sum -= remain
        
        count++
    }
    return count
};

function findMax(nums) {
    let i = 0, max = 0, index = 0;
    while(i < nums.length) {
        if (nums[i] > max) {
            max = nums[i]
            index = i
        }
        i++
    }
    return index
}

function getTotal(nums) {
    let sum = 0, i = 0;
    while(i < nums.length) {
        sum += nums[i++]
    }
    return sum
}

let nums = [1]
console.log(halveArray(nums))