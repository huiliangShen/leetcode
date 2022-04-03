/**
 * @param {string} answerKey
 * @param {number} k
 * @return {number}
 */
var maxConsecutiveAnswers = function (answerKey, k) {
    let s = answerKey.split('')
	return Math.max(getCns(s, "T", k), getCns(s, "F", k))
}
// c = "T" 统计T出现的个数，count<T> > k的时候，j进位并count<T>--
function getCns(s, c, k) {
	let max = 0
	for (let i = 0, j = 0, ans = 0; i < s.length; i++) {
		if (s[i] === c) ans++
		while (ans > k) {
            if (s[j] === c) ans--
            j++
        }
        max = Math.max(max, i - j + 1)
	}
    return max
}

console.log(maxConsecutiveAnswers("TTFTTFTT", 1))
