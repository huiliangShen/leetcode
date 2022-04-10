/**
 * @param {number} num
 * @return {number}
 */
/* var largestInteger = function (num) {
	if (num < 10) {
		return num
	}
	let n = num.toString().length % 2 === 0 ? 0 : 1
	let zu = []
	let os = []
	while (num > 0) {
		const o = num % 10
		num = Math.floor(num / 10)
		if (n % 2 === 0) {
			os.push(o)
		} else {
			zu.push(o)
		}
		n++
	}
	zu.sort((a, b) => b - a)
	os.sort((a, b) => b - a)
	// console.log(zu, os)
	let res = ""
	for (let i = 0; i < zu.length; i++) {
		res += zu[i]

		if (i < os.length) {
			res += os[i]
		}
	}
	return +res
} */

/**
 * @param {string} expression
 * @return {string}
 */
// var minimizeResult = function (expression) {
// 	let [left, right] = expression.split("+")
// 	let sum = Number.MAX_SAFE_INTEGER // Number(left) + Number(right)
// 	let result = ''// `(${left}+${right})`
// 	let collections1 = [+left]
// 	let collections2 = [+right]
// 	let l = 1,
// 		r = 1
// 	while (l < left.length) {
// 		const s = left.substring(0, l)
// 		const s1 = left.substring(l, left.length)

// 		collections1.push([+s, +s1])

// 		// let _sum = +s * (+s1 + +right)
// 		l++
// 		// if (_sum > sum) {
// 		//     sum = _sum
// 		//     result = `${s}(${s1}+${right})`
// 		// }

// 		// sum.push(_sum)
// 	}
// 	while (r < right.length) {
// 		const s = right.substr(right.length - r, r)
// 		const s1 = right.substr(0, right.length - r)
// 		r++
// 		collections2.push([+s1, +s])
// 		// let _sum = +s * (+left + +s1)
// 		// if (_sum > sum) {
// 		//     sum = _sum
// 		//     result = `(${left}+${s1})${s}`
// 		// }
// 	}
//     // console.log(collections1, collections2)
//     // let sum = 0
// 	for (let i = 0; i < collections1.length; i++) {
// 		for (let j = 0; j < collections2.length; j++) {
//             let _sum = 0, _result
//             if (i === 0 && j === 0) {
//                 _sum = collections1[i] + collections2[j]
//                 _result = `(${collections1[i]}+${collections2[j]})`
//             } else if (i === 0) {
//                 _sum = (collections1[i] + collections2[j][0]) * collections2[j][1]
//                 _result = `(${collections1[i]}+${collections2[j][0]})${collections2[j][1]})`
//             } else if (j === 0) {
//                 _sum = collections1[i][0] * (collections1[i][1] + collections2[j])
//                 _result = `${collections1[i][0]}(${collections1[i][1]}+${collections2[j]})`
//             } else  {
//                 _sum = collections1[i][0] * (collections1[i][1] + collections2[j][0]) * collections2[j][1]
//                 _result = `${collections1[i][0]}(${collections1[i][1]}+${collections2[j][0]})${collections2[j][1]}`
//             }
//             if (_sum < sum) {
//                 sum = _sum
//                 result = _result
//             }
//         }
// 	}

// 	return result
// }


// console.log(minimizeResult("247+38"))

class MinHeap {
	constructor(comparFn) {
		this.comparFn = comparFn
		this.heap = []
	}

	//        a (0)
	//       ↙  ↘
	//      b(1) c(2)
	//     ↙ ↘
	//    d   e
	// 根据父节点获取左边元素
	getLeftIndex(index) {
		return 2 * index + 1
	}
	// 根据父节点获取右边元素
	getRightIndex(index) {
		return 2 * index + 2
	}
	// 根据子节点index获取父节点
	getParentIndex(index) {
		if (index === 0) {
			return undefined
		}
		return Math.floor((index - 1) / 2)
	}
	// 向堆中插入值
	insert(value) {
		if (value != null) {
			this.heap.push(value)
			this.siftUp(this.heap.length - 1)
			return true
		}
		return false
	}
	// 和父节点比较并交换，知道父节点小于插入节点
	siftUp(index) {
		let parent = this.getParentIndex(index)
		while (index > 0 && this.comparFn(this.heap[parent], this.heap[index]) > 0) {
			this.swap(this.heap, parent, index)

			index = parent

			parent = this.getParentIndex(index)
		}
	}

	swap(arr, a, b) {
		;[arr[a], arr[b]] = [arr[b], arr[a]]
	}

	size() {
		return this.heap.length
	}

	isEmpty() {
		return this.size() === 0
	}

	findMinimum() {
		return this.isEmpty() ? undefined : this.heap[0]
	}

	// 取出最小值
	extract() {
		if (this.isEmpty()) {
			return undefined
		}

		if (this.size() === 1) {
			return this.heap.shift()
		}
		const result = this.heap.shift()
		this.heap.unshift(this.heap.pop())
		this.siftDown(0)
		return result
	}
    siftDown(index) {
        let current = index
        const left = this.getLeftIndex(index)
        const right = this.getRightIndex(index)
        const size = this.size()
        if (left < size && this.comparFn(this.heap[current], this.heap[left]) > 0) {
            current = left
        }
        if (right < size && this.comparFn(this.heap[current], this.heap[right]) > 0) {
            current = right
        }
        if (current !== index) {
            this.swap(this.heap, current, index)
            this.siftDown(current)
        }
    }
}

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var maximumProduct = function(nums, k) {
    const pqMin = new MinHeap((a, b) => a - b)

    for (let i = 0; i < nums.length; i++) {
        pqMin.insert(nums[i])
    }

    while(k > 0) {
       let min = pqMin.extract()
       let second = pqMin.findMinimum()
       let need = second - min + 1
       if (k > need) {
            k -= need
       } else {
           need = k
           k = 0
       }
       pqMin.insert(min + need)
    }
    let sum = 1
    for (let i = 0; i < nums.length; i++) {
        sum = (sum * pqMin.extract()) % (Math.pow(10, 9) + 7)
    }
    return sum % (Math.pow(10, 9) + 7)
};

console.log(maximumProduct([92,36,15,84,57,60,72,86,70,43,16], 62))