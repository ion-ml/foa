import { FruitFly } from './fruitFly';

import { BASE_TEN, NUM_FRUIT_FLIES } from './config';

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
  
  constructor(numFruitFlies = NUM_FRUIT_FLIES) {
    this._fruitFlies = [];
    this._generateFruitFlies(numFruitFlies);
  }
  
  calculateDistanceToFood(food) {
    this.fruitFlies.forEach((fruitFly) => {
      fruitFly.calculateDistanceToFood(food);
    });
  }
  
  /**
   * Find the FruitFly closest to the food.
   *
   * @returns {FruitFly}
   * @access public
   */
  findFruitFlyClosestToFood() {
    return this.fruitFlies.reduce((min, fruitFly) => {
      if (typeof min.distanceToFood === 'undefined') return fruitFly;

      return (fruitFly.distanceToFood < min.distanceToFood ? fruitFly : min);
    }, { distanceToFood: undefined });
  }
  
  smell(bestPosition) {
    this.fruitFlies.forEach((fruitFly) => {
      fruitFly.smell(bestPosition);
    });
  }

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
