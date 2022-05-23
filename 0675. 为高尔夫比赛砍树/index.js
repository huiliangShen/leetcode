/**
 * timeComplexity: O(m^2 * n^2)
 * spaceComplexity: O(m * n)
 * @param {number[][]} forest
 * @return {number}
 */
let hp,
	area = [
		[0, -1],
		[0, 1],
		[-1, 0],
		[1, 0]
	]
var cutOffTree = function (forest) {
	const m = forest.length,
		n = forest[0].length

	hp = []
	for (let i = 0; i < m; i++) {
		for (let j = 0; j < n; j++) {
			const element = forest[i][j]

			if (element > 1) {
				hp.push([element, i, j])
			}
		}
	}

	hp.sort((a, b) => a[0] - b[0])

	let x0 = 0,
		y0 = 0,
		ans = 0
	for (let i = 0; i < hp.length; i++) {
		const [_, x, y] = hp[i]
		const res = bfs(x0, y0, x, y, m, n, forest)
		if (res === -1) {
			return -1
		}
		ans += res
		x0 = x
		y0 = y
	}

	return ans
}

function isSingleCoord(m, n, x, y, list) {
	for (let [x1, y1] of area) {
		let newX = x + x1
		let newY = y + y1
		if (newX >= 0 && newX < m && newY >= 0 && newY < n && list[newX][newY] > 0) {
			return true
		}
	}
	return false
}

function bfs(x, y, tx, ty, m, n, forest) {
	if (x === tx && y === ty) {
		return 0
	}
	const queue = [[x, y]]
	const visited = Array.from({ length: m }, () => Array.from({ length: n }, () => false))
	let ans = 0
	visited[x][y] = true
	while (queue.length > 0) {
		let size = queue.length
		while (size--) {
			const [x0, y0] = queue.shift()
			for (let [x1, y1] of area) {
				let newX = x0 + x1
				let newY = y0 + y1
				if (newX < 0 || newY < 0 || newX >= m || newY >= n) {
					continue
				}
				if (visited[newX][newY] || forest[newX][newY] === 0) {
					continue
				}
				if (newX === tx && newY === ty) {
					return ans + 1
				}
				queue.push([newX, newY])
				visited[newX][newY] = true
			}
		}
        ans++
	}
	return -1
}

console.log(
	cutOffTree([
		[1, 2, 3],
		[0, 0, 4],
		[7, 6, 5]
	])
)

console.log(
	cutOffTree([
		[1, 2, 3],
		[0, 0, 5],
		[7, 6, 4]
	])
)

console.log(
	cutOffTree([
		[2, 3, 4],
		[0, 0, 5],
		[8, 7, 6]
	])
)
