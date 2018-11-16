import { Food } from './food';
import { Swarm } from './swarm';

import { NUM_FRUIT_FLIES, NUM_ITERATIONS } from './config';

export const smell = (food, swarm) => {
  swarm.calculateDistanceToFood(food);
  
  const bestPosition = swarm.findFruitFlyClosestToFood(food);
  swarm.smell(bestPosition);

  const { fruitFlies } = swarm;
  return { fruitFlies };
};

export const vision = (food, swarm) => {
  swarm.calculateDistanceToFood(food);
  const bestPosition = swarm.findFruitFlyClosestToFood(food);
  const centre = swarm.findCentre();
  const distance = swarm.calculateDistance(bestPosition, centre);
 
  swarm.moveSwarm(distance);

  const { fruitFlies } = swarm;
  return { fruitFlies };
};

export const foa = (food, swarm, numIterations = NUM_ITERATIONS) => {
  const results = [];
  
  for (var i = 0; i < numIterations; i++) {
    results[i] = {
      smell: smell(food, swarm),
      vision: vision(food, swarm),
    };
  }

  return results;
};

export const run = (
  numFruitFlies = NUM_FRUIT_FLIES, 
  numIterations = NUM_ITERATIONS
) => {
  const food = new Food();
  const swarm = new Swarm(numFruitFlies);
  
  return foa(food, swarm, numIterations);
};

console.log(run());
