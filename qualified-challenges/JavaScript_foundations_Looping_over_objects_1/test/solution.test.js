const { expect } = require("chai");
const { calculateCartTotal, printCartInventory } = require("../src/solution");

describe("Solution Functions", () => {
  let cart;
  beforeEach(() => {
    cart = {
      "Canvas Tote Bag": { quantity: 2, priceInCents: 1800 },
      "Black and White Chuck On Dress": { quantity: 1, priceInCents: 4400 },
      "Natural Straw Wide Brim Hat": { quantity: 1, priceInCents: 2250 },
      "Blue Stripe Casual Shirt": { quantity: 3, priceInCents: 2000 },
    };
  });

  describe("#calculateCartTotal()", () => {
    it("should return 0 if the cart is empty", () => {
      const actual = calculateCartTotal({});
      expect(actual).to.equal(0);
    });

    it("should return the total (in cents) for the entire cart", () => {
      const actual = calculateCartTotal(cart);
      const expected = 16250;
      expect(actual).to.equal(expected);
    });
  });

  describe("#printCartInventory()", () => {
    it("should return an empty string if the cart is empty", () => {
      const actual = printCartInventory({});
      expect(actual).to.equal("");
    });

    it('should return a string of the item names and quantity, joined by "\n"', () => {
      const actual = printCartInventory(cart);
      const expected =
        "2xCanvas Tote Bag\n1xBlack and White Chuck On Dress\n1xNatural Straw Wide Brim Hat\n3xBlue Stripe Casual Shirt";
      expect(actual).to.contain(expected);
    });
  });
});
