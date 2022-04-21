// 打卡项目
// 给你一个 m 行 n 列的矩阵 matrix ，请按照 顺时针螺旋顺序 ，返回矩阵中的所有元素。
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
 var spiralOrder = function(matrix) {
    const m = matrix.length ,n = matrix[0].length
    const res = []
    // 分别记录上下左右的边界
    let top = 0, bottom = m - 1, left = 0, right = n - 1
    while(res.length < m * n) {
        if (top <= bottom) {
            for(let i = left; i <= right;i++) {
                res.push(matrix[top][i])
            }
            top++
        }

        if (left <= right) {
            for(let i = top; i <= bottom;i++) {
                res.push(matrix[i][right])
            }
            right--
        }

        if (top <= bottom) {
            for(let i = right; i >= left;i--) {
                res.push(matrix[bottom][i])
            }
            bottom--
        }

        if (left <= right) {
            for (let i = bottom; i >= top; i--) {
                res.push(matrix[i][left])
            }
            left++
        }
    }
    return res
};

console.log(spiralOrder([[1,2,3,4],[5,6,7,8],[9,10,11,12]]))