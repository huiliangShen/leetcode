/**
 * @param {number[]} arr
 * @return {boolean}
 */
/* var canReorderDoubled = function (arr) {
	const map = new Map()
	arr.forEach((e, i) => {
		map.set(e, (map.get(e) || 0) + 1)
	})
	arr.sort((a, b) => Math.abs(a) - Math.abs(b))
	for (let i = arr.length - 1; i >= 0; i--) {
		let fCount = map.get(arr[i])
		if (fCount === "N") {
			continue
		}
		let item = arr[i] / 2

		if (!map.has(item)) {
			return false
		}

		let count = map.get(item)
		if (count === "N") {
			continue
		} else {
			count--
			map.set(item, count === 0 ? "N" : count)
			map.set(arr[i], fCount - 1 === 0 ? "N" : fCount - 1)
		}
	}
	for (let val of map.values()) {
		if (val !== "N") {
			return false
		}
	}
	return true
} */

var canReorderDoubled = function(arr) {
    const map = new Map();
    for (const x of arr) {
        map.set(x, (map.get(x) || 0) + 1);
    }
    if ((map.get(0) || 0) % 2 !== 0) {
        return false;
    }

	arr.sort((a, b) => Math.abs(a) - Math.abs(b))

    for(let item of arr) {
        if ((map.get(2 * item) || 0) < map.get(item)) {
            return false
        }
        map.set(2 * item, (map.get(2 * item) || 0) - map.get(item))
    }
    return true
};

console.log(canReorderDoubled([2,1,2,1,1,1,2,2]))
