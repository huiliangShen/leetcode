// [1,0,0]
// [1,1,1,0]
const isOneBitCharacter = function (bits) {
	const n = bits.length
	let i = 0
	while (i < n) {
		if (bits[i] === 1) {
			i += 2
			if (i >= n) {
				return false
			}
		} else {
			i++
		}
	}
	return true
}

console.log(isOneBitCharacter([1, 1, 1, 1, 0]))

var reverse = function (x) {
	let res = 0
	let isSmall = x < 0
	x = isSmall ? -x : x
	while (x !== 0) {
		let temp = x % 10
		res = res * 10 + temp
		if (res > Math.pow(2, 31) - 1) {
			return 0
		}
		x = Math.floor(x / 10)
	}
	return isSmall ? -res : res
}

console.log(reverse(-123))
