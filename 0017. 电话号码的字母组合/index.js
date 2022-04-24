/**
 * timeComplexity: O(3^n*4^n)
 * spaceComplexity: O(n*m)
 * @param {string} digits
 * @return {string[]}
 */
const map = {
	2: "abc",
	3: "def",
	4: "ghi",
	5: "jkl",
	6: "mno",
	7: "pqrs",
	8: "tuv",
	9: "wxyz"
}
let res = []
var letterCombinations = function (digits) {
	res = []
	if (!digits) return res
	dfs(digits, 0, "")
	return res
}

function dfs(digits, index, s) {
	if (index === digits.length) {
		res.push(s)
		return
	}

	const item = digits[index]
	const chars = map[item]
	for (let i = 0; i < chars.length; i++) {
		dfs(digits, index + 1, s + chars[i])
	}
	return
}
