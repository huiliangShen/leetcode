/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * dfsNode + 哈希表
 * time complexity: O(nlogn)
 * space complexity: O(n)
 * @param {TreeNode} root
 * @return {number[][]}
 */
let min = Number.MAX_VALUE
let map = null
var verticalTraversal = function (root) {
	if (!root) {
		return []
	}
	map = new Map()
	dfsNode(root, 0, 0)


    const result = []
    if (min < 0) {
        min = -min
    }
    for(let [j, item] of map.entries()) {
        let _key = j + min
        if (!result[_key])  {
            result[_key] = []
        }
        item.sort((a, b) => {
            if(a[0] !== b[0]) {
                return a[0] - b[0]
            } else {
                return a[1] - b[1]
            }
        })
        result[_key] = item.map(e => e[1])
    }
	return result
}

function dfsNode(node, i, j) {
	if (node) {
		dfsNode(node.left, i + 1, j - 1)
		const item = map.get(j) || []
		const data = [i, node.val]
		item.push(data)
		map.set(j, item)
		min = Math.min(j, min)
		dfsNode(node.right, i + 1, j + 1)
	}
}
