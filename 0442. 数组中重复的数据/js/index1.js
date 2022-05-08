/**
 * timeComplexity: O(n)
 * spaceComplexity: O(1)
 * @param {number[]} nums
 * @return {number[]}
 */
 var findDuplicates = function(nums) {
    let res = []
    // 原地数组 i === nums[i] - 1
    for(let i = 0;i < nums.length;i++) {
        let target = nums[i]
        // 要么是被push过的变成了负数，要么正好放在下标位置
        if (target < 0 || target - 1 === i)  {
            continue
        }
        if (target === nums[target - 1]) {
            res.push(target)
            nums[i] *= -1
        } else {
            // 交换位置实现下标等 target - 1
            let tmp = nums[target - 1]
            nums[target - 1] = target
            nums[i] = tmp
            i--
        }
    }
    return res
};
console.log(findDuplicates([4,3,2,7,8,2,3,1]))