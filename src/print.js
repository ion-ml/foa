import { NUM_FRUIT_FLIES, NUM_ITERATIONS } from './config';

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

export const printCsvFoodSwarmCoordinatesPerTrial = (trialResults, element = el) => {
  element.append('\n\n');
  element.append('CSV: food and swarm positions per trial');
  element.append('\n\n');
  element.append('trial_num');
  element.append(',');
  element.append('food_coordinate_x');
  element.append(',');
  element.append('food_coordinate_y');
  element.append(',');
  element.append('swarm_coordinate_x');
  element.append(',');
  element.append('swarm_coordinate_y');

  trialResults.forEach((trialResult, trailIndex) => {
    const finalIteration = trialResult[NUM_ITERATIONS - 1];
    const { vision } = finalIteration;
    const { food, swarm } = vision;

    const { coordinates: coordinatesSwarm } = swarm;
    const { x: xSwarm, y: ySwarm } = coordinatesSwarm;
    
    const { coordinates: coordinatesFood } = food;
    const { x: xFood, y: yFood } = coordinatesFood;
    
    element.append('\n');
    element.append(trailIndex);
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
