const { expect } = require("chai");
const {
  chooseItemByNameAndSize,
  addProductToCart,
  calculateTotal,
  printReceipt,
} = require("../src/solution");

describe("Solution", () => {
  let products = [
    {
      name: "Court Sneaker",
      priceInCents: 9800,
      availableSizes: [5.5, 8, 8.5, 9, 9.5, 10, 10.5, 11],
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

  describe("#chooseItemByNameAndSize()", () => {
    it("should return null if a product cannot be found by name", () => {
      const actual = chooseItemByNameAndSize(products, "Pink Shorts", "SM");
      expect(actual).to.be.null;
    });
    it("should return null if a product cannot be found by size", () => {
      const actual = chooseItemByNameAndSize(products, "Court Sneaker", 7.5);
      expect(actual).to.be.null;
    });
    it("should return the product if it can be found by name and size", () => {
      const actual = chooseItemByNameAndSize(products, "Court Sneaker", 8);
      expect(actual).to.eql(products[0]);
    });
  });

  describe("#addProductToCart()", () => {
    it("should create a cart and add the product, if only called with a product", () => {
      const item = products[0];
      const actual = addProductToCart(item);
      const expected = {
        [item.name]: {
          priceInCents: item.priceInCents,
          quantity: 1,
        },
      };

      expect(actual).to.eql(expected);
    });
    it("should add a new product, if called with a cart", () => {
      const cart = {
        "Square-Neck Jumpsuit": {
          priceInCents: 8800,
          quantity: 1,
        },
      };
      const item = products[0];
      const actual = addProductToCart(item, cart);
      const expected = {
        ...cart,
        [item.name]: {
          priceInCents: item.priceInCents,
          quantity: 1,
        },
      };

      expect(actual).to.eql(expected);
    });
    it("should increase the quantity of a product, if called with a cart with that item", () => {
      const cart = {
        "Square-Neck Jumpsuit": {
          priceInCents: 8800,
          quantity: 1,
        },
      };
      const item = products[2];
      const actual = addProductToCart(item, cart);
      const expected = {
        [item.name]: {
          priceInCents: item.priceInCents,
          quantity: 2,
        },
      };

      expect(actual).to.eql(expected);
    });
  });

  describe("#calculateTotal()", () => {
    it("should return 0 if the given cart is empty", () => {
      const actual = calculateTotal({});
      const expected = 0;
      expect(actual).to.equal(expected);
    });
    it("should return a total for the cart, in cents", () => {
      const cart = {
        "Square-Neck Jumpsuit": {
          priceInCents: 8800,
          quantity: 1,
        },
        "Relaxed Silk Shirt": {
          priceInCents: 9800,
          quantity: 2,
        },
      };
      const actual = calculateTotal(cart);
      const expected = 28400;
      expect(actual).to.equal(expected);
    });
  });

  describe("#printReceipt()", () => {
    it("should return null if the cart is empty", () => {
      const actual = printReceipt({});
      expect(actual).to.be.null;
    });
    it("should return a receipt of all items in the cart", () => {
      const cart = {
        "Square-Neck Jumpsuit": {
          priceInCents: 8800,
          quantity: 1,
        },
        "Relaxed Silk Shirt": {
          priceInCents: 9800,
          quantity: 2,
        },
      };
      const actual = printReceipt(cart);
      const expected = `1xSquare-Neck Jumpsuit - $88.00\n2xRelaxed Silk Shirt - $98.00\nTotal: $284.00`;
      expect(actual).to.equal(expected);
    });
  });
});
