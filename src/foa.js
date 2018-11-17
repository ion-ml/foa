import { Food } from './food';
import { FruitFlies } from './fruitFlies';
import { Swarm } from './swarm';

import {
  NUM_FRUIT_FLIES,
  NUM_ITERATIONS, NUM_TRIALS
} from './config';

/**
 * @function foa
 *
 * @description The Fruit Fly Optimisation algorithm.
 *
 * @param {Food} food - The food object.
 * @param {FruitFlies} fruitFlies - An object of fruit flies.
 * @param {Swarm} swarm - The swarm object.
 * @param {number} numIterations - The number of iterations.
 *
 * @returns {[Object<string, Object>]}
 */
export const foa = (
  food,
  fruitFlies,
  swarm,
  numIterations = NUM_ITERATIONS
) => {
  const results = [];

  for (var i = 0; i < numIterations; i++) {
    results[i] = {
      smell: smell(fruitFlies),
      vision: vision(food, fruitFlies, swarm),
    };
  }

  return results;
};

/**
 * @function smell
 *
 * @description The FOA smell phase.
 *
 * @param {Food} food - The food object.
 * @param {FruitFlies} fruitFlies - An object of fruit flies.
 *
 * @returns {Object}
 */
export const smell = (fruitFlies) => {
  fruitFlies.smell();

  return { fruitFlies };
};

/**
 * @function trial
 *
 * @description Run a series of FOA trials.
 *
 * @param {number} numFruitFlies - The number of fruit flies.
 * @param {number} numIterations - The number of iterations per trial.
 * @param {number} numTrials - The number of trials.
 *
 * @returns {[]}
 */
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
    fruitFlies = new FruitFlies(food, numFruitFlies);
    bestPosition = fruitFlies.findBestPosition();
    swarm = new Swarm(bestPosition);

    results[i] = foa(food, fruitFlies, swarm, numIterations);
  }

  return results;
};

/**
 * @function vision
 *
 * @description Run a .
 *
 * @param {number} numFruitFlies - The number of fruit flies.
 * @param {number} numIterations - The number of iterations per trial.
 * @param {number} numTrials - The number of trials.
 *
 * @returns {[]}
 */
export const vision = (food, fruitFlies, swarm) => {
  const bestPosition = fruitFlies.findBestPosition(food);
  const { smellConcentration } = bestPosition;

  swarm.vision(bestPosition);

  return { bestPosition, food, fruitFlies, smellConcentration, swarm };
};
