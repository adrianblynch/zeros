module.exports = function (number, mask) {
	return (mask + number).slice(-Math.max(mask.length, (number + "").length));
}
