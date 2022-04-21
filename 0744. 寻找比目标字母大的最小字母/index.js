/* 给你一个排序后的字符列表 letters ，列表中只包含小写英文字母。另给出一个目标字母 target，请你寻找在这一有序列表里比目标字母大的最小字母。

在比较时，字母是依序循环出现的。举个例子：

如果目标字母 target = 'z' 并且字符列表为 letters = ['a', 'b']，则答案返回 'a'
 

示例 1：

输入: letters = ["c", "f", "j"]，target = "a"
输出: "c"
示例 2:

输入: letters = ["c","f","j"], target = "c"
输出: "f"
示例 3:

输入: letters = ["c","f","j"], target = "d"
输出: "f"
 
a b d e f g h i j k     c
提示：
2 <= letters.length <= 104
letters[i] 是一个小写字母
letters 按非递减顺序排序
letters 最少包含两个不同的字母
target 是一个小写字母 */
/** easy
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function (letters, target) {
	if (target >= letters[letters.length - 1]) {
		return letters[0]
	} else if (target < letters[0]) {
		return letters[0]
	}
	let start = 0,
		end = letters.length - 1
	while (start < end) {
		let mid = Math.floor((start + end) / 2)
		const item = letters[mid]
		if (item <= target) {
			if (letters[mid + 1] > target) {
				return letters[mid + 1]
			}
			start = mid + 1
		} else {
			if (letters[mid - 1] <= target) {
				return letters[mid]
			} else {
				end = mid - 1
			}
		}
	}
}

// 大佬写法
var nextGreatestLetter = function (letters, target) {
	const n = letters.length
	let l = 0,
		r = n - 1
	while (l < r) {
		let mid = (l + r) >> 1
		if (letters[mid] > target) r = mid
		else l = mid + 1
	}
	return letters[r] > target ? letters[r] : letters[0]
}

// let letters = ["c", "f", "j"], target = "a"
// let letters = ["c","f","j"], target = "c"
let letters = ["c", "f", "j"],
	target = "d"
console.log(nextGreatestLetter(letters, target))
