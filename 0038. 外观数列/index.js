/**
 * @param {number} n
 * @return {string}
 */
 var countAndSay = function(n) {
    if (n === 1) {
        return "1"
    }
    let i = 1, result = "1"
    while(i < n) {
        result = readNumber(result)
        i++
    }
    return result
};

function readNumber(n) {
     /* if (n === "1") {
        return "1"
    } */
   /*  if (n === "2") {
        return "11"
    } */
    const s = n.split("")
    let i = 0, j = 0, res = ''
    while(j < s.length) {
        if (s[i] === s[j]) {
            if (j + 1 >= s.length) {
                res += `${j - i + 1}${s[i]}`
            }
            j++
        } else {
            res += `${j - i}${s[i]}`
            i = j
        }
    }
    return res
}

console.log(countAndSay(5))