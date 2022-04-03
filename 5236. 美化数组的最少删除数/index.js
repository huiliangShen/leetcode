var minDeletion = function (nums) {
	let count = 0
	let i = 0
    while (i < nums.length) {
        if (i % 2 === 0 && i + 1 < nums.length && nums[i] === nums[i + 1]) {
            nums.splice(i + 1, 1)
            count++
        } else {
            i++
        }	
    }
    if (nums.length % 2 === 0) {
        return count
    } else {
        nums.pop()
        return count + 1
    }
}