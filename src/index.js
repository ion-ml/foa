import { trial } from './foa';
import {
  printCsvDeltaPerSingleTrial 
} from './print';

const trialResults = trial();

printCsvDeltaPerSingleTrial(trialResults); 
