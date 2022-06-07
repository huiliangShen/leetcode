/**
 * timeComplexity: O(nlogn)
 * spaceComplexity: O(1)
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function (piles, h) {
	let left = 0,
		right = 0,
		sum = 0
	for (let p of piles) {
		right = Math.max(right, p)
		sum += p
	}

	if (piles.length === h) {
		return right
	}

	left = Math.floor(sum / h)
	while (left < right) {
		const mid = Math.floor((left + right) / 2)
        console.log('m', mid, canShip(piles, h, mid))
		if (canShip(piles, h, mid)) {
			left = mid + 1
            console.log('left', left)
		} else {
			right = mid
            console.log('right', right)
		}
	}
	return right
}

function canShip(list, h, mid) {
	let total = 0
	for (let p of list) {
		if (total > h) {
			return true
		}
		total += p % mid === 0 ? Math.floor(p / mid) : Math.floor(p / mid) + 1
	}
	return total > h
}

console.log(minEatingSpeed([30,11,23,4,20], 31))
// console.log(minEatingSpeed([30,11,23,4,20], 6))