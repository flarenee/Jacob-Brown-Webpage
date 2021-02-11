const { expect } = require("chai");
const { createSalesProduct, joinSizes } = require("../src/solution");

describe("Solution Functions", () => {
  let product = {
    name: "Light Grey Chino Skinny Shorts",
    priceInCents: 1999,
    availableSizes: [28, 30, 32, 34, 38],
  };
  describe("#createSalesProduct()", () => {
    it("should create a new sales product that includes a new priceInCents", () => {
      const salesTax = 0.1;
      const actual = createSalesProduct(product, salesTax);
      const expected = {
        ...product,
        salesTax: 0.1,
        priceInCents: 2198.9,
      };
      console.log(expected, actual);
      expect(actual).to.eql(expected);
    });
  });

  describe("#joinSizes()", () => {
    it("should return the sales price for a given city", () => {
      const other = {
        name: "Washed Black Denim Overalls",
        priceInCents: 12000,
        availableSizes: [36, 40],
      };
      const actual = joinSizes(product, other);
      expect(actual).to.include.members([28, 30, 32, 34, 36, 38, 40]);
    });
  });
});

describe("Solution Implementation", () => {
  describe("#createSalesProduct()", () => {
    it("should not use product.name", () => {
      expect(createSalesProduct.toString().includes("product.name")).not.to.be.true;
    });
    it("should not use product.availableSizes", () => {
      expect(createSalesProduct.toString().includes("product.availableSizes")).not.to.be.true;
    });
  });
  
  describe("#joinSizes()", () => {
    it("should not use .concat", () => {
      expect(joinSizes.toString().includes(".concat")).not.to.be.true;
    });
    it("should not use a for loop", () => {
      expect(joinSizes.toString().includes("for")).not.to.be.true;
    });
  });
});
