// 打表类
var groupAnagrams = function(strs) {
    const map = new Map()
    for(let i = 0;i< strs.length;i++) {
        let str = strs[i]
        let key = str.split('').sort((a, b) => a < b ? -1 : 1)
        key = key.join('')
        let list = map.get(key) || []
        list.push(str)
        map.set(key, list)
    }
    console.log(map)
    let res = []
    for(let val of map.values()) {
        res.push(val)
    }
    return res
};

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]))