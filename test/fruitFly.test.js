import { assert } from 'chai';

import { Food } from '../src/food';
import { FruitFly } from '../src/fruitFly';

import { WIDTH_LOWER_BOUND, WIDTH_UPPER_BOUND } from '../src/config';

describe('FruitFly', function() {
  const index = 2;
  const lowerBound = 0;
  const upperBound = 40;

  describe('constructor', () => {
    const x = Math.floor(Math.random() * 61);
    const y = Math.floor(Math.random() * 34);

    const preDefinedCoordinates = { x, y };
    const index = 10;

    it(`can receive pre-defined coordinates of 'x' = ${x} and 'y' = ${y}`, () => {
      const food = new Food();
      const fruitFly = new FruitFly(index, food, preDefinedCoordinates);
    
      const { coordinates: coordinatesFruitFly } = fruitFly;
      const { x: xFruitFly, y: yFruitFly } = coordinatesFruitFly;
      
      assert.equal(xFruitFly, x);
      assert.equal(yFruitFly, y);
    });
  });

  describe('_generateStartingCoordinates', () => {
    it(`should generate a pseudo random x coordinate`, () => {
      const food = new Food();
      const fruitFly = new FruitFly(index, food, null, lowerBound, upperBound);
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
      it(`should contain a clone of the instantiated fruit fly's coordinates`, () => {
        const food = new Food();
        const index = 10;

        const fruitFly = new FruitFly(index, food);
        
        const { lastBestPosition } = fruitFly;
        const { x: xBest, y: yBest } = lastBestPosition;

        const { coordinates } = fruitFly;
        const { x: xCurrent, y: yCurrent } = coordinates;

        assert.equal(xBest, xCurrent);
        assert.equal(yBest, yCurrent);
      });
    });
  });

  describe('lowerBound', () => {
    it(`should contain the correct lowerBound`, () => {
      const food = new Food();
      const fruitFly = new FruitFly(index, food, null, lowerBound, upperBound);
      assert.equal(fruitFly.lowerBound, lowerBound, `${fruitFly.lowerBound} is equal to ${lowerBound}`);
    });

    it(`should contain the correct default lowerBound`, () => {
      const food = new Food();
      const fruitFly = new FruitFly(index, food);
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
      const index = 10;

      const fruitFly = new FruitFly(index, food);
      fruitFly._coordinates = {
        x: 1,
        y: 1,
      };

      // Act
      fruitFly.smell();
      const { x: xFound, y: yFound } = fruitFly.coordinates;

      // Assert
      assert.isAtLeast(xFound, WIDTH_LOWER_BOUND);
      assert.isAtMost(xFound, WIDTH_UPPER_BOUND);
      
      assert.isAtLeast(yFound, WIDTH_LOWER_BOUND);
      assert.isAtMost(yFound, WIDTH_UPPER_BOUND);
    });
  });

  describe('transpose', () => {
    it('should update the coordinates of the current fruit fly with regard to delta', () => {
      const delta = { x: -3, y: 2 };
      const food = new Food();
      const index = 1;
      const fruitFly = new FruitFly(index, food);

      fruitFly._updateCoordinates({ x: 1, y: 1 });
      fruitFly.transpose(delta);
      const { x, y } = fruitFly.coordinates;

      assert.equal(x, 4);
      assert.equal(y, -1);
    });
  });

  describe('_updateCoordinates', () => {
    const x = Math.floor(Math.random() * 50);
    const y = Math.floor(Math.random() * 75);
    const index = 10;

    it(`should update the coordinates with 'x' = ${x} and 'y' = ${y}` , () => {
      // Arrange
      const food = new Food();
      const fruitFly = new FruitFly(index, food);
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

  describe('_updateLastBestPosition', () => {
    

  });
  
  describe('_updateSmellConcentration', () => {
    it('should return the distance between the fruitFly and the food (based on a 3, 4 5 triangle)', () => {
      const food = new Food();
      food._coordinates = { x: 4, y: 5};

      const fruitFly = new FruitFly(index, food);

      fruitFly._coordinates = {
        x: 1,
        y: 1,
      };

      fruitFly._updateSmellConcentration();
      assert.equal(fruitFly.smellConcentration, 0.2);
    });

    it('should return the distance based on a 3, 4 5 triangle moved along X', () => {
      const food = new Food();
      food._coordinates = {
        x: 6,
        y: 5,
      };
      const fruitFly = new FruitFly(index, food);

      fruitFly._coordinates = {
        x: 3,
        x: 3,
        y: 1,
      };

      fruitFly._updateSmellConcentration();
      assert.equal(fruitFly.smellConcentration, 0.2);
    });
  });

  describe('upperBound', () => {
    it(`should contain the correct upperBound`, () => {
      const food = new Food();
      const fruitFly = new FruitFly(index, food, null, lowerBound, upperBound);
      assert.equal(fruitFly.upperBound, upperBound, `${fruitFly.upperBound} is equal to ${upperBound}`);
    });

    it(`should contain the correct default upperBound`, () => {
      const food = new Food();
      const fruitFly = new FruitFly(index, food);
      assert.equal(fruitFly.upperBound, WIDTH_UPPER_BOUND, `${fruitFly.upperBound} is equal to ${WIDTH_UPPER_BOUND}`);
    });
  });
});
