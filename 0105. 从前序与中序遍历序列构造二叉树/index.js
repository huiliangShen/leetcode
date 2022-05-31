/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
function TreeNode(val, left, right) {
	this.val = val === undefined ? 0 : val
	this.left = left === undefined ? null : left
	this.right = right === undefined ? null : right
}
var buildTree = function (preorder, inorder) {
    console.log(preorder, inorder)
    if (preorder.length === 0) {
        return null
    }
    if (preorder.length === 1 || inorder.length === 1) {
        return new TreeNode(inorder[0])
    }
	const root = new TreeNode(preorder[0])
	for (let i = 0; i < preorder.length; i++) {
		if (preorder[0] === inorder[i]) {
            root.left = buildTree(preorder.slice(1, i + 1), inorder.slice(0, i))
            root.right = buildTree(preorder.slice(i + 1, preorder.length), inorder.slice(i + 1, preorder.length))
		}
	}
    return root
}

// console.log(buildTree([3,9,20,15,7], [9,3,15,20,7]))
console.log(buildTree([1,2], [2,1]))