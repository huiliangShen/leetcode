// 有问题
var highestPeak = function (isWater = []) {
	let result = [],
		m = isWater.length
	for (let i = 0; i < m; i++) {
        result[i] = []
    }
	for (let i = 0; i < m; i++) {
		const lines = isWater[i];
		for (let j = 0; j < lines.length; j++) {
			const item = lines[j];
			if (item === 1) {
				result[i][j] = 0
			} else {
				let top = i === 0 ? 1 : (isWater[i - 1][j] === 0 ? 1 : 0)
				let left = j === 0 ? 1 : (isWater[i][j - 1]  === 0 ? 1 : 0)
				let right = j === lines.length - 1 ? 1 : (isWater[i][j + 1] === 0 ? 1 : 0)
				let bottom = i === m - 1 ? 1 : (isWater[i + 1][j] === 0 ? 1 : 0)
				result[i][j] = Math.min.call(null, top, left, right, bottom) + 1
			}
		}
	}
	console.log(result)
	for (let i = 0; i < m; i++) {
		const lines = result[i];
		for (let j = 0; j < lines.length; j++) {
			// 说明最后一列
			const right = j === lines.length - 1 ? (j > 0 ? result[i][j - 1] : result[i][j]) : result[i][j + 1]
			// 最后一行
			const bottom = i === m - 1 ? (i > 0 ? result[i - 1][j] : result[i][j]) : result[i + 1][j]
			if (right === 0 || bottom === 0) {
				continue
			}
			if (right === result[i][j] && bottom === result[i][j] && result[i][j] > 1) {
				result[i][j]++
			}
		}
	}
	return result
}

highestPeak([[0,0,0,0,0,0,1,0],[0,1,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,0],[0,0,1,0,0,0,0,0]])