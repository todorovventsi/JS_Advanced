const { mathEnforcer } = require("./mathEnforcer");
const { expect } = require("chai");

describe("mathEnforcer tests", () => {
	describe("addFive(num) tests", () => {
		it('returns "undefined" for not a number input', () => {
			expect(mathEnforcer.addFive("1")).to.be.undefined;
			expect(mathEnforcer.addFive([])).to.be.undefined;
			expect(mathEnforcer.addFive(true)).to.be.undefined;
			expect(mathEnforcer.addFive({})).to.be.undefined;
			expect(mathEnforcer.addFive()).to.be.undefined;
		});
		it("returns 10 for addFive(5) - positive integer", () => {
			expect(mathEnforcer.addFive(5)).to.equal(10);
		});
		it("returns 0 for addFive(-5) - negative integer", () => {
			expect(mathEnforcer.addFive(-5)).to.equal(0);
		});
		it("returns 10.5 for addFive(5.5) - float", () => {
			expect(mathEnforcer.addFive(5.5)).to.closeTo(10.5, 0.01);
		});
	});

	describe("subtractTen(num) tests", () => {
		it('returns "undefined" for not a number input', () => {
			expect(mathEnforcer.addFive("1")).to.be.undefined;
			expect(mathEnforcer.addFive([])).to.be.undefined;
			expect(mathEnforcer.addFive(true)).to.be.undefined;
			expect(mathEnforcer.addFive({})).to.be.undefined;
			expect(mathEnforcer.addFive()).to.be.undefined;
		});
		it("returns 0 for substracTen(10) - positive integer", () => {
			expect(mathEnforcer.subtractTen(10)).to.equal(0);
		});
		it("returns -20 for substracTen(-10) - negative integer", () => {
			expect(mathEnforcer.subtractTen(-10)).to.equal(-20);
		});
		it("returns 0.5 for substracTen(10.5) - positive float", () => {
			expect(mathEnforcer.subtractTen(10.5)).to.closeTo(0.5, 0.01);
		});
		it("returns -20.5 for substracTen(-10.5) - negative float", () => {
			expect(mathEnforcer.subtractTen(-10.5)).to.closeTo(-20.5, 0.01);
		});
	});

	describe("sum(num1,num2) tests", () => {
		it('returns "undefined" for not a number first param', () => {
			expect(mathEnforcer.sum("1", 1)).to.be.undefined;
			expect(mathEnforcer.sum(true, 1)).to.be.undefined;
			expect(mathEnforcer.sum([], 1)).to.be.undefined;
			expect(mathEnforcer.sum({}, 1)).to.be.undefined;
			expect(mathEnforcer.sum(1)).to.be.undefined;
		});
		it('returns "undefined" for not a number second param', () => {
			expect(mathEnforcer.sum(1, "1")).to.be.undefined;
			expect(mathEnforcer.sum(1, true)).to.be.undefined;
			expect(mathEnforcer.sum(1, [])).to.be.undefined;
			expect(mathEnforcer.sum(1, {})).to.be.undefined;
			expect(mathEnforcer.sum()).to.be.undefined;
		});
		it("returns 2 for sum(1,1) - positive integers", () => {
			expect(mathEnforcer.sum(1, 1)).to.equal(2);
		});
		it("returns -2 for sum(-1,-1) - negative integers", () => {
			expect(mathEnforcer.sum(-1, -1)).to.equal(-2);
		});
		it("returns 2.2 for sum(1.1,1.1) - positive floats", () => {
			expect(mathEnforcer.sum(1.1, 1.1)).to.closeTo(2.2, 0.01);
		});
		it("returns -2.2 for sum(-1.1,-1.1) - negative floats", () => {
			expect(mathEnforcer.sum(-1.1, -1.1)).to.closeTo(-2.2, 0.01);
		});
	});
});
