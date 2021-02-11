const {expect} = require('chai');
const {
  calculateCubeVolume,
  calculateSphereVolume,
  calculateConeVolume,
  calculateCylinderVolume,
} = require('../src/solution');

describe("Solution", () => {
  describe("#calculateCubeVolume()", () => {
    it('should calculate the volume of a cube', () => {
      const actual = calculateCubeVolume(2);
      expect(actual).to.equal(8);
    })
  });
  
  describe("#calculateSphereVolume()", () => {
    it('should calculate the volume of a cube', () => {
      const actual = calculateSphereVolume(2);
      expect(actual).to.be.closeTo(33.510, 0.05);
    })
  });
  
  describe("#calculateConeVolume()", () => {
    it('should calculate the volume of a cube', () => {
      const actual = calculateConeVolume(2, 4);
      expect(actual).to.be.closeTo(16.755, 0.05);
    })
  });
  
  describe("#calculateCylinderVolume()", () => {
    it('should calculate the volume of a cube', () => {
      const actual = calculateCylinderVolume(2, 4);
      expect(actual).to.be.closeTo(50.265, 0.05);
    })
  });
  
  describe('Arrow Syntax', () => {
    describe('#calculateCubeVolume()', () => {
  it('should use the arrow syntax', () => {
    expect(calculateCubeVolume.toString()).to.include('=>');
  })
})

describe('#calculateSphereVolume()', () => {
  it('should use the arrow syntax', () => {
    expect(calculateSphereVolume.toString()).to.include('=>');
  })
})

describe('#calculateConeVolume()', () => {
  it('should use the arrow syntax', () => {
    expect(calculateConeVolume.toString()).to.include('=>');
  })
})

describe('#calculateCylinderVolume()', () => {
  it('should use the arrow syntax', () => {
    expect(calculateCylinderVolume.toString()).to.include('=>');
  })
})

  })
});
