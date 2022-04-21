/** 此题对js不友好，要么转为string来操作，要么必然直接精度出问题，需要使用bigint
 * @param {number} n
 * @return {number}
 */
 var largestPalindrome = function(n) {
    if (n === 1) {
        return 9
    }
    // 最大值为 n = 2 max 最大值为99
    // 最大值为 n = 3 max 最大值为999
    // ...
    let max = BigInt(Math.pow(10, n) - 1)
    for(let i = max;i >= 0;i--) {
        let t = i
        let palindromic = i
        while(t !== 0n) {
            // 构造回文数字
            // 99 = 99 * 10 + 99 % 10 ... = 9999
            // 98 = 98 * 10 + 98 % 10 ... = 9889
            palindromic = palindromic * 10n + (t % 10n)
            t = t / 10n
        }
        for(let k = max; k * k >= palindromic;k--) {
            if (palindromic % k === 0n) {
                return palindromic % 1337n
            }
        }
    }
    return -1
};