import { assert } from 'chai';
import { FruitFly } from '../src/fruitFly';
import { WIDTH_LOWER_BOUND, WIDTH_UPPER_BOUND } from '../src/config';

describe('FruitFly', function() {
  const index = 2;
  const lowerBound = 0;
  const upperBound = 40;

  describe('calculateDistanceToFood', () => {
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

      fruitFly.calculateDistanceToFood(food);
      assert.equal(fruitFly.distanceToFood, 5);
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

      fruitFly.calculateDistanceToFood(food);
      assert.equal(fruitFly.distanceToFood, 5);
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

  describe('move', () => {
    it('should move the fruitFly based on the difference between the current swarm centre and the food', () => {
      const fruitFly = new FruitFly(index);

      fruitFly._coordinates = {
        x: 1,
        y: 1,
      };

      const distanceToMove = {
        x: 100,
        y: 5,
      };

      const { x: xBeforeMove, y: yBeforeMove } = fruitFly.coordinates;
      const { x: xDistance, y: yDistance } = distanceToMove;
      const xExpected = xBeforeMove + xDistance;
      const yExpected = yBeforeMove + yDistance;

      fruitFly.move(distanceToMove);

      const { x: xFound, y: yFound } = fruitFly.coordinates;

      assert.equal(xFound, xExpected);
      assert.equal(yFound, yExpected);
    });
  });

  describe('smell', () => {
    it('should move the fruitFly based on the received bestPosition', () => {
      // Arrange
      const bestPosition = {
        coordinates: {
          x: 100,
          y: 5,
        },
      };

      const fruitFly = new FruitFly(index);
      fruitFly._coordinates = {
        x: 1,
        y: 1,
      };

      // Act
      fruitFly.smell(bestPosition);
      const { x: xFound, y: yFound } = fruitFly.coordinates;

      // Assert
      assert.isAtLeast(xFound, WIDTH_LOWER_BOUND);
      assert.isAtMost(xFound, WIDTH_UPPER_BOUND);
      
      assert.isAtLeast(yFound, WIDTH_LOWER_BOUND);
      assert.isAtMost(yFound, WIDTH_UPPER_BOUND);
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
