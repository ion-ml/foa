const SQUARED_POWER = 2;
const SUCCESS_CRITERIA = 10000;

export const printCsvResultsPerTrial = (
  trialResults,
  el, 
  numTrials,
  lowerBound,
  upperBound
) => {

  const bestTrial = findBestTrial(trialResults);
  let successes = 0;

  el.append('\n\n');
  el.append(`CSV: results per trial - best trial ${bestTrial.trialIndex}`);
  el.append('\n\n');
  el.append('trial_index');
  el.append(',');
  el.append('success');
  el.append(',');
  el.append('distance best');
  el.append(',');
  el.append('distance current');
  el.append(',');
  el.append('distance diff');
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

    const bestDistance = bestTrial.smellConcentration * Math.pow(bestTrial.smellConcentration, SQUARED_POWER);
    const currentDistance = smellConcentration * Math.pow(smellConcentration, SQUARED_POWER);
    const success = (currentDistance - bestDistance) <= ((upperBound - lowerBound) / SUCCESS_CRITERIA); 

    if (success) successes++;

    el.append('\n');
    el.append(trialIndex);
    el.append(',');
    el.append(success); 
    el.append(',');
    el.append(bestDistance);
    el.append(',');
    el.append(currentDistance);
    el.append(',');
    el.append(currentDistance - bestDistance);
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
  
  el.append('\n\n');
  el.append(`Num successes ${successes}. ${successes / 50}`);
}

const findBestTrial = (trialResults) => {
  
  return trialResults.reduce((min, iterationsPerTrial, trialIndex) => {
    
    const finalIteration = iterationsPerTrial[numTrials -1];
    const { vision } = finalIteration;
    const { smellConcentration } = vision;

    if (typeof min.smellConcentration === 'undefined') return { smellConcentration, trialIndex };

    return (smellConcentration < min.smellConcentration ? { smellConcentration, trialIndex } : min);
  }, { smellConcentration: undefined, trialIndex: undefined});
};
