/**
 * 每日 easy
 * 时间复杂度 O(n)
 * 空间复杂度 O(1)
 * @param {number[]} widths
 * @param {string} s
 * @return {number[]}
 */
 var numberOfLines = function(widths, s) {
    let i = 0, count = 1, total = 0
    while(i < s.length) {
        const char = s[i].charCodeAt()
        const charUnit = widths[char - 97]
        const t = total + charUnit
        if (t > 100) {
            count++
            total = charUnit
        } else {
            total = t
        }
        i++
    }
    return [count, total]
};