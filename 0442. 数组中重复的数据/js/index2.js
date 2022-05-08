/**
 * timeComplexity: O(n)
 * spaceComplexity: O(n)
 * @param {number[]} nums
 * @return {number[]}
 */
 var findDuplicates = function(nums) {
    let res = []
    let map = new Map()
   
    for(let i = 0;i < nums.length;i++) {
        let target = nums[i]
        if (map.has(target)) {
            res.push(target)
        }
        map.set(target, target)
    }
    // console.log(nums)
    return res
};
console.log(findDuplicates([4,3,2,7,8,2,3,1]))
