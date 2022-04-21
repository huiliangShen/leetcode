/**
 * 思路
 * dfs遍历结果即可
 * @param {number} n
 * @return {number[]}
 */
 var lexicalOrder = function (n) {
	let res = []
	for (let i = 1; i <= 9; i++) {
         if(i <= n) {
		    dfs(i, n)
         }
	}

	function dfs(total, n) {
		res.push(total)
		for (let i = 0; i <= 9; i++) {
            if (total * 10 + i <= n) {
			    dfs(total * 10 + i, n)
		    }
        }
	}
    return res
}
console.log(lexicalOrder(150))