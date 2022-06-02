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
 * @param {number} key
 * @return {TreeNode}
 */
 var deleteNode = function(root, key) {
    if (!root) {
        return root
    }
    const node = root
    /**
     * 查找最小值
     * @param {*} node 
     * @returns 
     */
    const findMinNode = (node) => {
        let current = node
        while(current && current.left) {
            current = current.left
        }
        return current
    }
    /**
     * 删除指定节点
     * @param {*} node 
     * @param {*} key 
     * @returns 
     */
    const removeNode = (node, key) => {
        if (!node) return null
        if (node.val > key) {
            node.left = removeNode(node.left, key)
            return node
        } else if (node.val < key) {
            node.right = removeNode(node.right, key)
            return node
        } else {
            if (!node.left && !node.right) {
                node = null
                return node
            }
            if (!node.left) {
                node = node.right
                return node
            }
            if (!node.right) {
                node = node.left
                return node
            }
            const min = findMinNode(node.right)
            node.val = min.val
            node.right = removeNode(node.right, min.val)
            return node
        }
    }

    return removeNode(node, key)
};