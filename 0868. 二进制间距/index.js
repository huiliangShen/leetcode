/**
 * @param {number} n
 * @return {number}
 */
 var binaryGap = function(n) {
    let max = 0
    for(let i = 31, j = -1;i >= 0;i--) {
        if ((n >> i) & 1 === 1) {
            if (j !== -1) {
                max = Math.max((j - i), max)
            }
            j = i
        }
    }
    return max
};