/**
 * timeComplexity: O(nlogn)
 * spaceComplexity: O(logn)
 * @param {number[]} arr
 * @return {number[][]}
 */
 var minimumAbsDifference = function(arr) {
    arr.sort((a, b) => a - b)
    let min = Number.MAX_VALUE, res = []
    for(let i = 1; i < arr.length; i++) {
        let delta = Math.abs(arr[i] - arr[i - 1])
        if (delta < min) {
            min = delta
            res = [[arr[i - 1], arr[i]]]
        } else if (delta === min) {
            res.push([arr[i - 1], arr[i]])
        } else {
            continue
        }
    }
    return res
};