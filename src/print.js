export const printCsvCoordinatesPerIteration = (trialResults, el, numIterations) => {
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

  for (var i = 0; i < numIterations; i++) {
    el.append(',');
    el.append(`fruit_fly_${i}_x`);
    el.append(',');
    el.append(`fruit_fly_${i}_y`);
  }
  
  trialResults.forEach((iterationsPerSingleTrial, trialIndex) => {
    iterationsPerSingleTrial.forEach((iteration, iterationIndex) => {
      const { smell, vision } = iteration;
      const { food, smellConcentration, swarm } = vision;
      const { fruitFlies } = smell;
      const { fruitFlies: fruitFlyInstances } = fruitFlies;

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

      fruitFlyInstances.forEach((fruitFly) => {

        const { coordinates } = fruitFly;
        const { x, y } = coordinates;

        el.append(',');
        el.append(x);
        el.append(',');
        el.append(y);
      });
    });
  });
}
