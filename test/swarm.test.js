import { assert } from 'chai'; 

import { Food } from '../src/food';
import { FruitFly } from '../src/fruitFly';
import { FruitFlies } from '../src/fruitFlies';
import { Swarm } from '../src/swarm';

const lowerBound = -10;
const upperBound = 10;

describe('Swarm', function() {
  describe('constructor', () => {
    it(`should be instantiated with the coordinates of the bestPosition`, () => {
      const numFruitFlies = 5;
      const food = new Food(lowerBound, upperBound);
      const fruitFlies = new FruitFlies(
        food,
        numFruitFlies,
        null,
        lowerBound,
        upperBound,
        'chebyshev',
        1
      );
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
  describe('_deriveDelta', () => {
    const index = 1;
    const food = new Food(lowerBound, upperBound);
    const bestPositionCurrent = new FruitFly(
      index,
      food,
      null,
      lowerBound,
      upperBound,
      'chebyshev',
      1
    );

    bestPositionCurrent._updateCoordinates({ x: 1, y: 2 });

    const indexNext = 2;
    const bestPositionNext = new FruitFly(
      indexNext,
      food,
      null,
      lowerBound,
      upperBound,
      'chebyshev',
      1
    );

    bestPositionNext._updateCoordinates({ x: 5, y: 3 });

    it('should return the difference between the current and the next best positions', () => {
      const swarm = new Swarm(bestPositionCurrent);
      const expectedDelta = { x: -4, y: -1 };
      const foundDelta = swarm._deriveDelta(bestPositionNext);

      assert.equal(foundDelta.x, expectedDelta.x);
      assert.equal(foundDelta.y, expectedDelta.y);
    });
  });
});

