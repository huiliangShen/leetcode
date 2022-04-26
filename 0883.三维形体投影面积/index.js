/**
 * timeComplexity: O(n^2)
 * spaceComplexity: O(1)
 * @param {number[][]} grid
 * @return {number}
 */
 var projectionArea = function(grid) {
    let top = 0, x = 0, y = 0, n = grid.length
    for(let i = 0;i < n; i++) {
        let blocks = grid[i], _xMax = 0, _yMax = 0
        // 顶部总数
        
        for(let j = 0; j < n; j++) {
            // xMax 寻找这一行内的最大值
            let itemRow = blocks[j]
            if (_xMax < itemRow) {
                _xMax = itemRow
            }
            top += (itemRow > 0 ? 1 : 0)
            // 寻找这一列的最大值
            let itemColumn = grid[j][i]
            if (_yMax < itemColumn) {
                _yMax = itemColumn
            }
        }
        x += _xMax
        y += _yMax
    }

    // console.log(top, x, y)

    return top + x + y
};

// [[1,2],[3,4]]
// top = 4, main = 6, left = 7