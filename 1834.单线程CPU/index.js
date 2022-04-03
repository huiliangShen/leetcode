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

var getOrder = function(tasks) {
    const {length} = tasks

    const list = tasks.map((e, i) => ([e[0], e[1], i]))
    list.sort((a, b) => a[0] - b[0])

    const pq = new MinHeap((a, b) => {
        if (a[1] !== b[1]) {
            return a[1] - b[1]
        }
        return a[2] - b[2]
    });
    
    const res = []
    let now = 0
    let i = 0
    while(res.length < length) {
        if(!pq.isEmpty()) {
            const item = pq.extract()
            // 添加任务进度
            now += item[1]
            // 推入下标
            res.push(item[2])
        } else if (i < length && list[i][0] > now) {
            now = list[i][0]
        }

        for(;i<length && list[i][0] <= now;i++) {
            pq.insert(list[i])
        }
    }
    return res
}

console.log(getOrder([[1,2],[2,4],[3,2],[4,1]]))
