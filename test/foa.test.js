import { assert } from 'chai'; 

import { Food } from '../src/food'; 
import { FruitFlies } from '../src/fruitFlies'; 
import { Swarm } from '../src/swarm'; 
import { foa, smell, trial, vision } from '../src/foa'; 

const lowerBound = -10;
const upperBound = 10;

describe('foa', function() {
  describe('foa', () => {
    it('should return results containing an object for each iterations', () => {
      const food = new Food(
        lowerBound,
        upperBound
      );
      
      const numFruitFlies = 3;

      const fruitFlies = new FruitFlies(
        food,
        numFruitFlies,
        null,
        lowerBound,
        upperBound,
        'chebyshev',
        1
      );

      const bestPosition = fruitFlies.findBestPosition(food);
      const swarm = new Swarm(bestPosition);
      const numIterations = 100;
      const results = foa(food, fruitFlies, swarm, numIterations);
      
      assert.equal(results.length, numIterations);
    });
  });

  describe('smell', () => {
    it(`should always contain numeric coordinates`, () => {
      // Arrange
      const food = new Food(
        lowerBound,
        upperBound
      );
      
      const numFruitFlies = 3;
      
      const fruitFlies = new FruitFlies(
        food,
        numFruitFlies,
        null,
        lowerBound,
        upperBound,
        'chebyshev',
        1
      );

      // Act
      const { fruitFlies: updatedFruitFlies } = smell(fruitFlies);

      // Assert
      updatedFruitFlies.fruitFlies.forEach((fruitFly) => {
        const { coordinates } = fruitFly;
        const { x, y } = coordinates;

        assert.isNotNaN(x);
        assert.isNotNaN(y);
      });
    });
  });

  describe('vision', () => {
    it('should always contain numeric coordinates', () => {
      // Arrange
      const food = new Food(
        lowerBound,
        upperBound
      );
      
      const numFruitFlies = 3;
      
      const fruitFlies = new FruitFlies(
        food,
        numFruitFlies,
        null,
        lowerBound,
        upperBound,
        'chebyshev',
        1
      );
      
      const bestPosition = fruitFlies.findBestPosition(food);
      const swarm = new Swarm(bestPosition);

      // Act
      const results = vision(food, fruitFlies, swarm);

      // Assert
      const { fruitFlies: updatedFruitFlies } = results;

      updatedFruitFlies.fruitFlies.forEach((fruitFly) => {
        const { coordinates } = fruitFly;
        const { x, y } = coordinates;

        assert.isNotNaN(x);
        assert.isNotNaN(y);
      });
    });
  });
  
  describe('trial', () => {
    it('should return results containing an object for each trial', () => {
      const numFruitFlies = 30;
      const numIterations = 300;
      const numTrials = 50;

      const results = trial(numFruitFlies, numIterations, numTrials);
      assert.equal(results.length, numTrials);
    });
  });
});
