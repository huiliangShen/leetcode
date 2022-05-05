/**
 * @param {character[][]} grid
 * @return {number}
 */
let m, n
let visited
var numIslands = function (grid) {
	m = grid.length
	n = grid[0].length
	visited = Array.from({ length: m }, () => new Array(n).fill(false))
	let res = 0
	// floodfill
	// 遍历寻找所有的相邻陆地
	// console.log(visited)
	for (let i = 0; i < m; i++) {
		for (let j = 0; j < n; j++) {
			if (grid[i][j] === "1" && !visited[i][j]) {
				console.log(i, j, visited[i][j])
				res++
				dfs(grid, i, j)
				console.log("dfs", i, j, visited[i][j])
			}
		}
	}
	console.log(visited)
	return res
}

const area = [
	[0, 1],
	[0, -1],
	[-1, 0],
	[1, 0]
]

function isArea(x, y) {
	return x >= 0 && y >= 0 && x < m && y < n
}

function dfs(grid, x, y) {
	visited[x][y] = true
	for (let i = 0; i < 4; i++) {
		const newx = x + area[i][0]
		const newy = y + area[i][1]

		if (isArea(newx, newy) && !visited[newx][newy] && grid[newx][newy] === "1") {
			dfs(grid, newx, newy)
		}
	}
}

console.log(
	numIslands([
		["1", "1", "1", "1", "0"],
		["1", "1", "0", "1", "0"],
		["1", "1", "0", "0", "0"],
		["0", "0", "0", "0", "0"]
	])
)
