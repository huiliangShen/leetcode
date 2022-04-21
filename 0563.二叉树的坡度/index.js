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
 * @return {number}
 */
 var findTilt = function(root) {
    let sum = 0

    search(root)
    return sum

    function search(node) {
        if (!node) {
            return 0
        }
        if (node) {
            const left = search(node.left)
            const right = search(node.right)
            
            sum += Math.abs(left - right)
            return left + right + node.val
        }
    }
};

console.log(findTilt({"val":4,"left":{"val":2,"left":{"val":3,"left":null,"right":null},"right":{"val":5,"left":null,"right":null}},"right":{"val":9,"left":null,"right":{"val":7,"left":null,"right":null}}}
))