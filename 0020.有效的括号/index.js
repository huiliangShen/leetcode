/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    const stack = []
    let i = 0
    while(i < s.length) {
        switch(s[i]) {
            case '(':
            case '{':
            case '[':
                stack.push(s[i])
                break
            case ')':
                if (stack[stack.length - 1] === '(') {
                    stack.pop()
                } else {
                    return false
                }
                break;
            case '}':
                if (stack[stack.length - 1] === '{') {
                    stack.pop()
                } else {
                    return false
                }
                break;
            case ']':
                if (stack[stack.length - 1] === '[') {
                    stack.pop()
                } else {
                    return false
                }
                break
        }
        i++
    }
    return stack.length === 0
};

console.log(isValid("{}"))