/**
 * timeComplexity: O(nlogn)
 * spaceComplexity: O(1)
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
 var shipWithinDays = function(weights, days) {
    let left = Math.max.apply(null, weights)
    let right = weights.reduce((a,b) => a+b)

    while(left < right) {
        let mid = left + Math.floor((right - left) / 2)
        let check = canShip(weights, days, mid)
        console.log('bb mid: ', mid, 'l：', left, 'r：', right)
        // mid 在days中的天数内，可以不断逼近mid最小值
        if(check) {
            right = mid
        } else {
            // 如果mid不能够满足days内运输的条件，说明mid大小了要增加
            left = mid + 1
        }
        console.log('aa mid: ', mid, 'l：', left, 'r：', right)
    }
    return right
};

function canShip(weights, days, cap) {
    let total = 0
    for(const w of weights) {
        // 若查过当前一天可运输的cap值，说明要下一天才能运输了
        if (total + w > cap) {
            days--
            total = 0
        }
        total += w
    }
    return days > 0
}

console.log(shipWithinDays([3,2,2,4,1,4], 5))