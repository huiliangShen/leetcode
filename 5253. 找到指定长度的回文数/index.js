// 错误的答案

/**
 * @param {number[]} queries
 * @param {number} intLength
 * @return {number[]}
 */
var kthPalindrome = function(queries, intLength) {
    const delat = Math.pow(10, intLength)
    const total = [];
    let min = Math.floor(delat / 10), max = delat - 1
    let maxCount = max - min + 1, count = 0
    for(let i = 0;i<queries.length;i++) {
        const item = queries[i]
        if (item <= maxCount) {
            if (item > count) {
                count = item
            }
        }
    }

   console.log(count)
    for(let i = min;i<=max;i++) {
        if (total.length > count) {
            break
        }
        if (ishw(i)) {
            total.push(i)
        }
    }

    const res = []
    for(let i = 0;i<queries.length;i++) {
        const item = queries[i]
        if (item > count) {
            res.push(-1)
        } else {
            res.push(total[item - 1])
        }
    }
    return res
};

const ishw = (num) => {
    const s = num + ""
    let i = 0, j = s.length - 1
    while(i < j) {
        if (s[i] !== s[j]) {
            return false
        }
        i++
        j--
    }
    return true
}

console.log(kthPalindrome([2,201429812,8,520498110,492711727,339882032,462074369,9,7,6], 1))