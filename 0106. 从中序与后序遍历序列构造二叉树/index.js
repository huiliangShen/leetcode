/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
function TreeNode(val, left, right) {
	this.val = val === undefined ? 0 : val
	this.left = left === undefined ? null : left
	this.right = right === undefined ? null : right
}
var buildTree = function (inorder, postorder) {
    let n = inorder.length
    if (n === 0) {
        return null
    }
    if (n === 1) {
        return new TreeNode(inorder[0])
    }
    let root = new TreeNode(postorder[n - 1])
    for(let i = 0 ; i < n; i++) {
        if(inorder[i] === postorder[n - 1]) {
            root.left = buildTree(inorder.slice(0, i), postorder.slice(0, i))
            root.right = buildTree(inorder.slice(i + 1, n), postorder.slice(i, n - 1))
        }
    }
    return root
}

console.log(buildTree([9,3,15,20,7], [9,15,7,20,3]))
