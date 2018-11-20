export const printCsvResultsPerTrial = (trialResults, el, numTrials) => {
  
  const bestTrial = trialResults.reduce((max, iterationsPerTrial, trialIndex) => {
    const finalIteration = iterationsPerTrial[numTrials -1];
    const { vision } = finalIteration;
    const { smellConcentration } = vision;

    if (typeof max.smellConcentration === 'undefined') return { smellConcentration, trialIndex };

    return (smellConcentration > max.smellConcentration ? { smellConcentration, trialIndex } : max);
  }, { smellConcentration: undefined, trialIndex: undefined});

  const worstTrial = trialResults.reduce((min, iterationsPerTrial, trialIndex) => {
    const finalIteration = iterationsPerTrial[numTrials -1];
    const { vision } = finalIteration;
    const { smellConcentration } = vision;

    if (typeof min.smellConcentration === 'undefined') return { smellConcentration, trialIndex };

    return (smellConcentration < min.smellConcentration ? { smellConcentration, trialIndex } : min);
  }, { smellConcentration: undefined, trialIndex: undefined});
  
  let successes = 0;

  el.append('\n\n');
  el.append(`CSV: results per trial - best trial ${bestTrial.trialIndex}`);
  el.append('\n\n');
  el.append('trial_index');
  el.append(',');
  el.append('success');
  el.append(',');
  el.append('distance_best');
  el.append(',');
  el.append('distance_current');
  el.append(',');
  el.append('distance_current_normalised');
  el.append(',');
  el.append('distance_diff');
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

    const bestDistance = 1 / bestTrial.smellConcentration;
    const currentDistance = 1 / smellConcentration;
    const success = currentDistance / 20 <= 0.4; 

    if (success) successes++;

    el.append('\n');
    el.append(trialIndex);
    el.append(',');
    el.append(currentDistance / 20 <= 0.4); 
    el.append(',');
    el.append(bestDistance);
    el.append(',');
    el.append(currentDistance);
    el.append(',');
    el.append(currentDistance / 20 );
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

  const bestResults = trialResults[bestTrial.trialIndex];

  el.append('\n\n');
  el.append(`CSV: results per iteration - for the best trial: ${bestTrial.trialIndex}`);
  el.append('\n\n');
  el.append('trial_index');
  el.append(',');
  el.append('iteration_index');
  el.append(',');
  el.append('food_coordinate_x');
  el.append(',');
  el.append('food_coordinate_y');
  el.append(',');
  el.append('smell_concentration');
  el.append(',');
  el.append('distance');
  el.append(',');
  el.append('best_position_x');
  el.append(',');
  el.append('best_position_y');
  
  bestResults.forEach((perIteration, iterationIndex) => {
    const { smell, vision } = perIteration;
    const { food, bestPosition, fruitFlies, smellConcentration, swarm } = vision;
    
    el.append('\n');
    el.append(bestTrial.trialIndex);
    el.append(',');
    el.append(iterationIndex);
    el.append(',');
    el.append(food.x);
    el.append(',');
    el.append(food.y);
    el.append(',');
    el.append(smellConcentration);
    el.append(',');
    el.append(1 / smellConcentration);
    el.append(',');
    el.append(bestPosition.x);
    el.append(',');
    el.append(bestPosition.y);
  });
  
  const worstResults = trialResults[worstTrial.trialIndex];

  el.append('\n\n');
  el.append(`CSV: results per iteration - for the worst trial: ${worstTrial.trialIndex}`);
  el.append('\n\n');
  el.append('trial_index');
  el.append(',');
  el.append('iteration_index');
  el.append(',');
  el.append('food_coordinate_x');
  el.append(',');
  el.append('food_coordinate_y');
  el.append(',');
  el.append('smell_concentration');
  el.append(',');
  el.append('distance');
  el.append(',');
  el.append('best_position_x');
  el.append(',');
  el.append('best_position_y');
  
  worstResults.forEach((perIteration, iterationIndex) => {
    const { smell, vision } = perIteration;
    const { food, bestPosition, fruitFlies, smellConcentration, swarm } = vision;
    
    el.append('\n');
    el.append(bestTrial.trialIndex);
    el.append(',');
    el.append(iterationIndex);
    el.append(',');
    el.append(food.x);
    el.append(',');
    el.append(food.y);
    el.append(',');
    el.append(smellConcentration);
    el.append(',');
    el.append(1 / smellConcentration);
    el.append(',');
    el.append(bestPosition.x);
    el.append(',');
    el.append(bestPosition.y);
  });
  
  el.append('\n\n');
  el.append(`CSV: all results per iteration`);
  el.append('\n\n');
  el.append('trial_index');

  for (var i = 0; i < 700; i++) {
    el.append(',');
    el.append(`iteration_${i}`);
  }
  
  trialResults.forEach((iterationsPerResult, trialIndex) => {
    
    el.append('\n');
    el.append(trialIndex);
    
    iterationsPerResult.forEach((perIteration, iterationIndex) => {
      const { smell, vision } = perIteration;
      const { food, bestPosition, fruitFlies, smellConcentration, swarm } = vision;
      
      el.append(',');
      el.append(1 / smellConcentration);
    });
  });
};
