/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
 var findDifference = function(nums1, nums2) {
    const result1 = new Map(), result2 = new Map()
    for(let i = 0;i< nums1.length;i++) {
        if (result1.has(nums1[i])) {
            continue
        }
        const isExist = nums2.includes(nums1[i])
        !isExist && result1.set(nums1[i], nums1[i])
    }

    for(let i = 0;i< nums2.length;i++) {
        if (result2.has(nums2[i])) {
            continue
        }
        const isExist = nums1.includes(nums2[i])
        !isExist && result2.set(nums2[i], nums2[i])
    }
   
    const res = []
    res[0] = [...result1.values()]
    res[1] = [...result2.values()]

    return res
};

console.log(findDifference([1,2,3], [2,4,6]))