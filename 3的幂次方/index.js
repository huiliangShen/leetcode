var isPowerOfThree = function(n) {
    if (n <= 0) return false
    while(n !== 1) {
        let mod = n % 3
        if (mod !== 0) {
            return false
        }
        n = Math.floor(n / 3)
    }
    return true
};

console.log(isPowerOfThree(-3))