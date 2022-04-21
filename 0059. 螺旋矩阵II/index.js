// 打卡项目
// 给你一个正整数 n ，生成一个包含 1 到 n2 所有元素，且元素按顺时针顺序螺旋排列的 n x n 正方形矩阵 matrix
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var generateMatrix = function (n) {
	const res = Array(n)
	for (let i = 0; i < n; i++) {
		res[i] = []
	}
	// 分别记录上下左右的边界
	let top = 0,
		bottom = n - 1,
		left = 0,
		right = n - 1,
        count = 1
	while (count <= n * n) {
		if (top <= bottom) {
			for (let i = left; i <= right; i++) {
				res[top][i] = count++
			}
			top++
		}

		if (left <= right) {
			for (let i = top; i <= bottom; i++) {
				res[i][right] = count++
			}
			right--
		}

		if (top <= bottom) {
			for (let i = right; i >= left; i--) {
				res[bottom][i] = count++
			}
			bottom--
		}

		if (left <= right) {
			for (let i = bottom; i >= top; i--) {
				res[i][left] = count++
			}
			left++
		}
	}
	return res
}

console.log(
	generateMatrix(3)
)
