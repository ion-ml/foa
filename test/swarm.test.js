import { assert } from 'chai'; 
import { Food } from '../src/food';
import { FruitFlies } from '../src/fruitFlies';
import { Swarm } from '../src/swarm';

describe('Swarm', function() {
  it(`should be instantiated with the coordinates of the bestPosition`, () => {
    const numFruitFlies = 5;
    const food = new Food();
    const fruitFlies = new FruitFlies(food, numFruitFlies);
    const bestPosition = fruitFlies.findBestPosition();

    const { coordinates: coordinatesBest } = bestPosition;
    const { x: xBest, y: yBest } = coordinatesBest;

    const swarm = new Swarm(bestPosition);
    const { coordinates: coordinatesSwarm } = swarm;
    const { x: xSwarm, y: ySwarm } = coordinatesSwarm;
    
    assert.equal(xSwarm, xBest);
    assert.equal(ySwarm, yBest);
  });
});

