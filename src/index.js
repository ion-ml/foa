import { trial } from './foa';
import {
  printCsvBestPositionPerTrial,
  printCsvFoodSwarmCoordinatesPerSingleTrial,
  printCsvFruitFlyCoordinatesPerSingleTrial,
  printCsvSmellConcentrationPerSingleTrial,
} from './print';

const trialResults = trial();

printCsvFruitFlyCoordinatesPerSingleTrial(trialResults);
printCsvFoodSwarmCoordinatesPerSingleTrial(trialResults);
printCsvSmellConcentrationPerSingleTrial(trialResults);
printCsvBestPositionPerTrial(trialResults);
