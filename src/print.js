export const printCsvDeltaPerSingleTrial = (trialResults, el, numTrials) => { 
  el.append('\n\n');
  el.append('CSV: fruit fly coordinates per single trial');
  el.append('\n\n');
  el.append('trial_index');
  el.append(',');
  el.append('iteration_index');
  el.append(',');
  el.append('delta_x');
  el.append(',');
  el.append('delta_y');

  const trialIndex = Math.floor(Math.random() * numTrials);
  const trial = trialResults[trialIndex];

  trial.forEach((iterationResults, iterationIndex) => {
    const { vision } = iterationResults;
    const { delta } = vision;

    el.append('\n');
    el.append(trialIndex);
    el.append(',');
    el.append(iterationIndex);
    el.append(',');
    el.append(delta.x);
    el.append(',');
    el.append(delta.y);
  });
};

export const printCsvFoodSwarmCoordinates = (trialResults, el, numIterations) => {
  el.append('\n\n');
  el.append('CSV: food swarm coordinates per trial');
  el.append('\n\n');
  el.append('trial_index');
  el.append(',');
  el.append('food_coordinate_x');
  el.append(',');
  el.append('food_coordinate_y');
  el.append(',');
  el.append('swarm_coordinate_x');
  el.append(',');
  el.append('swarm_coordinate_y');
  el.append(',');
  el.append('smell_concentration');
  
  trialResults.forEach((iterationsPerTrial, trialIndex) => {
    const finalIteration = iterationsPerTrial[numIterations -1];
    const { vision } = finalIteration;
    const { food, smellConcentration, swarm } = vision;

    el.append('\n');
    el.append(trialIndex);
    el.append(',');
    el.append(food.coordinates.x);
    el.append(',');
    el.append(food.coordinates.y);
    el.append(',');
    el.append(swarm.coordinates.x);
    el.append(',');
    el.append(swarm.coordinates.y);
    el.append(',');
    el.append(smellConcentration);
  });
};

export const printCsvFoodSwarmCoordinatesPerIteration = (trialResults, el, numTrials) => {
  el.append('\n\n');
  el.append('CSV: food swarm coordinates per iteration');
  el.append('\n\n');
  el.append('trial_index');
  el.append(',');
  el.append('iteration_index');
  el.append(',');
  el.append('food_coordinate_x');
  el.append(',');
  el.append('food_coordinate_y');
  el.append(',');
  el.append('swarm_coordinate_x');
  el.append(',');
  el.append('swarm_coordinate_y');
  el.append(',');
  el.append('smell_concentration');
  el.append(',');
  el.append('fruit_fly_10_coordinate_y');
  el.append(',');
  el.append('fruit_fly_10_coordinate_x');
  
  trialResults.forEach((iterationsPerSingleTrial, trialIndex) => {
    iterationsPerSingleTrial.forEach((iteration, iterationIndex) => {
      const { smell, vision } = iteration;
      const { food, smellConcentration, swarm } = vision;
      const { fruitFlies } = smell;
      const { fruitFlies: fruitFlyInstances } = fruitFlies;
      const { coordinates } = fruitFlyInstances[1];
      const { x, y } = coordinates;

      el.append('\n');
      el.append(trialIndex);
      el.append(',');
      el.append(iterationIndex);
      el.append(',');
      el.append(food.coordinates.x);
      el.append(',');
      el.append(food.coordinates.y);
      el.append(',');
      el.append(swarm.coordinates.x);
      el.append(',');
      el.append(swarm.coordinates.y);
      el.append(',');
      el.append(smellConcentration);
      el.append(',');
      el.append(x);
      el.append(',');
      el.append(y);
    });
  });
}
