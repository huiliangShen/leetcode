/**
 * 回溯解法
 * @param {number[][]} costs
 * @return {number}
 */
let min = Number.MAX_VALUE
var minCost = function (costs) {
	min = Number.MAX_VALUE
	let n = costs.length
	backtrack(costs, n, 0, -1, 0)
	return min
}

function backtrack(costs, n, sum, notI, level) {
	// console.log(costs, n, sum, notI, level)
	if (sum > min) {
		return
	}
	if (level === n) {
		min = Math.min(min, sum)
		return
	}
	for (let i = level; i < n; i++) {
		let item = costs[i]
		for (let j = 0; j < 3; j++) {
			if (notI === j) {
				continue
			}
			if (item[j] + sum > min) {
				continue
			}
			// console.log(level, j, item[j] + sum, item)
			backtrack(costs, n, item[j] + sum, j, i + 1)
		}
		break
	}
}

/**
 * dp 解法
 * @param {*} costs 
 * @returns 
 */
var minCost2 = function (costs) {
	let n = costs.length
	let a = costs[0][0],
		b = costs[0][1],
		c = costs[0][2]

	for (let i = 1; i < n; i++) {
        let [a1, b1, c1] = costs[i]
        let a2 = Math.min(b, c) + a1
        let b2 = Math.min(a, c) + b1
        let c2 = Math.min(b, a) + c1
        a = a2
        b = b2
        c = c2
    }

    return Math.min(a, b, c)

}

// console.log(minCost([[17,2,17],[16,16,5],[14,3,19]]))
// console.log(minCost([[7,6,2]]))
// console.log(minCost([[17,3,4],[1,7,2],[0,3,5]]))
console.log(
	minCost2([
		[7, 2, 6],
		[13, 13, 5],
		[16, 3, 1],
		[2, 6, 19],
		[4, 8, 16],
		[20, 10, 17],
		[4, 2, 1],
		[9, 6, 1],
		[15, 6, 4],
		[3, 8, 5],
		[12, 14, 7],
		[8, 7, 1],
		[19, 12, 8],
		[17, 16, 13],
		[4, 3, 13],
		[8, 5, 12],
		[14, 3, 3],
		[1, 4, 19],
		[7, 4, 7],
		[3, 6, 11],
		[7, 16, 9],
		[20, 4, 1],
		[15, 8, 16],
		[19, 6, 8],
		[19, 12, 3],
		[12, 8, 5],
		[12, 18, 11],
		[8, 11, 15],
		[13, 5, 4],
		[16, 3, 15],
		[13, 16, 7],
		[17, 10, 12],
		[3, 12, 12],
		[15, 15, 18],
		[18, 6, 6],
		[17, 13, 11],
		[7, 19, 19],
		[18, 18, 12],
		[7, 20, 4]
	])
)
