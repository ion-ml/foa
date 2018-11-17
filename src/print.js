import { NUM_FRUIT_FLIES, NUM_ITERATIONS, NUM_TRIALS } from './config';

const el = document.getElementById('results');

export const printCsvBestPositionPerTrial = (trialResults, element = el) => { 
  element.append('\n\n');
  element.append('CSV: best positions per trial');
  element.append('\n\n');
  element.append('trial_num');
  element.append(',');
  element.append('best_position_smell_concentration');

  trialResults.forEach((trialResult, trailIndex) => {
    const finalIteration = trialResult[NUM_ITERATIONS - 1];
    const { vision } = finalIteration;
    const { bestPosition } = vision;
    
    element.append('\n');
    element.append(trailIndex);
    element.append(',');
    element.append(bestPosition.smellConcentration);
  });
};

export const printCsvFruitFlyCoordinatesPerSingleTrial = (trialResults, element = el) => { 
  element.append('\n\n');
  element.append('CSV: fruit fly coordinates per single trial');
  element.append('\n\n');
  element.append('trial_index');
  element.append(',');
  element.append('iteration_index');
  element.append(',');
  element.append('fruit_fly_index');
  element.append(',');
  element.append('fruit_fly_coordinate_x');
  element.append(',');
  element.append('fruit_fly_coordinate_y');

  const fruitFlyIndex = Math.floor(Math.random() * NUM_FRUIT_FLIES);
  const trialIndex = Math.floor(Math.random() * NUM_TRIALS);
  const trial = trialResults[trialIndex];

  trial.forEach((iterationResults, iterationIndex) => {
    const { vision } = iterationResults;
    const { fruitFlies } = vision;
    const { fruitFlies: fruitFlyInstances } = fruitFlies;

    element.append('\n');
    element.append(trialIndex);
    element.append(',');
    element.append(iterationIndex);
    element.append(',');
    element.append(fruitFlyIndex);
    element.append(',');
    element.append(fruitFlyInstances[fruitFlyIndex].coordinates.x);
    element.append(',');
    element.append(fruitFlyInstances[fruitFlyIndex].coordinates.y);
  });
};

export const printCsvSmellConcentrationPerSingleTrial = (trialResults, element = el) => { 
  element.append('\n\n');
  element.append('CSV: smell concentration per single trial');
  element.append('\n\n');
  element.append('trial_num');
  element.append(',');
  element.append('iteration_num');
  element.append(',');
  element.append('best_position_smell_concentration');

  const trialIndex = Math.floor(Math.random() * NUM_TRIALS);
  const trial = trialResults[trialIndex];

  trial.forEach((iterationResults, iterationIndex) => {
    const { vision } = iterationResults;
    const { bestPosition } = vision;

    element.append('\n');
    element.append(trialIndex);
    element.append(',');
    element.append(iterationIndex);
    element.append(',');
    element.append(bestPosition.smellConcentration);
  });
};

export const printCsvFoodSwarmCoordinatesPerSingleTrial = (trialResults, element = el) => { 
  element.append('\n\n');
  element.append('CSV: food and swarm coordinates per single trial');
  element.append('\n\n');
  element.append('trial_num');
  element.append(',');
  element.append('food_coordinate_x');
  element.append(',');
  element.append('food_coordinate_y');
  element.append(',');
  element.append('swarm_coordinate_x');

  const trialIndex = Math.floor(Math.random() * NUM_TRIALS);
  const trial = trialResults[trialIndex];

  trial.forEach((iterationResults, iterationIndex) => {
    const { vision } = iterationResults;
    const { food, swarm } = vision;

    const { coordinates: coordinatesSwarm } = swarm;
    const { x: xSwarm, y: ySwarm } = coordinatesSwarm;
    
    const { coordinates: coordinatesFood } = food;
    const { x: xFood, y: yFood } = coordinatesFood;
    
    element.append('\n');
    element.append(trialIndex);
    element.append(',');
    element.append(iterationIndex);
    element.append(',');
    element.append(xFood);
    element.append(',');
    element.append(yFood);
    element.append(',');
    element.append(xSwarm);
    element.append(',');
    element.append(ySwarm);
  });
};
