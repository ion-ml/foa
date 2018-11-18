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
