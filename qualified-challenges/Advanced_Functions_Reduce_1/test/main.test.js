const { expect } = require("chai");
const { squareKmTotal, parkNameAndState, parkByState } = require("../src/main");

describe("Solution", () => {
  const parks = [
    { name: "Acadia", areaInSquareKm: 198.6, location: { state: "Maine" } },
    {
      name: "Canyonlands",
      areaInSquareKm: 1366.2,
      location: { state: "Utah" },
    },
    {
      name: "Crater Lake",
      areaInSquareKm: 741.5,
      location: { state: "Oregon" },
    },
    {
      name: "Lake Clark",
      areaInSquareKm: 10602,
      location: { state: "Alaska" },
    },
    {
      name: "Kenai Fjords",
      areaInSquareKm: 2710,
      location: { state: "Alaska" },
    },
    {
      name: "Zion",
      areaInSquareKm: 595.9,
      location: { state: "Utah" },
    },
  ];

  describe("squareKmTotal()", () => {
    it("should add up all of the areaInSquareKm values", () => {
      const actual = Math.round(squareKmTotal(parks));
      const expected = 16214;
      expect(actual).to.equal(expected);
    });
    it("should use the `.reduce()` function", () => {
      expect(squareKmTotal.toString()).to.include(".reduce(");
    });
  });

  describe("parkNameAndState()", () => {
    it("should return an object with park names as the keys and states as the value", () => {
      const actual = parkNameAndState(parks);
      const expected = {
        Acadia: "Maine",
        Canyonlands: "Utah",
        "Crater Lake": "Oregon",
        "Kenai Fjords": "Alaska",
        "Lake Clark": "Alaska",
        Zion: "Utah",
      };
      expect(actual).to.eql(expected);
    });
    it("should use the `.reduce()` function", () => {
      expect(parkNameAndState.toString()).to.include(".reduce(");
    });
  });

  describe("parkByState()", () => {
    it("should return an object with the keys as states and the values as parks", () => {
      const actual = parkByState(parks);
      const expected = {
        Alaska: [
          {
            name: "Lake Clark",
            areaInSquareKm: 10602,
            location: { state: "Alaska" },
          },
          {
            name: "Kenai Fjords",
            areaInSquareKm: 2710,
            location: { state: "Alaska" },
          },
        ],
        Maine: [
          {
            name: "Acadia",
            areaInSquareKm: 198.6,
            location: { state: "Maine" },
          },
        ],
        Oregon: [
          {
            name: "Crater Lake",
            areaInSquareKm: 741.5,
            location: { state: "Oregon" },
          },
        ],
        Utah: [
          {
            name: "Canyonlands",
            areaInSquareKm: 1366.2,
            location: { state: "Utah" },
          },
          {
            name: "Zion",
            areaInSquareKm: 595.9,
            location: { state: "Utah" },
          },
        ],
      };
      expect(actual).to.eql(expected);
    });
    it("should use the `.reduce()` function", () => {
      expect(parkByState.toString()).to.include(".reduce(");
    });
  });
});
