/**
 * 蓄水池抽样算法
 * timeComplexity: O(n)
 * spaceComplexity: O(1)
 * @param {number[]} nums
 */
 var Solution = function(nums) {
    this.nums = nums
};

/** 
 * @param {number} target
 * @return {number}
 */
Solution.prototype.pick = function(target) {
    let ans = 0
    for(let i = 0, count=0;i<this.nums.length;i++) {
        if (this.nums[i] === target) {
            count++
            if (Math.floor(Math.random() * count) === 0)
                ans = i
        }
    } 
    return ans
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.pick(target)
 */