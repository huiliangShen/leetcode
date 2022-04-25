/**
 * 哈希表
 * timeComplexity: O(n)
 * spaceComplexity: O(n)
 * @param {number[]} nums
 */
 var Solution = function(nums) {
    this.map = new Map()
    nums.forEach((e, i) => {
        let res = this.map.get(e) || []
        res.push(i)
        this.map.set(e, res)
    })
};

/** 
 * @param {number} target
 * @return {number}
 */
Solution.prototype.pick = function(target) {
    const result = this.map.get(target)
    const len = result.length
    if (len === 1) {
        return result[0]
    } else {
        return result[Math.floor(Math.random() * len)]
    }
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.pick(target)
 */