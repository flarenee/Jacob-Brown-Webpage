const path = require("path");
const fs = require("fs");
const { expect } = require("chai");
const solution = require("../src/solution");

const file_path = path.join(__dirname, "..", "package.json");
const contents = fs.readFileSync(file_path, "utf-8");
const json = JSON.parse(contents);

describe("Package.json", () => {
  it("should have a description", () => {
    expect(json.description).to.be.ok;
  });

  it("should have an author", () => {
    expect(json.author).to.be.ok;
  });
});

describe("Solution", () => {
  describe("#plantGenerator()", () => {
    it("should use faker", () => {
      const funcBody = solution.toString();
      expect(funcBody).to.include("faker");
    });

    it("should use the color() function in faker", () => {
      const funcBody = solution.toString();
      expect(funcBody).to.include("color()");
    });

    it("should generate plants", () => {
      const plant = solution();
      expect(plant.name).to.be.ok;
      expect(plant.color).to.be.ok;
    });
  });
});
