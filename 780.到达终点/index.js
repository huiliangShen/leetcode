/**
 * @param {number} sx
 * @param {number} sy
 * @param {number} tx
 * @param {number} ty
 * @return {boolean}
 */
 var reachingPoints = function(sx, sy, tx, ty) {
    while(sx < tx && sy < ty) {
        if (ty > tx) ty = ty % tx
        else tx = tx % ty
    }
    if (sx > tx || sy > ty) {
        return false
    }
    if (sx === tx) {
        return (ty - sy) % tx === 0
    } else {
        return (tx - sx) % ty === 0
    }
};

console.log(reachingPoints(1,1,1000000,1))