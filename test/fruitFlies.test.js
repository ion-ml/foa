import { assert } from 'chai'; 

import { Food } from '../src/food';
import { FruitFlies } from '../src/fruitFlies';
import { FruitFly } from '../src/fruitFly';

describe('FruitFlies', function() {
  describe('bestPosition', () => {
    it('should return the fruit fly with the best position', () => {
      const expectedNumFruitFlies = 3;
      const food = new Food();
      food._coordinates = { x: 1, y: 1 };

      const fruitFlies = new FruitFlies(food, expectedNumFruitFlies);
     
      fruitFlies.fruitFlies[0]._updateCoordinates({ x: 100, y: 100 });
      fruitFlies.fruitFlies[1]._updateCoordinates({ x: -5, y: -30 });
      fruitFlies.fruitFlies[2]._updateCoordinates({ x: 46, y: 20 });

      const bestPosition = fruitFlies.findBestPosition();
      
      assert.equal(bestPosition.index, 1);
    });
  });
  describe('fruitFlies', () => {
    it('contains the expected number of FruitFlies', () => {
      const expectedNumFruitFlies = 100;
      const food = new Food();
      const fruitFlies = new FruitFlies(food, expectedNumFruitFlies);

      assert.equal(fruitFlies.fruitFlies.length, expectedNumFruitFlies);
    });
    it('contains objects which are valid instance of FruitFly', () => {
      const food = new Food();
      const expectedNumFruitFlies = 10;
      const fruitFlies = new FruitFlies(food, expectedNumFruitFlies);

      fruitFlies.fruitFlies.forEach(fruitFly => {
        assert.instanceOf(fruitFly, FruitFly);
      });
    });
    it('contains objects with numeric coordinates', () => {
      const lowerBound = -10;
      const upperBound = 10;

      const food = new Food(
        lowerBound,
        upperBound
      );
      
      const expectedNumFruitFlies = 10;
      
      const fruitFlies = new FruitFlies(
        food,
        expectedNumFruitFlies,
        null,
        lowerBound,
        upperBound,
        'chebyshev',
        1
      );

      fruitFlies.fruitFlies.forEach(fruitFly => {
        const { x, y } = fruitFly.coordinates;
        assert.isNotNaN(x);
        assert.isNotNaN(y);
      });
    });
  });

  describe('length', () => {
    it('constructs the required number of FruitFlies', () => {
      const food = new Food();
      const expectedNumFruitFlies = 100;
      const fruitFlies = new FruitFlies(food, expectedNumFruitFlies);

      assert.equal(fruitFlies.length, expectedNumFruitFlies);
    });
  });
});

