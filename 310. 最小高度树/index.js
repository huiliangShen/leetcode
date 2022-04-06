/** mid 不太理解
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findMinHeightTrees = function (n, edges) {
	let res = []
	if (n === 1) {
		return [0]
	}
	const degree = new Array(n).fill(0)
	const map = new Array(n).fill(0).map((_) => new Array())
	for (let [v1, v2] of edges) {
		degree[v1]++
		degree[v2]++
		map[v1].push(v2)
		map[v2].push(v1)
	}

	let queue = []
	for (let i = 0; i < degree.length; i++) {
		if (degree[i] === 1) {
			queue.push(i)
		}
	}

	while (queue.length > 0) {
		res = []
        const length = queue.length

		for (let i = 0; i < length; i++) {
			const item = queue.shift()
            res.push(item)
			const neighbors = map[item]

			for (j = 0; j < neighbors.length; j++) {
                const neighbor = neighbors[j]
                degree[neighbor]--
                if (degree[neighbor] === 1) {
                    queue.push(neighbor)
                }
            }
		}
	}
    return res
}

console.log(findMinHeightTrees(6, [[3,0],[3,1],[3,2],[3,4],[5,4]]))
