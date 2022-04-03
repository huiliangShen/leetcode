/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
	if (s.length <= 1) {
		return ""
	}
	let l = 0,
		e = s.length - 1,
		result = "",
		i = 0
	while (i < s.length) {
		while (l < e) {
            let str  = s.substring(l, e + 1)
			const flag = isRecy(str)
            if (flag) {
                result = result.length > e + 1 - l ? result : str
                e = -1
            } else {
                e--
            }
		}
        i++
        l = i
        e = s.length - 1
	}
    return result || s[0]
}

function isRecy(s) {
    let n = 0, m = s.length - 1
    while(n < m) {
        if (s[n] !== s[m]) {
            return false
        }
        n++
        m--
    }
    return true
}

s = "ab"

console.log(longestPalindrome(s))

var longestPalindrome = function (s) {
	if (s.length <= 1) {
		return s
	}
    let result = ""
	for (let i = 0; i < s.length; i++) {
        for(let j = s.length - 1;j > i;j++) {
            let str  = s.substring(i, j + 1)
            const flag = isRecy(str)
            if (!flag) {
                continue
            } else {
                result = result.length > e + 1 - l ? result : str
                break
            }
        }
    }
    return result || s[0]
}
