const { expect } = require("chai");
const {
  getProductsBySize,
  moreThanThreeProducts,
  checkForSizeByName,
} = require("../src/solution");

describe("Solution Functions", () => {
  let products = [
    {
      name: "Light Grey Chino Skinny Shorts",
      priceInCents: 1999,
      availableSizes: [28, 30, 32, 34, 38],
    },
    {
      name: "Pink Twill Slim Shirt",
      priceInCents: 1699,
      availableSizes: ["XXS", "XS", "S", "M", "L", "XL", "XXL"],
    },
    {
      name: "Black Longline T-Shirt",
      priceInCents: 1500,
      availableSizes: ["XS", "S", "XL", "XXL"],
    },
  ];

  describe("#getProductsBySize()", () => {
    it("should find the product by name", () => {
      const name = "Pink Twill Slim Shirt";
      const actual = getProductsBySize(products, "XS");
      expect(actual).to.eql([products[1], products[2]]);
    });
  });

  describe("#moreThanThreeProducts()", () => {
    it("should return false if there is less than four products ", () => {
      const actual = moreThanThreeProducts(products);
      expect(actual).to.equal(false);
    });
    it("should return true if there is more than three products ", () => {
      const actual = moreThanThreeProducts([...products, {}]);
      expect(actual).to.equal(true);
    });
  });

  describe("#checkForSizeByName()", () => {
    it("should return false if the item does not exist", () => {
      const actual = checkForSizeByName(
        products,
        "Green Longline T-Shirt",
        "XS"
      );
      expect(actual).to.equal(false);
    });

    it("should return false if the item size does not exist", () => {
      const actual = checkForSizeByName(
        products,
        "Black Longline T-Shirt",
        "M"
      );
      expect(actual).to.equal(false);
    });

    it("should return true if the item size does exist", () => {
      const actual = checkForSizeByName(
        products,
        "Black Longline T-Shirt",
        "XS"
      );
      expect(actual).to.equal(true);
    });
  });
});

describe("Solution Implementation", () => {
  describe("#getProductsBySize()", () => {
    it("should assign `products[i]` to a named variable", () => {
      const content = getProductsBySize.toString();
      expect(content).to.include("= products[i]");
      expect(content).not.to.include("return products[i]");
    });
  });

  describe("#moreThanThreeProducts()", () => {
    it("should not return true or false explicitly", () => {
      const content = moreThanThreeProducts.toString();
      expect(content).not.to.include("return false");
      expect(content).not.to.include("return true");
    });
  });

  describe("#checkForSizeByName()", () => {
    it("should assign `products[i]` to a named variable", () => {
      const content = getProductsBySize.toString();
      expect(content).to.include("= products[i]");
      expect(content).not.to.include("return products[i]");
    });
    it("should not return true explicitly", () => {
      const content = checkForSizeByName.toString();
      expect(content).not.to.include("return true");
    });
    it("should check for whether or not the product exists early", () => {
      const content = checkForSizeByName.toString();
      expect(content).to.include("!product");
    });
  });
});
