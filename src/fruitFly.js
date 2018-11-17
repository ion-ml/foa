import {
  DISTANCE_TO_FOOD_DEFAULT,
  ROOT_POWER,
  SQUARED_POWER,
  WIDTH_LOWER_BOUND,
  WIDTH_UPPER_BOUND,
} from './config';

import { alpha } from './alpha';

export class FruitFly {

  /**
   * @property coordinates
   * @type {Object<string, number>}
   * @description The x, y coordinates the current FruitFly.
   * @access public
   */
  get coordinates() {
    return this._coordinates;
  }

  /**
   * @property smellConcentration
   * @type {number}
   * @description The 'distance' from the current FruitFly to the food.
   * @access public
   */
  get smellConcentration() {
    return this._smellConcentration || DISTANCE_TO_FOOD_DEFAULT;
  }

  /**
   * @property index
   * @type {number}
   * @description The identifying number of the current FruitFly.
   * @access public
   */
  get index() {
    return this._index;
  }

  /**
   * @property lowerBound
   * @type {number}
   * @description The lower bound of the X dimension.
   * @access public
   */
  get lowerBound() {
    return this._lowerBound;
  }

  /**
   * @property upperBound
   * @type {number}
   * @description The upper bound of the X dimension.
   * @access public
   */
  get upperBound() {
    return this._upperBound;
  }

  /**
   * @constructor
   * @param {number} index - The identifying number of the current FruitFly.
   * @access public
   */
  constructor(
    index,
    lowerBound = WIDTH_LOWER_BOUND,
    upperBound = WIDTH_UPPER_BOUND
  ) {
    this._smellConcentration = 0;
    this._index = index;
    this._lowerBound = lowerBound;
    this._upperBound = upperBound;

    this._coordinates = this._generateStartingCoordinates();
  }

  /**
   * Calculates the distance between the current FruitFly and the food.
   *
   * @param {Food} food - A class that contains the coordinates of the food.
   * @returns {null}
   * @access public
   */
  calculateSmellConcentration(food) {
    let smellConcentration;
    const { coordinates } = food;
    const { x: xFood, y: yFood } = coordinates;
    const { x: xCurrent, y: yCurrent } = this.coordinates;

    const xDiffSquared = Math.pow(
      (xCurrent - xFood),
      SQUARED_POWER
    );

    const yDiffSquared = Math.pow(
      (yCurrent - yFood),
      SQUARED_POWER
    );

    const total = xDiffSquared + yDiffSquared;
    const distance = Math.pow(total, ROOT_POWER);
    const inverseDistance = 1 / distance;

    this._smellConcentration = inverseDistance;
  }

  /**
   * Smell phase. Move the fruit fly with regard to
   * the 'bestPosition' and a random factor.
   *
   * @param {Object, <string, number>} bestPosition
   *
   * @returns {null}
   * @access public
   * @since 0.1
   */
  smell(bestPosition) {
    const { coordinates: bestCoordinates } = bestPosition;
    const { x: xBest, y: yBest } = bestCoordinates;
    const { x: xCurrent, y: yCurrent } = this.coordinates;

    const xDiff = xCurrent - xBest;
    const yDiff = yCurrent - yBest;

    let xUpdated = xCurrent + alpha(xDiff / WIDTH_UPPER_BOUND);
    let yUpdated = yCurrent + alpha(yDiff / WIDTH_UPPER_BOUND);
    
    // Enforce upper bound
    if (xUpdated > WIDTH_UPPER_BOUND) {
      xUpdated = WIDTH_UPPER_BOUND;
    }

    // Enforce lower bound
    if (xUpdated < WIDTH_LOWER_BOUND) {
      xUpdated = WIDTH_LOWER_BOUND;
    }
    
    // Enforce upper bound
    if (yUpdated > WIDTH_UPPER_BOUND) {
      yUpdated = WIDTH_UPPER_BOUND;
    }

    // Enforce lower bound
    if (yUpdated < WIDTH_LOWER_BOUND) {
      yUpdated = WIDTH_LOWER_BOUND;
    }
    
    const updatedCoordinates = {
      x: xUpdated,
      y: yUpdated,
    };

    this._coordinates = updatedCoordinates;
  }

  /**
   * A protected method that generates the starting coordinates of the FruitFly.
   *
   * @param {number} index - The identifying number of the current FruitFly.
   * @returns {Objecy<string, number>}
   * @access protected
   */
  _generateStartingCoordinates(rand = false) {
    rand = (rand === false ? Math.random() : rand);

    return {
      x: this.lowerBound + (this.upperBound - this.lowerBound) *  rand,
      y: this.lowerBound + (this.upperBound - this.lowerBound) *  rand,
    };
  }
}
