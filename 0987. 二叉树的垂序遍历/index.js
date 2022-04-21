/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
 var verticalTraversal = function(root) {
    var map = new Map()
    let min = Number.MAX_SAFE_INTEGER
    dfs(root)

    function dfs(node, row = 0, col = 0) {
        if (node) {
            dfs(node.left, row + 1, col-1)
            let l = map.get(col) || []
            l.push([row, node.val])
            min = Math.min(min, col)
            map.set(col, l)
            dfs(node.right, row+1, col + 1)
        }
    }
    let result = []
    if (min < 0) {
        min = -min
    }
    for(let [key, value] of map.entries()) {
        let _key = key + min
        if (!result[_key]) {
            result[_key] = []
        }
        value.sort((a, b) => {
            if (a[0] === b[0]) {
                return a[1] - b[1]
            }  else {
                return a[0] - b[0]
            }
        })
        result[_key] = value.map(e => e[1])
    }
    return result
};
