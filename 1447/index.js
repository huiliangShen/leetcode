/**
 * @param {number} n
 * @return {string[]}
 */
 var simplifiedFractions = function(n) {
    if (n <= 1) {
        return []
    }
    const list = []
    while(n > 1) {
        for(let i = 1; i < n; i++) {
            const gcd = mod(n, i)
            // gcd = 1 说明是最简分数
            gcd === 1 && list.push(`${i / gcd}/${ n / gcd}`)
        }
        n--
    }

    return list
};

function mod(a, b) {
    if (a % b === 0) return b
    return mod(b, a % b)
}
console.log(simplifiedFractions(5))
