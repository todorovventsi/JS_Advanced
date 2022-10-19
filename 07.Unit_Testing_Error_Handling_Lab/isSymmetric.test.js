const { isSymmetric } = require("./isSymmetric");
const { expect } = require("chai");

describe("isSymmetric tests:", () => {
	it('Returns true for ["a", "b", "b", "a"]', () => {
		expect(isSymmetric(["a", "b", "b", "a"])).to.be.true;
	});
	it("Return false for wrong type input", () => {
		expect(isSymmetric(1)).to.be.false;
		expect(isSymmetric("abba")).to.be.false;
		expect(isSymmetric({})).to.be.false;
	});
	it("Returns true for odd elements symetric array", () => {
		expect(isSymmetric(["a", "b", "c", "b", "a"])).to.be.true;
	});
	it("Returns false for non-symetric array", () => {
		expect(isSymmetric(["a", "e", "c", "b", "a"])).to.be.false;
	});
	it("Returns true for symetric numeric array", () => {
		expect(isSymmetric([1, 2, 2, 1])).to.be.true;
	});
	it("Returns false for non-symetric numeric array", () => {
		expect(isSymmetric([1, 1, 2, 1])).to.be.false;
	});
	it("Returns false for type mismatch", () => {
		expect(isSymmetric([1, 1, 2, "1"])).to.be.false;
	});
});
