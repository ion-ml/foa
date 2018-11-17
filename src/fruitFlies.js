import { FruitFly } from './fruitFly';

import { BASE_TEN, NUM_FRUIT_FLIES, SQUARED_POWER } from './config';

export class FruitFlies {
  
  /**
   * @property food
   * @type {Food}
   * @description The desired food object.
   * @access public
   */
  get food() {
    return this._food;
  }
  
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
   * @param {Food} food - The desired food object.
   * @param {number} numFruitFlies - The number of fruit flies to be created.
   *                               - Defaults to NUM_FRUIT_FLIES.
   */
  constructor(food, numFruitFlies = NUM_FRUIT_FLIES) {
    this._food = food;
    this._fruitFlies = [];
    this._generateFruitFlies(numFruitFlies);
  }
  
  /**
   * Find the best position with regard to f(x)
   *
   * @return {FruitFly} - The fruit fly with the best position.
   */
  findBestPosition() {
    return this.fruitFlies.reduce((max, fruitFly) => {
      if (typeof max.smellConcentration === 'undefined') return fruitFly;

      const fruitFlyFx = Math.pow(fruitFly.smellConcentration, SQUARED_POWER);
      const maxFx = Math.pow(max.smellConcentration, SQUARED_POWER);

      return (fruitFlyFx > maxFx ? fruitFly : max);
    }, { smellConcentration: undefined });
  }

  /**
   * Perform the smell phase upon each fruit fly.
   *
   * @param {FruitFly} bestPosition - The fuit fly with the best position.
   */
  smell() {
    this.fruitFlies.forEach(fruitFly => fruitFly.smell());
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
      this._fruitFlies[i] = new FruitFly(i, this.food);
    }
  }
}
