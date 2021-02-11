const { expect } = require("chai");
const { checkSize, newYorkCitySalesPrice } = require("../src/solution");

describe("Solution Functions", () => {
  let product = {
    name: "Light Grey Chino Skinny Shorts",
    priceInCents: 1999,
    availableSizes: [28, 30, 32, 34, 38],
  };
  describe("#checkSize()", () => {
    it('should return "We have that size." if the given size is available', () => {
      const actual = checkSize(product, 30);
      expect(actual).to.equal("We have that size.");
    });
    it('should return "We do not have that size." if the given size is not available', () => {
      const actual = checkSize(product, 36);
      expect(actual).to.equal("We do not have that size.");
    });
  });

  describe("#newYorkCitySalesPrice()", () => {
    it("should return the sales price for a given city", () => {
      const actual = newYorkCitySalesPrice(product, "Buffalo");
      expect(actual).to.equal(2173.9125);
    });

    it("should return a default sales price if the city is not listed", () => {
      const actual = newYorkCitySalesPrice(product, "Troy");
      expect(actual).to.equal(2158.92);
    });
  });
});

describe("Solution Implementation", () => {
  describe("#checkSize()", () => {
    it("should use the conditional (ternary) operator", () => {
      expect(checkSize.toString().includes("?")).to.be.true;
    });
  });

  describe("#newYorkCitySalesPrice()", () => {
    it("should use a switch statement", () => {
      expect(newYorkCitySalesPrice.toString().includes("switch")).to.be.true;
      expect(newYorkCitySalesPrice.toString().includes("case")).to.be.true;
      expect(newYorkCitySalesPrice.toString().includes("default")).to.be.true;
    });
  });
});
