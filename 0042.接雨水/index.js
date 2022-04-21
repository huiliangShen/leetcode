/**
 * @param {number[]} height
 * @return {number}
 */
 var trap = function(height) {
    let sum = 0
    let max = 0
    for(let item of height) {
        if (item > max) {
            max = item
        }
    }
    
    for(let i = 1; i < max;i++) {
        let start = false, temp = 0
        for(let item of height) {
            if (start && item < i) {
                temp++
            }
            if (item >= i) {
                sum += temp
                temp = 0
                start = true
            }
        }
    }
    return sum
};

console.log(trap([4,2,0,3,2,5]))