import { assert } from 'chai';

import { Food } from '../src/food';
import { FruitFly } from '../src/fruitFly';

describe('FruitFly', function() {
  const index = 2;
  const searchSpaceLowerBound = 0;
  const searchSpaceUpperBound = 40;

  describe('constructor', () => {
    const x = Math.floor(Math.random() * 61);
    const y = Math.floor(Math.random() * 34);

    const preDefinedCoordinates = { x, y };
    const index = 10;

    it(`can receive pre-defined coordinates of 'x' = ${x} and 'y' = ${y}`, () => {
      const food = new Food(searchSpaceLowerBound, searchSpaceUpperBound);
      const fruitFly = new FruitFly(
        index,
        food,
        preDefinedCoordinates,
        searchSpaceLowerBound,
        searchSpaceUpperBound,
        'chebyshev',
        1
      );
    
      const { coordinates: coordinatesFruitFly } = fruitFly;
      const { x: xFruitFly, y: yFruitFly } = coordinatesFruitFly;
      
      assert.equal(xFruitFly, x);
      assert.equal(yFruitFly, y);
    });
  });

  describe('_generateStartingCoordinates', () => {
    it(`should generate a pseudo random x coordinate`, () => {
      const food = new Food(searchSpaceLowerBound, searchSpaceUpperBound);
      const fruitFly = new FruitFly(
        index,
        food,
        null,
        searchSpaceLowerBound,
        searchSpaceUpperBound,
        'chebyshev',
        1
      );
      const { x, y } = fruitFly.coordinates;

      assert.isNotNaN(x);
      assert.isAtLeast(x, searchSpaceLowerBound, `${x} is greater than or equal to ${searchSpaceLowerBound}`);
      assert.isAtMost(x, searchSpaceUpperBound, `${x} is lower than or equal to ${searchSpaceUpperBound}`);
      
      assert.isNotNaN(y);
      assert.isAtLeast(y, searchSpaceLowerBound, `${y} is greater than or equal to ${searchSpaceLowerBound}`);
      assert.isAtMost(y, searchSpaceUpperBound, `${y} is lower than or equal to ${searchSpaceUpperBound}`);
    });
  });

  describe('lastBestPosition', () => {
    describe('on instantiation of a FruitFly', () => {
      it(`should contain a clone of the instantiated fruit fly's coordinates`, () => {
        const food = new Food(searchSpaceLowerBound, searchSpaceUpperBound);
        const index = 10;

        const fruitFly = new FruitFly(
          index,
          food,
          null,
          searchSpaceLowerBound,
          searchSpaceUpperBound,
          'chebyshev',
          1
        );
        
        const { lastBestPosition } = fruitFly;
        const { x: xBest, y: yBest } = lastBestPosition;

        const { coordinates } = fruitFly;
        const { x: xCurrent, y: yCurrent } = coordinates;

        assert.equal(xBest, xCurrent);
        assert.equal(yBest, yCurrent);
      });
    });
  });

  describe('searchSpaceLowerBound', () => {
    const searchSpaceLowerBound = -10;
    const searchSpaceUpperBound = 10;

    it(`should contain the correct searchSpaceLowerBound`, () => {
      const food = new Food(searchSpaceLowerBound, searchSpaceUpperBound);
      const fruitFly = new FruitFly(
        index,
        food,
        null,
        searchSpaceLowerBound,
        searchSpaceUpperBound,
        'chebyshev',
        1
      );
      assert.equal(fruitFly.searchSpaceLowerBound, searchSpaceLowerBound, `${fruitFly.searchSpaceLowerBound} is equal to ${searchSpaceLowerBound}`);
    });
  });

  describe('smell', () => {
    it('should move the fruitFly based on the received bestPosition', () => {
      // Arrange
      const food = new Food(searchSpaceLowerBound, searchSpaceUpperBound);
      food._coordinates = {
        x: 100,
        y: 5,
      };
      const index = 10;

      const fruitFly = new FruitFly(
        index,
        food,
        null,
        searchSpaceLowerBound,
        searchSpaceUpperBound,
        'chebyshev',
        1
      );
      fruitFly._coordinates = {
        x: 1,
        y: 1,
      };

      // Act
      fruitFly.smell();
      const { x: xFound, y: yFound } = fruitFly.coordinates;

      // Assert
      assert.isAtLeast(xFound, searchSpaceLowerBound);
      assert.isAtMost(xFound, searchSpaceUpperBound);
      
      assert.isAtLeast(yFound, searchSpaceLowerBound);
      assert.isAtMost(yFound, searchSpaceUpperBound);
    });
  });

  describe('transpose', () => {
    it('should update the coordinates of the current fruit fly with regard to delta', () => {
      const delta = { x: -3, y: 2 };
      const food = new Food(searchSpaceLowerBound, searchSpaceUpperBound);
      const index = 1;
      const fruitFly = new FruitFly(
        index,
        food,
        null,
        searchSpaceLowerBound,
        searchSpaceUpperBound,
        'chebyshev',
        1
      );

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
      const food = new Food(searchSpaceLowerBound, searchSpaceUpperBound);
      const fruitFly = new FruitFly(
        index,
        food,
        null,
        searchSpaceLowerBound,
        searchSpaceUpperBound,
        'chebyshev',
        1
      );
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

  describe('_updateSmellConcentration', () => {
    it('should return the distance between the fruitFly and the food (based on a 3, 4 5 triangle)', () => {
      const food = new Food(searchSpaceLowerBound, searchSpaceUpperBound);
      food._coordinates = { x: 4, y: 5};

      const fruitFly = new FruitFly(
        index,
        food,
        null,
        searchSpaceLowerBound,
        searchSpaceUpperBound,
        'chebyshev',
        1
      );

      fruitFly._coordinates = {
        x: 1,
        y: 1,
      };

      fruitFly._updateSmellConcentration();
      assert.equal(fruitFly.smellConcentration, 0.2);
    });

    it('should return the distance based on a 3, 4 5 triangle moved along X', () => {
      const food = new Food(searchSpaceLowerBound, searchSpaceUpperBound);
      food._coordinates = {
        x: 6,
        y: 5,
      };
      const fruitFly = new FruitFly(
        index,
        food,
        null,
        searchSpaceLowerBound,
        searchSpaceUpperBound,
        'chebyshev',
        1
      );

      fruitFly._coordinates = {
        x: 3,
        x: 3,
        y: 1,
      };

      fruitFly._updateSmellConcentration();
      assert.equal(fruitFly.smellConcentration, 0.2);
    });
  });

  describe('searchSpaceUpperBound', () => {
    const searchSpaceLowerBound = -10;
    const searchSpaceUpperBound = 10;
    
    it(`should contain the correct searchSpaceUpperBound`, () => {
      const food = new Food(searchSpaceLowerBound, searchSpaceUpperBound);
      const fruitFly = new FruitFly(
        index,
        food,
        null,
        searchSpaceLowerBound,
        searchSpaceUpperBound,
        'chebyshev',
        1
      );
      assert.equal(fruitFly.searchSpaceUpperBound, searchSpaceUpperBound, `${fruitFly.searchSpaceUpperBound} is equal to ${searchSpaceUpperBound}`);
    });
  });
});
