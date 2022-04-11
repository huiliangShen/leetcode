/**
 * @param {number} n
 * @return {string[]}
 */
 var generateParenthesis = function(n) {
   let res = []
   dfs(n, n, '', res)
   return res
};

function dfs(left, right, str, res) {
    if (left === 0 && right === 0) {
        res.push(str)
        return
    }
    if (left > right) {
        return
    }
    if (left > 0) {
        dfs(left - 1, right, str + '(', res)
    }
    if (right > 0) {
        dfs(left, right - 1, str + ')', res)
    }
}

console.log(generateParenthesis(2))