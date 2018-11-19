export const printCsvResultsPerTrial = (trialResults, el, numTrials) => {
  el.append('\n\n');
  el.append('CSV: food swarm coordinates per trial');
  el.append('\n\n');
  el.append('trial_index');
  el.append(',');
  el.append('food_coordinate_x');
  el.append(',');
  el.append('food_coordinate_y');
  el.append(',');
  el.append('best_position_x');
  el.append(',');
  el.append('best_position_y');
  el.append(',');
  el.append('swarm_coordinate_x');
  el.append(',');
  el.append('swarm_coordinate_y');
  el.append(',');
  el.append('smell_concentration');

  trialResults.forEach((iterationsPerTrial, trialIndex) => {
    const finalIteration = iterationsPerTrial[numTrials -1];
    const { smell, vision } = finalIteration;
    const { food, bestPosition, fruitFlies, smellConcentration, swarm } = vision;

    el.append('\n');
    el.append(trialIndex);
    el.append(',');
    el.append(food.x);
    el.append(',');
    el.append(food.y);
    el.append(',');
    el.append(bestPosition.x);
    el.append(',');
    el.append(bestPosition.y);
    el.append(',');
    el.append(swarm.x);
    el.append(',');
    el.append(swarm.y);
    el.append(',');
    el.append(smellConcentration);
  });
}
