/**
 * Created by shl on 2019/4/19.
 */

/**
 *  Time O(n)
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * */
const twoSum = function(nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        let element = target - nums[i];
        if (map.has(element)) {
            return [map.get(element), i];
        }
        map.set(nums[i], i);
    }
};

twoSum([1, 7, 15, 30], 8);