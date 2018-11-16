import { assert } from 'chai'; 
import { Food } from '../../src/1/food';
import { FruitFlies } from '../../src/1/fruitFlies';
import { Swarm } from '../../src/1/swarm';

describe('Swarm', function() {
  it(`should be instantiated with the coordinates of the bestPosition`, () => {
    const numFruitFlies = 10;
    const food = new Food();
    const fruitFlies = new FruitFlies(numFruitFlies);
    const bestPosition = fruitFlies.findFruitFlyClosestToFood(food);
    
    const { coordinates: coordinatesBest } = bestPosition;
    const { x: xBest, y: yBest } = coordinatesBest;

    const swarm = new Swarm(bestPosition);
    const { coordinates: coordinatesSwarm } = swarm;
    const { x: xSwarm, y: ySwarm } = coordinatesSwarm;
    
    assert.equal(xSwarm, xBest);
    assert.equal(ySwarm, yBest);
  });
});

