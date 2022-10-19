const { lookupChar } = require("./charLookup");
const { expect } = require("chai");

describe("lookupChar tests", () => {
	// First param type check
	it('returns "undefined" for first param wrong type', () => {
		expect(lookupChar(1, 0)).to.be.undefined;
		expect(lookupChar([], 0)).to.be.undefined;
		expect(lookupChar({}, 0)).to.be.undefined;
		expect(lookupChar(true, 0)).to.be.undefined;
	});
	// Second param type check
	it('returns "undefined" for second param wrong type', () => {
		expect(lookupChar("test", "1")).to.be.undefined;
		expect(lookupChar("test", [])).to.be.undefined;
		expect(lookupChar("test", {})).to.be.undefined;
		expect(lookupChar("test", 1.1)).to.be.undefined;
	});
	// Second param validity check
	it("returns error message for invalid index", () => {
		expect(lookupChar("test", -1)).to.equal("Incorrect index");
		expect(lookupChar("test", 4)).to.equal("Incorrect index");
		expect(lookupChar("test", 5)).to.equal("Incorrect index");
	});
	// Functionality check
	it("returns correct char for given index", () => {
		expect(lookupChar("test", 0)).to.equal("t");
		expect(lookupChar("test", 1)).to.equal("e");
		expect(lookupChar("test", 2)).to.equal("s");
		expect(lookupChar("test", 3)).to.equal("t");
	});
});
