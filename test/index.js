var expect = require("chai").expect
var zeros = require("../.")

describe('zeros', function () {

	it('should pad a number when there are more zeros than digits', function () {
		var output = zeros(123, "0000")
		expect(output).to.equal("0123")
	})

	it('should leave number as-is when there are equal zeros and digits', function () {
		var output = zeros(1234, "0000")
		expect(output).to.equal("1234")
	})

	it('should leave number as-is when there are less zeros than digits', function () {
		var output = zeros(1234, "000")
		expect(output).to.equal("1234")
	})

})
