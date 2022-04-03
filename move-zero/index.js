var moveZeroes = function(nums) {
    for(let i = 0;i < nums.length;i++) {
        if (nums[i] === 0) {
            nums.splice(i, 1)
            nums.push(0)
        }
    }
    return nums
};

console.log(moveZeroes([2,1]))