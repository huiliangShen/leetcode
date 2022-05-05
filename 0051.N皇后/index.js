/**
 * @param {number} n
 * @return {string[][]}
 */
let res = [],
	col = [],
	// 斜向上统计皇后的位置
	ltr = [],
	// 斜向下统计皇后的位置
	rtl = []
var solveNQueens = function (n) {
	res = []
	col = []
	ltr = []
	rtl = [] 
	combine(n, 0, [])
    return res
}
// 生成需要的具体的字符串
function generationStr(rows) {
    let strs = []
    for(let i = 0; i < rows.length;i++) {
        let str = Array(rows.length).fill(".")
        str[rows[i]] = "Q"
        strs.push(str.join(""))
    }
    return strs
}

function combine(n, row, rows) {
	if (row === n) {
		res.push(generationStr(rows))
		return
	}

	for (let i = 0; i < n; i++) {
		if (col[i] || ltr[i + row] || rtl[i - row + n - 1]) {
			continue
		}
		col[i] = true
		ltr[i + row] = true
		rtl[i - row + n - 1] = true
        // 代表当前行的皇后的位置
        // eg: 0, 1
        //     1, 2
        //     2, 3...
        combine(n, row + 1, [...rows, i])
        col[i] = false
		ltr[i + row] = false
		rtl[i - row + n - 1] = false
	}
}

console.log(solveNQueens(4))