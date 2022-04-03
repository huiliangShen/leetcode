var cellsInRange = function (s) {
	let [s1, s2] = s.split(":")
	let [startChar, startNumber] = s1.split("")
	let [endChar, endNumber] = s2.split("")
	let res = []
	while (startChar <= endChar) {
		for (let i = +startNumber; i <= +endNumber; i++) {
			res.push(`${startChar}${i}`)
		}
		let char = startChar.charCodeAt()
		char += 1
        startChar = String.fromCharCode(char)
	}
	return res
}

console.log(cellsInRange("K1:L2"))