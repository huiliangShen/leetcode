/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * DFS
 * 时间复杂度O(n)
 * 空间复杂度O(1)
 * @param {Node|null} root
 * @return {number}
 */
//  var maxDepth = function(root) {
//     if (!root) {
//         return 0
//     }
//     let max = 0
//     let child = root.children

//     for(let c of child) {
//         max = Math.max(max, maxDepth(c))
//     }
    
//     return max + 1
// };

/**
 * BFS
 * 时间复杂度O(n)
 * 空间复杂度O(n)
 * @param {Node|null} root
 * @return {number}
 */
 var maxDepth = function(root) {
    if (!root) {
        return 0
    }
    let queue = [root]
    let max = 0

    while(queue.length) {
        let n = queue.length    
        while(n--) {
            let node = queue.shift()
            for(let c of node.children) {
                queue.push(c)
            }
        }
        max++
    }
    return max
};