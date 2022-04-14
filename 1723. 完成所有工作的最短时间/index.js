/**
 * tag 回溯算法
 * dfs加剪枝
 * 思路如下
 *              [][]
 *             /    \
 *           [1][]  [][1]
 *          /      \   
 *       [1,2][]      [1][2]
 *     /        \        /   \
 *   [1,2,3][]  [1,2][3] [1][2,3] [1,3][2]
 * ...
 * @param {number[]} jobs
 * @param {number} k
 * @return {number}
 */
var minimumTimeRequired = function (jobs, k) {
    // 设置最值
	let res = Number.MAX_VALUE
    // 生成一个length=k的数组，记录每一个工人的工作时间总和
	let persons = Array(k).fill(0)
    // 回溯开始
	backtrack(jobs, persons, 0, 0)
    /**
     * 
     * @param {*} jobs  
     * @param {*} persons 
     * @param {*} n 当前的任务key 0,1,2,3。。。
     * @param {*} max 记录工人的工作最大时间
     * @returns 
     */
	function backtrack(jobs, persons, n, max) {
        // 判断1
		if (max >= res) return
		if (n === jobs.length) {
			res = max
			// let maxTime = -1;
			// console.log('1', persons)
			// for(let i=0;i<persons.length;i++){
			//    maxTime = Math.max(persons[i],maxTime);
			// }
			// res = Math.min(res,maxTime);
			return
		}
        // 循环开始 每次遍历k个工人
		for (let i = 0; i < persons.length; i++) {
            // 不做判断1,2,3的总体结果
            // [ 8, 0, 0 ]
            // [ 5, 3, 0 ]
            // [ 5, 0, 3 ]
            // [ 6, 2, 0 ]
            // [ 3, 5, 0 ]
            // [ 3, 2, 3 ]
            // [ 6, 0, 2 ]
            // [ 3, 3, 2 ]
            // [ 3, 0, 5 ]
            // [ 5, 3, 0 ]
            // [ 2, 6, 0 ]
            // [ 2, 3, 3 ]
            // [ 3, 5, 0 ]
            // [ 0, 8, 0 ]
            // [ 0, 5, 3 ]
            // [ 3, 3, 2 ]
            // [ 0, 6, 2 ]
            // [ 0, 3, 5 ]
            // [ 5, 0, 3 ]
            // [ 2, 3, 3 ]
            // [ 2, 0, 6 ]
            // [ 3, 2, 3 ]
            // [ 0, 5, 3 ]
            // [ 0, 2, 6 ]
            // [ 3, 0, 5 ]
            // [ 0, 3, 5 ]
            // [ 0, 0, 8 ]
             // 判断2 当前工人的工作时间总和大于已经计算出来的工作时间总和后 直接跳出循序
			if (persons[i] + jobs[n] >= res) {
				continue
			}
            // 当前工人的任务量总和
			persons[i] += jobs[n]
            // if (n === jobs.length - 1)
			//     console.log(persons)
			backtrack(jobs, persons, n + 1, Math.max(max, persons[i]))
            // 当前工人任务量去除，进行下一个工人的任务量计算，还回去工作量的原因请查看当前目录下的md文件
			persons[i] -= jobs[n]
            // 判断3
			if (persons[i] === 0) {
				break
			}
		}
	}

	return res
}

console.log(minimumTimeRequired([3,2,3], 3))
// console.log(res)
