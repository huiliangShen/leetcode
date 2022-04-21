/**
 * 三数之和原理
 * 定义双指针left, right
 * [-2, 0, 1, 2, -1, -4]
 * 0.首先排序数组
 * 1.定义i为固定数，left = i + 1, right = len - 1
 * 2.在left < right返回内不断缩小范围判断i + left + right是否等于0
 * 3.如果等于0，则返回[i, left, right] 并判断left === left + 1 || right === right - 1,过滤掉重复值
 * 4.如果大于0说明right过大，缩小right；若果小于0说明left过小，增大left
 * 5.i++ 并重复1-5步骤，判断固定数当前位是否和前一位相同，相同则i++
 * @param {number[]} nums
 * @return {number[][]}
 */
 var threeSum = function (nums) {
	if (nums.length < 3) {
		return []
	}
	let result = []
	nums.sort((a, b) => a - b)
	if (nums[nums.legth - 1] < 0) {
		return []
	} else if (nums[0] > 0) {
		return []
	}
	let i = 0
	while (i < nums.length - 2) {
        while(i > 0 && nums[i] === nums[i - 1]) {
            i++
        }
        
        let l = i + 1, r = nums.length - 1

		while(l < r) {
            const target = nums[l] + nums[r]
            if (target + nums[i] === 0) {
                result.push([nums[i], nums[l], nums[r]])
                // 去除重复值
                while(l < r && nums[l] === nums[l + 1]) {
                    l++
                }
                while(l < r && nums[r] === nums[r - 1]) {
                    r--
                }
                l++
                r--
            } else if (target + nums[i] < 0) {
                l++
            } else {
                r--
            }
        }
        i++
	}
	return result
}