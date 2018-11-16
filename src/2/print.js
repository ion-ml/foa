import { NUM_FRUIT_FLIES, NUM_ITERATIONS } from './config';

const resultsElement = document.getElementById('results');

export const printCsvBestPositionPerTrial = (trialResults) => {
  resultsElement.append('\n\n');
  resultsElement.append('CSV: best positions per trial');
  resultsElement.append('\n\n');
  resultsElement.append('trial_num');
  resultsElement.append(',');
  resultsElement.append('best_position_distance_from_food');

  trialResults.forEach((trialResult, trailIndex) => {
    const finalIteration = trialResult[NUM_ITERATIONS - 1];
    const { vision } = finalIteration;
    const { bestPosition } = vision;
    
    resultsElement.append('\n');
    resultsElement.append(trailIndex);
    resultsElement.append(',');
    resultsElement.append(bestPosition.distanceToFood);
  });
};

export const printCsvFoodSwarmCoordinatesPerTrial = (trialResults) => {
  resultsElement.append('\n\n');
  resultsElement.append('CSV: food and swarm positions per trial');
  resultsElement.append('\n\n');
  resultsElement.append('trial_num');
  resultsElement.append(',');
  resultsElement.append('food_coordinate_x');
  resultsElement.append(',');
  resultsElement.append('food_coordinate_y');
  resultsElement.append(',');
  resultsElement.append('swarm_coordinate_x');
  resultsElement.append(',');
  resultsElement.append('swarm_coordinate_y');

  trialResults.forEach((trialResult, trailIndex) => {
    const finalIteration = trialResult[NUM_ITERATIONS - 1];
    const { vision } = finalIteration;
    const { food, swarm } = vision;

    const { coordinates: coordinatesSwarm } = swarm;
    const { x: xSwarm, y: ySwarm } = coordinatesSwarm;
    
    const { coordinates: coordinatesFood } = food;
    const { x: xFood, y: yFood } = coordinatesFood;
    
    resultsElement.append('\n');
    resultsElement.append(trailIndex);
    resultsElement.append(',');
    resultsElement.append(xFood);
    resultsElement.append(',');
    resultsElement.append(yFood);
    resultsElement.append(',');
    resultsElement.append(xSwarm);
    resultsElement.append(',');
    resultsElement.append(ySwarm);
  });
};

export const printCsvDistancesPerTrialVisionPhase = (trialResults) => {
  resultsElement.append('\n\n');
  resultsElement.append('CSV: distance between the best position per trial and the centre of the swarm at the end of each smell phase');
  resultsElement.append('\n\n');
  resultsElement.append('trial_num');
  resultsElement.append(',');
  resultsElement.append('best_position_distance_from_centre_swarm');

  trialResults.forEach((trialResult, trailIndex) => {
    const { vision } = trialResult[NUM_ITERATIONS - 1];
    const { distance } = vision;
    
    resultsElement.append('\n');
    resultsElement.append(trailIndex);
    resultsElement.append(',');
    resultsElement.append(Math.pow(Math.pow(distance.y, 2) + Math.pow(distance.x, 2), 0.5));
  });
};

export const printCsvBestPositionsPerIterationSmellPhase = (trialResults) => {
  resultsElement.append('\n\n');
  resultsElement.append('CSV: best positions per iteration at the end of each smell phase');
  resultsElement.append('\n\n');
  resultsElement.append('trial_num');
  resultsElement.append(',');
  resultsElement.append('iteration_num');
  resultsElement.append(',');
  resultsElement.append('best_position_distance_from_food');

  trialResults.forEach((trialResult, trailIndex) => {
    trialResult.forEach((resultPerIteration, iterationIndex) => {
      const { smell } = resultPerIteration;
      const { bestPosition } = smell;
    
      resultsElement.append('\n');
      resultsElement.append(trailIndex);
      resultsElement.append(',');
      resultsElement.append(iterationIndex);
      resultsElement.append(',');
      resultsElement.append(bestPosition.distanceToFood);
    });
  });
};

export const printCsvBestPositionsPerIterationVisionPhase = (trialResults) => {
  resultsElement.append('\n\n');
  resultsElement.append('trial_num');
  resultsElement.append(',');
  resultsElement.append('iteration_num');
  resultsElement.append(',');
  resultsElement.append('food_x');
  resultsElement.append(',');
  resultsElement.append('food_y');
  resultsElement.append(',');

  resultsElement.append('best_position_distance');
  resultsElement.append(',');
  resultsElement.append('best_position_x');
  resultsElement.append(',');
  resultsElement.append('best_position_y');
  resultsElement.append(',');
  resultsElement.append('best_position_to_swarm_x');
  resultsElement.append(',');
  resultsElement.append('best_position_to_swarm_y');
  resultsElement.append(',');
  resultsElement.append('best_position_to_swarm_distance');

  trialResults.forEach((trialResult, trailIndex) => {
    trialResult.forEach((iterationResult, iterationIndex) => {

      const { vision } = iterationResult;
      const { bestPosition, centre, distance, food, fruitFlies } = vision;
      
      resultsElement.append('\n');
      resultsElement.append(trailIndex);
      resultsElement.append(',');
      resultsElement.append(iterationIndex);
      resultsElement.append(',');

      resultsElement.append(food.coordinates.x);
      resultsElement.append(',');
      resultsElement.append(food.coordinates.y);
      resultsElement.append(',');
      
      resultsElement.append(bestPosition.distanceToFood);
      resultsElement.append(',');
      resultsElement.append(bestPosition.coordinates.x);
      resultsElement.append(',');
      resultsElement.append(bestPosition.coordinates.y);
      resultsElement.append(',');
      resultsElement.append(distance.x);
      resultsElement.append(',');
      resultsElement.append(distance.y);
      resultsElement.append(',');
      resultsElement.append(Math.pow(Math.pow(distance.y, 2) + Math.pow(distance.x, 2), 0.5));
    });
  });
};
