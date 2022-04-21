/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * function NestedInteger() {
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     @return {boolean}
 *     this.isInteger = function() {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     @return {integer}
 *     this.getInteger = function() {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a single integer equal to value.
 *     @return {void}
 *     this.setInteger = function(value) {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a nested list and adds a nested integer elem to it.
 *     @return {void}
 *     this.add = function(elem) {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds, if it holds a nested list
 *     Return null if this NestedInteger holds a single integer
 *     @return {NestedInteger[]}
 *     this.getList = function() {
 *         ...
 *     };
 * };
 */
/**
 * 栈解法
 * 每次遇到[ 都会创建一个新的NestedInteger，并将其push到栈中
 * 遇到 - 时判断当前数字的正负值
 * 遇到数字的时候组装数字直到遇到，或者]
 * 遇到，或者] 组装一个NestedInteger对象并把上面组装的数字填入，并将此对象add入栈顶的NestedInteger中
 * 最后 ] 出栈元素并入栈到栈顶的NestedInteger中
 * 演示逻辑 s = "[123,[456,[789]]]"
 * 1. [ -> [[]]
 * 2. 123
 * 3. 遇到，[[123]]
 * 4. [ -> [] -> [[123], []]
 * 5. 456
 * 6. 遇到，[456] -> [[123], [456]]
 * 7. [ -> []
 * 8. 789
 * 9. 遇到 ] -> [789] -> [[123], [456], [789]]
 * 10. ] -> [[123], [456, [789]]]
 * 11. ] -> [[123, [456, [789]]]]
 * 12. pop() -> [123, [456, [789]]]
 * @param {string} s
 * @return {NestedInteger}
 */
var deserialize = function (s) {
	if (s[0] !== "[") return new NestedInteger(s)
	let stack = []
	let negative = false
	let sum = 0
	let i = 0
	for (let i = 0; i < s.length; i++) {
		const item = s[i]
		if (item === "[") {
			stack.push(new NestedInteger())
		} else if (item === "-") {
			negative = true
		} else if (item >= "0" && item <= "9") {
			sum = sum * 10 + (item - 0)
		} else if (item === "]" || item === ",") {
			if (s[i - 1] >= "0" && s[i - 1] <= "9") {
				if (negative) {
					sum = -sum
				}
				let newItem = new NestedInteger(sum)
				stack[stack.length - 1].add(newItem)
			}
			sum = 0
			negative = false
			if (item === "]" && stack.length > 1) {
				let last = stack.pop()
				stack[stack.length - 1].add(last)
			}
		}
	}
	return stack.pop()
}
