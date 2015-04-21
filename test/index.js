var expect = require("chai").expect
var zeros = require("../.")

describe('zeros', function () {

	describe('with signature zeros(number, zeros)', function () {

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

	describe('with signature zeros(number, number)', function () {

		it('should pad a number with the number of zeros given', function () {
			var output = zeros(123, 4)
			expect(output).to.equal("0123")
		})

		it('should leave number as-is when the number of digits equals that of the number given', function () {
			var output = zeros(1234, 4)
			expect(output).to.equal("1234")
		})

		it('should leave number as-is when the number of digits is more than that of the number given', function () {
			var output = zeros(1234, 3)
			expect(output).to.equal("1234")
		})

	})

})
