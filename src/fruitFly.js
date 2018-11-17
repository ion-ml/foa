import {
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
   * @property food
   * @type {Food}
   * @description The desired food object.
   * @access public
   */
  get food() {
    return this._food;
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
   * @property lastBestPosition
   * @type {Object<string, number>}
   * @description An Object representing the last best coordinates of the current fruit fly.
   * @access public
   */
  get lastBestPosition() {
    return this._lastBestPosition;
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
   * @property smellConcentration
   * @type {number}
   * @description The 'distance' from the current FruitFly to the food.
   * @access public
   */
  get smellConcentration() {
    return this._smellConcentration;
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
   *
   * @param {number} index - The identifying number of the current FruitFly.
   * @param {Food} food - The desired food object.
   * @param {Object<string, number>} coordinates - Pre-defined coordinates. Defaults to null.
   * @param {number} lowerBound - The lower bound width. Default to WIDTH_LOWER_BOUND.
   * @param {number} upperBound - The upper bound width. Defaults to WIDTH_UPPER_BOUND. 
   *
   * @access public
   */
  constructor(
    index,
    food,
    coordinates = null,
    lowerBound = WIDTH_LOWER_BOUND,
    upperBound = WIDTH_UPPER_BOUND,
  ) {
    this._food = food;
    this._index = index;
    this._lowerBound = lowerBound;
    this._smellConcentration = 0;
    this._upperBound = upperBound;

    if (coordinates === null) {
      this._updateCoordinates(
        this._generateStartingCoordinates()
      );

    } else {
      this._updateCoordinates(coordinates);
    }

    this._lastBestPosition = Object.assign({}, this.coordinates);
  }

  /**
   * Smell phase. Move the fruit fly with regard to
   * the 'bestPosition' and a random factor.
   *
   * @param {Food} food - An object representing the food.
   *
   * @returns {null}
   * @access public
   * @since 0.1
   */
  smell() {
    const {
      smellConcentration: smellBest,
      x: xBest,
      y: yBest,
    } = this.lastBestPosition;
    
    const {
      x: xCurrent,
      y: yCurrent,
    } = this.coordinates;

    const xDelta = xCurrent - xBest;
    const yDelta = yCurrent - yBest;

    let xUpdated = xCurrent + alpha(xDelta / WIDTH_UPPER_BOUND)
    let yUpdated = yCurrent + alpha(yDelta / WIDTH_UPPER_BOUND);
   
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

    this._updateCoordinates(updatedCoordinates);
  }

  transpose(delta) {
    const { x: xCurrent, y: yCurrent } = this.coordinates;
    const { x: xDelta, y: yDelta } = delta;
    
    this._updateCoordinates({
      x: xCurrent - xDelta,
      y: yCurrent - yDelta,
    });
  }

  /**
   * A protected method that generates the starting coordinates of the FruitFly.
   *
   * @param {number} index - The identifying number of the current FruitFly.
   * @returns {Objecy<string, number>}
   * @access protected
   */
  _generateStartingCoordinates(rand = false) {
    const randX = (rand === false ? Math.random() : rand);
    const randY = (rand === false ? Math.random() : rand);

    return {
      x: this.lowerBound + (this.upperBound - this.lowerBound) * randX,
      y: this.lowerBound + (this.upperBound - this.lowerBound) * randY,
    };
  }

  /**
   * A protected method that may be called to update the coordinates of the fruit fly.
   *
   * @param {Object<string, number>} coordinates - The coordinates to be used to update the fruit fly.
   * @access protected.
   */
  _updateCoordinates(coordinates) {
    this._coordinates = coordinates;
    this._updateSmellConcentration(this.food);
  }

  _updateLastBestPosition() {
    const lastBestFruitFly = new FruitFly(
      this.index,
      this.lastBestPosition
    );
    
    if (this.smellConcentration > lastBestFruitFly.smellConcentration) {
      this._lastBestPosition = this.coordinates;
    }
  }
  
  /**
   * Calculates the distance between the current FruitFly and the food.
   *
   * @access public
   */
  _updateSmellConcentration() {
    let smellConcentration;
    const { coordinates } = this.food;
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
}
