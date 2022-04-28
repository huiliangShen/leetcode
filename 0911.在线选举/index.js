/**
 * timeComplexity: O(logn + n)
 * spaceComplexity: O(n + n)
 * @param {number[]} persons
 * @param {number[]} times
 */
 var TopVotedCandidate = function (persons, times) {
    const n = persons.length
    // 计数排序
	let p = Array(n).fill(0)
    // 
	this.timers = Array(n).fill(0)
    let max = -1
    this.times = times
	for (let i = 0; i < n; i++) {
        // 最大值5000，可以直接计数
		p[persons[i]]++
        // 每次更新最大值
        if (max === -1 || p[persons[i]] >= p[max]) {
            max = persons[i]
        }
        this.timers[i] = max
	}
	// console.log(this.timers)
	// console.log(person)
}

/**
 * timeComplexity: O(logn)
 * @param {number} t
 * @return {number}
 */
TopVotedCandidate.prototype.q = function (t) {
    let i = 0, j = this.times.length - 1
    // 直接二分找小于等于t的值 i+j+1
    while(i < j) {
        let mid = Math.floor((i + j + 1) / 2)
        if (this.times[mid] <= t) {
            i = mid
        } else {
            j = mid - 1
        }
    }
    // console.log(j, this.timers.get(this.times[j]))
	return this.timers[j]
}

/**
 * Your TopVotedCandidate object will be instantiated and called as such:
 * var obj = new TopVotedCandidate(persons, times)
 * var param_1 = obj.q(t)
 * [0,1,1,0,0,1,0]
 * [0,5,10,15,20,25,30]
 */
var topVotedCandidate = new TopVotedCandidate([0, 1, 1, 0, 0, 1, 0], [0, 5, 10, 15, 20, 25, 30])
// console.log(topVotedCandidate.q(0))
topVotedCandidate.q(3) // 返回 0 ，在时刻 3 ，票数分布为 [0] ，编号为 0 的候选人领先。
topVotedCandidate.q(12) // 返回 1 ，在时刻 12 ，票数分布为 [0,1,1] ，编号为 1 的候选人领先。
topVotedCandidate.q(25) // 返回 1 ，在时刻 25 ，票数分布为 [0,1,1,0,0,1] ，编号为 1 的候选人领先。（在平局的情况下，1 是最近获得投票的候选人）。
topVotedCandidate.q(15) // 返回 0
topVotedCandidate.q(24) // 返回 0
topVotedCandidate.q(8) // 返回 1
