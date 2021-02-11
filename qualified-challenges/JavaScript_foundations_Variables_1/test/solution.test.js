const path = require("path");
const { readFileSync } = require("fs");
const { expect } = require("chai");
const {
  mostExpensiveItem,
  getAllProductNames,
  addPriceInDollars,
  addMaxSize,
} = require("../src/solution");

const FILE_PATH = path.join(__dirname, "..", "src", "solution.js");
const FILE_CONTENTS = readFileSync(FILE_PATH, "utf-8");

describe("Solution Functions", () => {
  let products = {};
  beforeEach(() => {
    products = [
      {
        name: "Slip Dress",
        priceInCents: 8800,
        availableSizes: [0, 2, 4, 6, 10, 12, 16],
      },
      {
        name: "Relaxed Silk Shirt",
        priceInCents: 9800,
        availableSizes: [0, 10, 12, 2],
      },
      {
        name: "Square-Neck Jumpsuit",
        priceInCents: 8800,
        availableSizes: [6, 10, 14, 2, 12],
      },
    ];
  });

  describe("#mostExpensiveItem", () => {
    it("should select the most expensive item", () => {
      const actual = mostExpensiveItem(products);
      const expected = products.find(
        (product) => product.name === "Relaxed Silk Shirt"
      );
      expect(actual).to.eql(expected);
    });
  });

  describe("#getAllProductNames", () => {
    it("return an array of all the product names", () => {
      const actual = getAllProductNames(products);
      const expected = products.map((product) => product.name);
      expect(actual).to.eql(expected);
    });
  });

  describe("#addPriceInDollars", () => {
    it("should set the price for each individual item", () => {
      const actual = addPriceInDollars(products);
      const expected = products.map((product) => ({
        ...product,
        price: `$${(product.priceInCents / 100).toFixed(2)}`,
      }));
      expect(actual).to.eql(expected);
    });
  });

  describe("#addMaxSize", () => {
    it("should set the price for each individual item", () => {
      const actual = addMaxSize(products);
      const expected = products.map((product) => {
        const sizes = [...product.availableSizes];
        const sorted = sizes.sort((a, b) => a - b);
        return {
          ...product,
          maxSize: sorted[sizes.length - 1],
        };
      });
      console.log(actual, expected);
      expect(actual).to.eql(expected);
    });
  });
});

describe("Solution Implementation", () => {
  it("should not include the `var` keyword", () => {
    const message = "The solution.js file still includes the `var` keyword!";
    expect(FILE_CONTENTS.match(/var\s/), message).not.to.be.ok;
  });

  it("should include the `let` keyword", () => {
    const message = "The solution.js file does not include the `let` keyword!";
    expect(FILE_CONTENTS.match(/let\s/), message).to.be.ok;
  });

  it("should include the `const` keyword in specific cases", () => {
    const message = "The solution.js file does not use `const` where possible!";
    expect(FILE_CONTENTS.includes("const newProduct = products[i]"), message).to
      .be.ok;
    expect(
      FILE_CONTENTS.includes("const size = product.availableSizes[j]"),
      message
    ).to.be.ok;
  });
});
