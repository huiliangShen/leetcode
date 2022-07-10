/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function (matrix) {
	let m = matrix.length,
		n = matrix[0].length
	let dp = Array.from({ length: m }, () => new Array(n).fill(0))

	let max = 0
	for (let i = 0; i < m; i++) {
		for (let j = 0; j < n; j++) {
			if (matrix[i][j] === "1") {
				if (j === 0 || i === 0) {
					dp[i][j] = 1
				} else {
					dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1
				}
				max = Math.max(dp[i][j], max)
			}
		}
	}
	// console.log(dp)
	return max * max
}
console.log(
	maximalSquare([
		["1", "0", "1", "0", "0"],
		["1", "0", "1", "1", "1"],
		["1", "1", "1", "1", "1"],
		["1", "0", "0", "1", "0"]
	])
)
