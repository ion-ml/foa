import {
  WIDTH_LOWER_BOUND,
  WIDTH_UPPER_BOUND,
} from './config';

export class Food {

  /**
   * @property coordinates
   * @type {Object<string, number>}
   * @description The x, y coordinates the Food.
   * @access public
   */
  get coordinates() {
    return this._coordinates;
  }
  
  /**
   * @property max
   * @type {number}
   * @description The max random value.
   * @access public
   */
  get max() {
    return this._max;
  }

  /**
   * @property min
   * @type {number}
   * @description The min random value.
   * @access public
   */
  get min() {
    return this._min;
  }
  /**
   * @constructor
   * @access public
   */
  constructor(max = WIDTH_UPPER_BOUND, min = WIDTH_LOWER_BOUND) {
    this._max = max;
    this._min = min;
    this._coordinates = this._generateFoodCoordinates();
  }

  /**
   * A protected method that generates the coordinates of the Food.
   *
   * @returns {null}
   * @access protected
   */
  _generateFoodCoordinates() {
    return {
      x: this._generateRandomInt(),
      y: this._generateRandomInt(),
    };
  }

  /**
   * A protected method that generates a random int.
   *
   * @returns {number}
   * @access protected
   */
  _generateRandomInt() {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  }
}
