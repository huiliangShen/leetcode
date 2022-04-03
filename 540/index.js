// var singleNonDuplicate = function(nums) {
//     // O(n)
//     // let map = new Map()
//     // for(let i=0;i<nums.length;i++) {
//     //     if (map.has(nums[i])) {
//     //         map.delete(nums[i])
//     //     } else {
//     //         map.set(nums[i], nums[i])
//     //     }
//     // }
//     // return [...map.values()][0]
    
//     let i = 0, j = 1
//     while(i < nums.length) {
//         if (j >= nums.length || nums[i] !== nums[j]) {
//             return nums[i]
//         }
//         i += 2
//         j += 2
//     }
// };

var singleNonDuplicate = function(nums) {
    let n = nums.length
    let s = 0, e = n - 1
    while(s < e) {
        const mid = s + e >> 1
        // [1,2,2,3,3]
        if (mid % 2 === 0) {
            if (mid + 1 < n && nums[mid] === nums[mid + 1]) {
                s = mid + 1
            } else {
                e = mid
            }
        } else {
            if (mid - 1 >= 0 && nums[mid] === nums[mid - 1]){
                s = mid + 1
            } else {
                e = mid
            }
        }
    }
    return nums[e]
};

console.log(singleNonDuplicate([1]))