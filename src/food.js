const BASE_TEN = 10;

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
  constructor(min, max) {
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
    const lowerBound = parseInt(this.min, BASE_TEN);
    const upperBound = parseInt(this.max, BASE_TEN);

    return lowerBound + ((upperBound - lowerBound) * Math.random());
  }
}
