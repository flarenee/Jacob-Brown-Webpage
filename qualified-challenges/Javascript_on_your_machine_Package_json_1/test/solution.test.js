const path = require('path');
const fs = require('fs');
const { expect } = require("chai");

const file_path = path.join(__dirname, '..', 'package.json');
const contents = fs.readFileSync(file_path, 'utf-8')
const json = JSON.parse(contents);

describe("Solution: Package.json", () => {
  it("should have a description", () => {
    expect(json.description).to.be.ok;
  });
  
  it("should have an author", () => {
    expect(json.author).to.be.ok;
  });
  
  it("should have a start script that runs the main.js file with node", () => {
    expect(json.scripts.start).to.equal("node main.js");
  });
});
