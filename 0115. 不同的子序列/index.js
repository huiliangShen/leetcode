/**
 * timeComplexity: O(n*m)
 * spaceComplexity: O(n*m)
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
 var numDistinct = function(s, t) {
    let n = s.length, m = t.length
    let res = []
    for(let j = 0;j<=m;j++) {
        res[j] = Array(n+1).fill(0)
    }
    for(let i = 0;i <= n;i++) {
        res[0][i] = 1
    }
    // console.log(res)
    for(let i = 1;i <= m;i++) {
        for(let j = 1;j <= n;j++) {
            res[i][j] += res[i][j-1]
            if (s[j-1] === t[i-1]) {
                res[i][j] += res[i-1][j-1]
            }
        }
    }
    // console.log(res)
    return res[m][n]
};
