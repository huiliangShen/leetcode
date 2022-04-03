/**
 * Created by shl on 2019/4/19.
 */
/**
 * Time O(n^2)
 * */
const twoSum = function(nums, target) {
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i,  j];
            }
        }
    }
};


twoSum([1, 7, 15, 30], 8);