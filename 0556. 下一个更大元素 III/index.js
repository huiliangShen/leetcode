/**
 * 缺少dp解法
 * timeComplexity: O(nlogn)
 * spaceComplexity: O(n)
 * @param {number} n
 * @return {number}
 */
const MAX_VALUE = 2**31 - 1
var nextGreaterElement = function (n) {
	const str = n.toString().split("")
	const length = str.length
	for (let i = length - 1; i > 0; i--) {
		// 找到第一个 后一位比前一位大的数
		if (str[i] > str[i - 1]) {
			const localStr = str.slice(i)
			localStr.sort((a, b) => a - b)
			for (let j = 0; j < localStr.length; j++) {
                if (str[i - 1] < localStr[j]) {
                    let temp = localStr[j]
                    localStr[j] = str[i - 1]
                    str[i - 1] = temp
                    const numList = str.slice(0, i).concat(...localStr)
                    const num = numList.join('') - 0
                    if (num > MAX_VALUE) {
                        return -1
                    }
                    return num
                }
            }
		}
	}
    return -1
}

console.log(nextGreaterElement('12385764'))
console.log(nextGreaterElement('12'))
console.log(nextGreaterElement('1'))
console.log(nextGreaterElement('321'))
