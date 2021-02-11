const expect = require("chai").expect;
const averageScore = require("../src/main");

describe("averageScore", () => {
    it("should return the average score among all students", () => {
        const expect = require("chai").expect;
        const input = [
            { name: "Shane Carey", score: 9.5 },
            { name: "Rebecca Mills", score: 8.7 },
            { name: "Catarina Lima", score: 9.7 },
          ];
          const expected = 9.3;
          const actual = averageScore(input);
          expect(actual).to.equal(expected);
    });
  });