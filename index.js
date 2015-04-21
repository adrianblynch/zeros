module.exports = function (number, mask) {

	if (typeof mask === "number") {
		mask = Array(mask + 1).join("0")
	}

	return (mask + number).slice(-Math.max(mask.length, (number + "").length));
}
