import { FruitFly } from './fruitFly';

import { BASE_TEN, NUM_FRUIT_FLIES, SQUARED_POWER } from './config';

export class FruitFlies {
  
  /**
   * @property fruitFlies
   * @type {[FruitFly]}
   * @description An array of FruitFlies.
   * @access public
   */
  get fruitFlies() {
    return this._fruitFlies;
  }

  /**
   * @property length
   * @type {number}
   * @description The number of FruitFlies.
   * @access public
   */
  get length() {
    return this._fruitFlies.length;
  }

  /**
   * @constructor
   *
   * @param {number} numFruitFlies - The number of fruit flies to be created.
   *                               - Defaults to NUM_FRUIT_FLIES.
   */
  constructor(numFruitFlies = NUM_FRUIT_FLIES) {
    this._fruitFlies = [];
    this._generateFruitFlies(numFruitFlies);
  }
  
  /**
   * Calculate the distance to the food.
   *
   * @param {Food} food
   */
  calculateSmellConcentration(food) {
    this.fruitFlies.forEach((fruitFly) => {
      fruitFly.calculateSmellConcentration(food);
    });
  }
  
  /**
   * Find the best position with regard to f(x)
   *
   * @return {FruitFly} - The fruit fly with the best position.
   */
  findBestPosition() {
    const fruitFlies = this.fruitFlies.map((fruitFly) => {
      fruitFly.fx = Math.pow(fruitFly.smellConcentration, SQUARED_POWER);
      return fruitFly;
    });

    return fruitFlies.reduce((min, fruitFly) => {
      if (typeof min.fx === 'undefined') return fruitFly;

      return (fruitFly.fx < min.fx ? fruitFly : min);
    }, { fx: undefined });
  }

  /**
   * Find the FruitFly closest to the food.
   *
   * @returns {FruitFly}
   * @access public
   */
  findFruitFlyGreatestSmellConcentration() {
    return this.fruitFlies.reduce((max, fruitFly) => {
      if (typeof max.smellConcentration === 'undefined') return fruitFly;

      return (fruitFly.smellConcentration > max.smellConcentration ? fruitFly : max);
    }, { smellConcentration: undefined });
  }
  
  /**
   * Perform the smell phase upon each fruit fly.
   *
   * @param {FruitFly} bestPosition - The fuit fly with the best position.
   */
  smell(bestPosition) {
    this.fruitFlies.forEach((fruitFly) => {
      fruitFly.smell(bestPosition);
    });
  }

  /**
   * A protected function that retuns coordinates.
   *
   * @returns {[]} - Returns all of the coordinates from the fruit flies.
   */
  _findAllCoordinates() {
    return this.fruitFlies.map(fruitFly => fruitFly.coordinates);
  }

  /**
   * A protected method that generates the FruitFlies.
   *
   * @param {number} numFruitFlies - The number of FruitFlies within the swarm.
   * @returns {null}
   * @access protected
   */
  _generateFruitFlies(numFruitFlies) {
    for (var i = 0; i < numFruitFlies; i++) {
      this._fruitFlies[i] = new FruitFly(i);
    }
  }
}
