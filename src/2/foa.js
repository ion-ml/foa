import { Food } from './food';
import { FruitFlies } from './fruitFlies';
import { Swarm } from './swarm';

import { NUM_FRUIT_FLIES, NUM_ITERATIONS, NUM_TRIALS } from './config';

export const foa = (food, fruitFlies, swarm, numIterations = NUM_ITERATIONS) => {
  const results = [];
  
  for (var i = 0; i < numIterations; i++) {
    results[i] = {
      smell: smell(food, fruitFlies),
      vision: vision(food, fruitFlies, swarm),
    };
  }

  return results;
};

export const smell = (food, fruitFlies) => {
  fruitFlies.calculateDistanceToFood(food);
  const bestPosition = fruitFlies.findFruitFlyClosestToFood(food);
  
  fruitFlies.smell(bestPosition);
  const { fruitFlies: fruitFlyInstances } = fruitFlies;
  
  return {
    bestPosition,
    fruitFlies: fruitFlyInstances,
  };
};

export const trial = (
  numFruitFlies = NUM_FRUIT_FLIES, 
  numIterations = NUM_ITERATIONS,
  numTrials = NUM_TRIALS
) => {
  const results = [];

  let bestPosition;
  let food;
  let fruitFlies;
  let swarm;

  for (var i = 0; i < numTrials; i++) {
    food = new Food();
    fruitFlies = new FruitFlies(numFruitFlies);
    bestPosition = fruitFlies.findFruitFlyClosestToFood(food);
    swarm = new Swarm(bestPosition);
    
    results[i] = foa(food, fruitFlies, swarm, numIterations);
  }

  return results;
};

export const vision = (food, fruitFlies, swarm) => {
  fruitFlies.calculateDistanceToFood(food);
  const bestPosition = fruitFlies.findFruitFlyClosestToFood(food);
  const { distanceToFood } = bestPosition;

  swarm.vision(bestPosition);

  return { bestPosition, distanceToFood, food, fruitFlies, swarm };
};
