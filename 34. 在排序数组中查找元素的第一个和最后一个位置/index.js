/**
 * middle
 * @param {*} nums 
 * @param {*} target 
 * @returns 
 */
function searchLeft (nums, target) {
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        // 防止溢出
        let middle = Math.floor((right - left) / 2) + left;
        if (nums[middle] >= target) {
            // 继续往左边找
            right = middle - 1;
        }else {
            // 继续往右边找
            left = middle + 1;
        }
    }
    // 考虑目标值不在数组中的两种情况
    if (left == nums.length || nums[left] != target) left = -1;
    return left;
}

console.log(searchLeft([0,1,3,3,3],3))