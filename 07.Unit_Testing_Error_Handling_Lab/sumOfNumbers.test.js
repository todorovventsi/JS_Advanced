let sum = require("./sumOfNumbers").sum;
let expect = require("chai").expect;

describe("Sum number tests", () => {
	it("Returns 4 for input [2,2]", () => {
		expect(sum([2, 2])).to.equal(4);
	});
});
