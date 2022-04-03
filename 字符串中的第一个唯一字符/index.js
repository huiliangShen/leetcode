/**
 * @param {string} s
 * @return {number}
 */
 var firstUniqChar = function(s) {
    const slist = s.split("")
    const map = new Map()
    for(let i = 0;i<slist.length;i++) {
        map.set(s[i], (map.has(s[i]) ? slist.length : i))
    }
    let min = slist.length
    for(let value of map.values()) {
        if (value < min) {
            min = value
        }
    }
    return min === slist.length ? -1:min
};

console.log(firstUniqChar("loveleetcode"))

class Stack{
    constructor
}