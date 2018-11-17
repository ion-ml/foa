import { trial } from './foa';
import {
  printCsvBestPositionPerTrial,
  printCsvFoodSwarmCoordinatesPerTrial,
} from './print';

const trialResults = trial();

printCsvBestPositionPerTrial(trialResults);
printCsvFoodSwarmCoordinatesPerTrial(trialResults);
