/**
 * @param {number} n
 * @return {number}
 */
 var integerReplacement = function(n) {
    let count = 0, mods = [2,4,8]

    while(n > 1) {
        if (n % 2 === 0) {
            n = Math.floor(n / 2)
        } else {
            const mod1 = (n + 1)
            const mod2 = (n - 1)
            const l1 = mods.filter(m => mod1 % m === 0).length
            const l2 = mods.filter(m => mod2 % m === 0).length
            if (n - 1 === 1 || n < 10 || l1 <= l2) {
                n--
            } else {
                n++
            }
        }
        count++
    }
    return count
};

console.log(integerReplacement(2147483647))