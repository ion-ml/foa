import { assert } from 'chai'; 
import { Food } from '../../src/1/food'; 
import { foa, smell, vision } from '../../src/1/main'; 
import { Swarm } from '../../src/1/swarm'; 

describe('main', function() {
  describe('foa', () => {
    it('should return results containing an object for each iterations', () => {
      const food = new Food();
      const numFruitFlies = 3;
      const numIterations = 100;
      const swarm = new Swarm(numFruitFlies);
     
      const results = foa(food, swarm, numIterations);
      
      assert.equal(results.length, numIterations);
    });
  });

  describe('smell', () => {
    it(`should always contain numeric coordinates`, () => {
      // Arrange
      const food = new Food();
      const numFruitFlies = 3;
      const swarm = new Swarm(numFruitFlies);

      // Act
      const results = smell(food, swarm);

      // Assert
      const { fruitFlies } = results;

      fruitFlies.forEach((fruitFly) => {
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
      const food = new Food();
      const numFruitFlies = 3;
      const swarm = new Swarm(numFruitFlies);

      // Act
      const results = vision(food, swarm);

      // Assert
      const { fruitFlies } = results;

      fruitFlies.forEach((fruitFly) => {
        const { coordinates } = fruitFly;
        const { x, y } = coordinates;

        assert.isNotNaN(x);
        assert.isNotNaN(y);
      });
    });
  });
});
