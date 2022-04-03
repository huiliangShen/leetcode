// 方法暴力，能解题，但不符合要求
var findMedianSortedArrays = function(nums1, nums2) {
    const newArr = [...nums1, ...nums2].sort((a, b) => a - b)
    let mid1 = newArr.length % 2 === 0 ? newArr[newArr.length / 2 - 1] : newArr[(newArr.length - 1) / 2]
    let mid2 = newArr.length % 2 === 0 ? newArr[newArr.length / 2] : newArr[(newArr.length - 1) / 2]

    return (mid1 + mid2) / 2

};

console.log(findMedianSortedArrays([1,2], [3,4]))