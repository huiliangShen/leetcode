var RandomizedSet = function() {
    this.map = new Map()
    this.nums = []
    this.count = 0
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if (this.map.has(val)) {
        return false
    }
    this.nums[this.count] = val
    this.map.set(val, this.count)
    this.count++
    return true
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    if (this.map.has(val)) {
        const index = this.map.get(val)
        this.map.delete(val)
        if (index !== this.count - 1) {
            this.map.set(this.nums[this.count - 1], index)
        }
        this.nums[index] = this.nums[--this.count]
        return true
    }
    return false
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    if (this.count <= 0) {
        return null
    }
    const random = Math.floor(Math.random() * (this.count))
    return this.nums[random]
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */