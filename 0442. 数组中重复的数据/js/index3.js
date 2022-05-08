/**
 * timeComplexity: O(n)
 * spaceComplexity: O(1)
 * @param {number[]} nums
 * @return {number[]}
 */
 var findDuplicates = function(nums) {
    let res = []
    // 将所有nums[Math.abs(nums[i]) - 1]的值置为负数，如果已经成负数了，说明是重复值访问了同一个下标
    for(let i = 0;i < nums.length;i++) {
        if (nums[Math.abs(nums[i]) - 1] > 0) {
            nums[Math.abs(nums[i]) - 1] *= -1
        } else {
            res.push(Math.abs(nums[i]))
        }
    }
    // console.log(nums)
    return res
};
console.log(findDuplicates([4,3,2,7,8,2,3,1]))