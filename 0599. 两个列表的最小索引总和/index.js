/* var findRestaurant = function (list1, list2) {
	const map = new Map()
	const word = new Map()
    let min = Number.MAX_SAFE_INTEGER
	for (let i = 0; i < list1.length; i++) {
		map.set(list1[i], i)
	}
	for (let i = 0; i < list2.length; i++) {
		const item = list2[i]
		const index = map.get(item) ?? -1
		if (index > -1 && index + i <= min) {
			min = index + i
			const items = word.get(min) || []
			items.push(item)
			word.set(min, items)
		}
	}
	return word.get(min)
} */
var findRestaurant = function(list1, list2) {
    const map = new Map()
    let min = Number.MAX_SAFE_INTEGER, word = []
    for(let i = 0;i<list1.length;i++) {
        map.set(list1[i], i)
    }
     for(let i = 0;i<list2.length;i++) {
         const item = list2[i]
         if (!map.has(item)) {
             continue
         }
         const index = map.get(item)
         if (index + i < min) {
             min = index + i
             word = [item]
         } else if (index + i === min) {
             word.push(item)
         }
    }
    return word
};

console.log(
	findRestaurant(
		["Shogun", "Tapioca Express", "Burger King", "KFC"],
		["Piatti", "The Grill at Torrey Pines", "Hungry Hunter Steakhouse", "Shogun"]
	)
)
console.log(findRestaurant(["Shogun", "Tapioca Express", "Burger King", "KFC"], ["KFC", "Shogun", "Burger King"]))
console.log(findRestaurant(["Shogun","Tapioca Express","Burger King","KFC"], ["KFC","Burger King","Tapioca Express","Shogun"]))
