import { NUM_FRUIT_FLIES, NUM_ITERATIONS, NUM_TRIALS } from './config';

const el = document.getElementById('results');

export const printCsvDeltaPerSingleTrial = (trialResults, element = el) => { 
  element.append('\n\n');
  element.append('CSV: fruit fly coordinates per single trial');
  element.append('\n\n');
  element.append('trial_index');
  element.append(',');
  element.append('iteration_index');
  element.append(',');
  element.append('delta_x');
  element.append(',');
  element.append('delta_y');

  const trialIndex = Math.floor(Math.random() * NUM_TRIALS);
  const trial = trialResults[trialIndex];

  trial.forEach((iterationResults, iterationIndex) => {
    const { vision } = iterationResults;
    const { delta } = vision;

    element.append('\n');
    element.append(trialIndex);
    element.append(',');
    element.append(iterationIndex);
    element.append(',');
    element.append(delta.x);
    element.append(',');
    element.append(delta.y);
  });
};

