/**
 * timeComplexity: O(n)
 * spaceComplexity: O(n)
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function (s) {
    const stack = []
    let count = 0, left = 0, right = 0
    for(let i = 0; i < s.length; i++) {
        const item = s[i]
        if(item === '(') {
            if (count === 0) {
                count++
            } else {
                stack.push(item)
                left++
            }
        } else {
            if (stack.length % 2 === 0 && left === right) {
                count--
            } else {
                stack.push(item)
                right++
            }
        }
    }
    return stack.join('')
}

console.log(removeOuterParentheses('(()())(())'))
console.log(removeOuterParentheses('(()(()))'))
console.log(removeOuterParentheses("(((((())))))"))

// [(()())(())]