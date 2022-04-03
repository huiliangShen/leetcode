var maxNumberOfBalloons = function (text) {
	let arr = new Array(5).fill(0)
	for (let o = 0; o < text.length; o++) {
		switch (text[o]) {
			case "b":
				arr[0]++
				break
			case "a":
				arr[1]++
				break
			case "n":
				arr[4]++
				break
			case "l":
				arr[2]++
				break
			case "o":
				arr[3]++
				break
		}
	}
	arr[2] = Math.floor(arr[2] / 2)
	arr[3] = Math.floor(arr[3] / 2)
	console.log(arr)
	return Math.min(...arr)
}

console.log(maxNumberOfBalloons("nlaebolko"))
