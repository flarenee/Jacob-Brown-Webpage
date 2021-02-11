const { expect } = require("chai");
const {
  getPriceInDollars,
  checkIfSizeIsAvailable,
  getProductHeading,
} = require("../src/solution");

describe("Solution", () => {
  let product = {
    name: "Court Sneaker",
    priceInCents: 9800,
    availableSizes: [5.5, 8, 8.5, 9, 9.5, 10, 10.5, 11],
  };
  describe("#getPriceInDollars()", () => {
    it("should convert the price in cents to a string price in dollars", () => {
      const actual = getPriceInDollars(product);
      expect(actual).to.equal("$98.00");
    });
    it("should default to 0 if there is no `priceInCents` key", () => {
      const actual = getPriceInDollars({ name: "Court Sneaker", availableSizes: [] });
      expect(actual).to.equal("$0.00");
    });
    it("should default to 0 if no product is provided", () => {
      const actual = getPriceInDollars();
      expect(actual).to.equal("$0.00");
    });
  });

  describe("#checkIfSizeIsAvailable()", () => {
    it("should return true if the size is available", () => {
      const actual = checkIfSizeIsAvailable(product, 8);
      expect(actual).to.be.true;
    });
    it("should return false if the size is not available", () => {
      const actual = checkIfSizeIsAvailable(product, 7.5);
      expect(actual).to.be.false;
    });
    it("should still work if there is no `availableSizes` key", () => {
      const actual = checkIfSizeIsAvailable({
        name: "Court Sneaker",
        priceInCents: 9800
      }, 7.5);
      expect(actual).to.be.false;
    });
    it("should still work if no product is provided", () => {
      const actual = checkIfSizeIsAvailable(undefined, 7.5);
      expect(actual).to.be.false;
    });
    it("should still work if no arguments are provided", () => {
      const actual = checkIfSizeIsAvailable();
      expect(actual).to.be.false;
    });
  });
});

describe("Implementation", () => {
  describe("#getPriceInDollars()", () => {
    it("should destructure `priceInCents`", () => {
      const content = getPriceInDollars.toString();
      expect(content).not.to.include(".priceInCents");
    });
  })
  
  describe("#checkIfSizeIsAvailable()", () => {
    it("should destructure `availableSizes`", () => {
      const content = checkIfSizeIsAvailable.toString();
      expect(content).not.to.include(".availableSizes");
    });
  })
})
