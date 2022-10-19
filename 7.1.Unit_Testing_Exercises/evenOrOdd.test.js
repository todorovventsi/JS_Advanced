const { isOddOrEven } = require("./evenOrOdd");
const { expect } = require("chai");

describe("Testing isOddOrEven(str) function", () => {
	it('returns "undefined" for numeric input type', () => {
		expect(isOddOrEven(1)).to.be.undefined;
	});

	it('returns "undefined" for array input type', () => {
		expect(isOddOrEven(["1"])).to.be.undefined;
	});

	it('returns "undefined" for object input type', () => {
		expect(isOddOrEven({})).to.be.undefined;
	});

	it('returns "undefined" for boolean input type', () => {
		expect(isOddOrEven(true)).to.be.undefined;
	});

	it('returns "even" with "test"', () => {
		expect(isOddOrEven("test")).to.equal("even");
	});

	it('returns "even" with "testtest"', () => {
		expect(isOddOrEven("test")).to.equal("even");
	});

	it('returns "odd" with "test-"', () => {
		expect(isOddOrEven("test-")).to.equal("odd");
	});

	it('returns "odd" with "test-test"', () => {
		expect(isOddOrEven("test-")).to.equal("odd");
	});
});
