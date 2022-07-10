/**
 * link: https://leetcode.cn/problems/count-square-submatrices-with-all-ones/
 * like 0221
 * @param {number[][]} matrix
 * @return {number}
 */
var countSquares = function (matrix) {
	const m = matrix.length,
		n = matrix[0].length
	let dp = Array.from({ length: m }, () => new Array(n).fill(0))
	let count = 0
	for (let i = 0; i < m; i++) {
		for (let j = 0; j < n; j++) {
			if (matrix[i][j] === 1) {
				// count++
				if (i === 0 || j === 0) {
					dp[i][j] = 1
				} else {
					dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1
				}
			}
		}
	}
	console.log(dp, count)
	dp.forEach((items) => {
		items.forEach((i) => {
			count += i
		})
	})
	return count
}

console.log(
	countSquares([
		[0, 1, 1, 1],
		[1, 1, 1, 1],
		[0, 1, 1, 1]
	])
)
console.log(
	countSquares([
		[1, 0, 1],
		[1, 1, 0],
		[1, 1, 0]
	])
)
