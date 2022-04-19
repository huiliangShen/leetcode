/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
 var shortestToChar = function(s, c) {
    // 思路
    // scan left to right, if c is found, update the min distance
    // scan right to left, if c is found, update the min distance 
    let length = s.length
    let res = Array(length).fill(Number.MAX_SAFE_INTEGER)
    
    for(let i = 0, j = -1;i < length;i++) {
        if(s[i] === c) {
            j = i
        }
        j !== -1 && (res[i] = i - j)
    }

    for(let i = length - 1, j = -1;i >= 0;i--) {
        if(s[i] === c) {
            j = i
        }
        j !== -1 &&  (res[i] = Math.min(res[i], j - i))
    }
    return res
};