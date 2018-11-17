import { assert } from 'chai';

import { Food } from '../src/food';
import { FruitFly } from '../src/fruitFly';

import { WIDTH_LOWER_BOUND, WIDTH_UPPER_BOUND } from '../src/config';

describe('FruitFly', function() {
  const index = 2;
  const lowerBound = 0;
  const upperBound = 40;

  describe('calculateSmellConcentration', () => {
    it('should return the distance between the fruitFly and the food (based on a 3, 4 5 triangle)', () => {
      const fruitFly = new FruitFly(index);

      fruitFly._coordinates = {
        x: 1,
        y: 1,
      };

      const food = {
        coordinates: {
          x: 4,
          y: 5,
        },
      };

      fruitFly.calculateSmellConcentration(food);
      assert.equal(fruitFly.smellConcentration, 0.2);
    });

    it('should return the distance based on a 3, 4 5 triangle moved along X', () => {
      const fruitFly = new FruitFly(index);

      fruitFly._coordinates = {
        x: 3,
        y: 1,
      };

      const food = {
        coordinates: {
          x: 6,
          y: 5,
        },
      };

      fruitFly.calculateSmellConcentration(food);
      assert.equal(fruitFly.smellConcentration, 0.2);
    });
  });

  describe('_generateStartingCoordinates', () => {
    it(`should generate a pseudo random x coordinate`, () => {
      const fruitFly = new FruitFly(index, lowerBound, upperBound);
      const { x, y } = fruitFly.coordinates;

      assert.isNotNaN(x);
      assert.isAtLeast(x, lowerBound, `${x} is greater than or equal to ${lowerBound}`);
      assert.isAtMost(x, upperBound, `${x} is lower than or equal to ${upperBound}`);
      
      assert.isNotNaN(y);
      assert.isAtLeast(y, lowerBound, `${y} is greater than or equal to ${lowerBound}`);
      assert.isAtMost(y, upperBound, `${y} is lower than or equal to ${upperBound}`);
    });
  });

  describe('lastBestPosition', () => {
    describe('on instantiation of a FruitFly', () => {
      it('should be a clone of the instantiate FruitFLy', () => {
        const fruitFly = new FruitFly();
        const { lastBestPosition } = fruitFly;

        assert.instanceOf(lastBestPosition, FruitFly);
      });
    });
  });

  describe('lowerBound', () => {
    it(`should contain the correct lowerBound`, () => {
      const fruitFly = new FruitFly(index, lowerBound, upperBound);
      assert.equal(fruitFly.lowerBound, lowerBound, `${fruitFly.lowerBound} is equal to ${lowerBound}`);
    });

    it(`should contain the correct default lowerBound`, () => {
      const fruitFly = new FruitFly(index);
      assert.equal(fruitFly.lowerBound, WIDTH_LOWER_BOUND, `${fruitFly.lowerBound} is equal to ${WIDTH_LOWER_BOUND}`);
    });
  });

  describe('smell', () => {
    it('should move the fruitFly based on the received bestPosition', () => {
      // Arrange
      const food = new Food();
      food._coordinates = {
        x: 100,
        y: 5,
      };

      const fruitFly = new FruitFly(index);
      fruitFly._coordinates = {
        x: 1,
        y: 1,
      };

      // Act
      fruitFly.smell(food);
      const { x: xFound, y: yFound } = fruitFly.coordinates;

      // Assert
      assert.isAtLeast(xFound, WIDTH_LOWER_BOUND);
      assert.isAtMost(xFound, WIDTH_UPPER_BOUND);
      
      assert.isAtLeast(yFound, WIDTH_LOWER_BOUND);
      assert.isAtMost(yFound, WIDTH_UPPER_BOUND);
    });
  });

  describe.only('_updateCoordinates', () => {
    const x = Math.floor(Math.random() * 50);
    const y = Math.floor(Math.random() * 75);

    it(`should update the coordinates with 'x' = ${x} and 'y' = ${y}` , () => {
      // Arrange
      const fruitFly = new FruitFly();
      const updatedCoordinates = { x, y };

      // Act
      fruitFly._updateCoordinates(updatedCoordinates);
      
      // Assert
      const { coordinates: updatedCoordinatesFruitFly } = fruitFly;
      const { x: xUpdated, y: yUpdated } = updatedCoordinatesFruitFly;

      assert.equal(xUpdated, x);
      assert.equal(yUpdated, y);
    });
  });

  describe('upperBound', () => {
    it(`should contain the correct upperBound`, () => {
      const fruitFly = new FruitFly(index, lowerBound, upperBound);
      assert.equal(fruitFly.upperBound, upperBound, `${fruitFly.upperBound} is equal to ${upperBound}`);
    });

    it(`should contain the correct default upperBound`, () => {
      const fruitFly = new FruitFly(index);
      assert.equal(fruitFly.upperBound, WIDTH_UPPER_BOUND, `${fruitFly.upperBound} is equal to ${WIDTH_UPPER_BOUND}`);
    });
  });
});
