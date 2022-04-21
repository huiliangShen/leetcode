var permute = function(nums) {
    let res = []
    let used = [], local = []

    backTrack(nums, local, used)

    return res

    function backTrack(nums, local, used) {
        if (nums.length === local.length) {
            console.log('11', local)
            res.push([...local])
            return 
        }
        for(let i = 0;i < nums.length;i++) {
            if (used[i]) {
                continue
            }
            used[i] = true
            local.push(nums[i])
            backTrack(nums, local, used)
            used[i] = false
            local.pop()
        }
    }
};

console.log(permute([1,2,3]))