import { assert } from 'chai'; 
import { Food } from '../src/food';

describe('Food', function() {
  describe('_generateRandomInt', () => {
    const min = 2;
    const max = 4;
    
    it(`should return a value between the min, ${min}, and max, ${max}`, () => {
      const food = new Food(max, min);
      const randomInt = food._generateRandomInt();

      assert.isAtLeast(randomInt, min, `${randomInt} is greater than or equal to ${min}`);
      assert.isAtMost(randomInt, max, `${randomInt} is lower than or equal to ${max}`);
    });
  });
  describe('_generateCoordinates', () => {
    const min = 2;
    const max = 4;
    
    it(`should return x and y coordinates between the min, ${min}, and max, ${max}`, () => {
      const food = new Food(max, min);
      const { x, y } = food.coordinates;

      assert.isAtLeast(x, min, `x, ${x}, is greater than or equal to ${min}`);
      assert.isAtMost(x, max, `x, ${x}, is lower than or equal to ${max}`);
      
      assert.isAtLeast(y, min, `y, ${y}, is greater than or equal to ${min}`);
      assert.isAtMost(y, max, `y, ${y}, is lower than or equal to ${max}`);
    });
  });
});

