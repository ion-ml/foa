import { assert } from 'chai'; 
import { FruitFlies } from '../src/fruitFlies';
import { FruitFly } from '../src/fruitFly';

describe('FruitFlies', function() {
  describe('calculateSmellConcentration', () => {
    it('should cause each fruitFly to recalculate its distance to the food', () => {  
      const numFruitFlies = 10;
      const fruitFlies = new FruitFlies(numFruitFlies);
      const allFruitFlyCoordinates = fruitFlies._findAllCoordinates();
      const food = {
        coordinates: {
          x: 25,
          y: 3,
        },
      };

      fruitFlies.calculateSmellConcentration(food);

      allFruitFlyCoordinates.forEach((fruitFlyCoordinates, index) => {
        const fruitFly = new FruitFly(index);

        fruitFly._coordinates = fruitFlyCoordinates;
        fruitFly.calculateSmellConcentration(food);
        
        const expectedDistance = fruitFly.smellConcentration;
        const foundDistance = fruitFlies.fruitFlies[index].smellConcentration;

        assert.equal(foundDistance, expectedDistance);
      });
    });
  });

  describe('findFruitFlyGreatestSmellConcentration', () => {
    it('should return the fruitFly with the maximum smell concentration', () => {
      const numFruitFlies = 3;
      const fruitFlies = new FruitFlies(numFruitFlies);

      fruitFlies._fruitFlies[0]._smellConcentration = 100;
      fruitFlies._fruitFlies[1]._smellConcentration = 50;
      fruitFlies._fruitFlies[2]._smellConcentration = 250;

      assert.equal(fruitFlies.findFruitFlyGreatestSmellConcentration().index, 2);
    });
  });

  describe('fruitFlies', () => {
    it('contains the expected number of FruitFlies', () => {
      const expectedNumFruitFlies = 100;
      const fruitFlies = new FruitFlies(expectedNumFruitFlies);

      assert.equal(fruitFlies.fruitFlies.length, expectedNumFruitFlies);
    });
    it('contains objects which are valid instance of FruitFly', () => {
      const expectedNumFruitFlies = 10;
      const fruitFlies = new FruitFlies(expectedNumFruitFlies);

      fruitFlies.fruitFlies.forEach(fruitFly => {
        assert.instanceOf(fruitFly, FruitFly);
      });
    });
    it('contains objects with numeric coordinates', () => {
      const expectedNumFruitFlies = 10;
      const fruitFlies = new FruitFlies(expectedNumFruitFlies);

      fruitFlies.fruitFlies.forEach(fruitFly => {
        const { x, y } = fruitFly.coordinates;
        assert.isNotNaN(x);
        assert.isNotNaN(y);
      });
    });
  });

  describe('length', () => {
    it('constructs the required number of FruitFlies', () => {
      const expectedNumFruitFlies = 100;
      const fruitFlies = new FruitFlies(expectedNumFruitFlies);

      assert.equal(fruitFlies.length, expectedNumFruitFlies);
    });
  });
});

