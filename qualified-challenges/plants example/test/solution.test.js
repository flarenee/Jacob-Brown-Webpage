const { expect } = require("chai");
const generateRosesByColor = require("../src/main");

describe("generateRosesByColor", () => {
  it("should return an array of roses", () => {
    const colors = ["Red", "Yellow"];
    const actual = generateRosesByColor(colors);
    const expected = [
      { name: "Rose", color: "Red" },
      { name: "Rose", color: "Yellow" },
    ];
    expect(actual).to.eql(expected);
  });
});
