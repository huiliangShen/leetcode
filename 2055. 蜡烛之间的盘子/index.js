/**
 * @param {string} s
 * @param {number[][]} queries
 * @return {number[]}
 */
var platesBetweenCandles = function (s, queries) {
	let result = []
	let strs = s.split("")
	let pre = [],
		after = [],
		preNum = [],
		exist = -1,
		num = 0
	for (let i = 0; i < strs.length; i++) {
		if (strs[i] === "|") {
			exist = i
			num++
		}
		pre[i] = exist
		preNum[i] = num
	}
	exist = -1
	for (let i = strs.length - 1; i >= 0; i--) {
		if (strs[i] === "|") {
			exist = i
		}
		after[i] = exist
	}
	for (let i = 0; i < queries.length; i++) {
        const [left, right] = queries[i]
        const l = after[left]
        const r = pre[right]
        if (l === -1 || r === -1 || r <= l) {
            result[i] = 0
        } else {
            const count = r - l - (preNum[r] - preNum[l])
            result[i] = count
        }
    }
	return result
}

console.log(
	platesBetweenCandles("***|**|*****|**||**|*", [
		[1, 17],
		[4, 5],
		[14, 17],
		[5, 11],
		[15, 16]
	])
)
