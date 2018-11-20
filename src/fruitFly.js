import { alpha, ALPHA_STARTING_VALUE } from './alpha';

const BASE_TEN = 10;
const ROOT_POWER = 0.5;
const SMELL_CONCENTRATION_DEFAULT = 0;
const SQUARED_POWER = 2;

export class FruitFly {

  /**
   * @property chaoticMapType
   * @type {string}
   * @description The chaotic map type.
   * @access public
   */
  get chaoticMapType() {
    return this._chaoticMapType;
  }

  /**
   * @property chaoticMapDimension
   * @type {number}
   * @description The chaotic map dimension.
   * @access public
   */
  get chaoticMapDimension() {
    return this._chaoticMapDimension;
  }

  /**
   * @property coordinates
   * @type {Object<string, number>}
   * @description The x, y coordinates the current FruitFly.
   * @access public
   */
  get coordinates() {
    return Object.assign({}, this._coordinates);
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
   * @property hasSmellBeenCalculatedAtLeastOnce
   * @type {bool}
   * @description A flag representing whether or not the smell has been calculated.
   * @access public
   */
  get hasSmellBeenCalculatedAtLeastOnce() {
    return this._chaoticMapType;
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
    return Object.assign({}, this._lastBestPosition);
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
   * @property searchSpaceLowerBound
   * @type {number}
   * @description The lower bound of the X dimension.
   * @access public
   */
  get searchSpaceLowerBound() {
    return this._searchSpaceLowerBound;
  }

  /**
   * @property searchSpaceUpperBound
   * @type {number}
   * @description The upper bound of the X dimension.
   * @access public
   */
  get searchSpaceUpperBound() {
    return this._searchSpaceUpperBound;
  }

  /**
   * @constructor
   *
   * @param {number} index - The identifying number of the current FruitFly.
   * @param {Food} food - The desired food object.
   * @param {Object<string, number>} coordinates - Pre-defined coordinates. Defaults to null.
   * @param {number} searchSpaceLowerBound - The lower bound width. Default to this.searchSpaceLowerBound.
   * @param {number} searchSpaceUpperBound - The upper bound width. Defaults to this.searchSpaceUpperBound.
   *
   * @access public
   */
  constructor(
    index,
    food,
    coordinates = null,
    searchSpaceLowerBound,
    searchSpaceUpperBound,
    chaoticMapType,
    chaoticMapDimension
  ) {

    this._food = food;
    this._index = index;
    this._smellConcentration = SMELL_CONCENTRATION_DEFAULT;
    this._searchSpaceLowerBound = searchSpaceLowerBound;
    this._searchSpaceUpperBound = searchSpaceUpperBound;
    this._chaoticMapType = chaoticMapType;
    this._chaoticMapDimension = chaoticMapDimension;
    this._hasSmellBeenCalculatedAtLeastOnce = false;

    coordinates = coordinates === null ? this._generateStartingCoordinates() : coordinates;
    this._updateCoordinates(coordinates);

    const lastBestPosition = Object.assign({}, coordinates);
    this._lastBestPosition = lastBestPosition;
  }

  /**
   * Smell phase. Move the fruit fly with regard to
   * the 'bestPosition' and a random factor.
   *
   * @returns {null}
   * @access public
   * @since 0.1
   */
  smell() {
    const lowerBound = parseInt(this.searchSpaceLowerBound, BASE_TEN);
    const upperBound = parseInt(this.searchSpaceUpperBound, BASE_TEN);

    const {
      x: xBest,
      y: yBest,
    } = this.lastBestPosition;
    
    const {
      x: xCurrent,
      y: yCurrent,
    } = this.coordinates;

    const xBestNormalised = parseInt(xBest, BASE_TEN) / upperBound;
    const yBestNormalised = parseInt(yBest, BASE_TEN) / upperBound;
    const xCurrentNormalised = parseInt(xCurrent, BASE_TEN) / upperBound;
    const yCurrentNormalised = parseInt(yCurrent, BASE_TEN) / upperBound;
    
    const xDelta = xCurrentNormalised - xBestNormalised;
    const yDelta = yCurrentNormalised - yBestNormalised;

    let xDeltaByAlpha;
    let yDeltaByAlpha;

    if (this.hasSmellBeenCalculatedAtLeastOnce) {
      xDeltaByAlpha = alpha(
        xDelta,
        this.chaoticMapType,
        this.chaoticMapDimension
      );
    } else {
      xDeltaByAlpha = xDelta * ALPHA_STARTING_VALUE;
    }

    if (this.hasSmellBeenCalculatedAtLeastOnce) {
      yDeltaByAlpha = alpha(
        yDelta,
        this.chaoticMapType,
        this.chaoticMapDimension
      );
    } else {
      yDeltaByAlpha = yDelta * ALPHA_STARTING_VALUE;
    }
    
    let xUpdated = parseInt(xCurrent, BASE_TEN) + xDeltaByAlpha;
    let yUpdated = parseInt(yCurrent, BASE_TEN) + yDeltaByAlpha;

    // Enforce upper bound
    if (xUpdated > upperBound) {
      xUpdated = upperBound;
    }

    // Enforce lower bound
    if (xUpdated < lowerBound) {
      xUpdated = lowerBound;
    }

    // Enforce upper bound
    if (yUpdated > upperBound) {
      yUpdated = upperBound;
    }

    // Enforce lower bound
    if (yUpdated < lowerBound) {
      yUpdated = lowerBound;
    }

    const updatedCoordinates = {
      x: xUpdated,
      y: yUpdated,
    };

    this._updateCoordinates(
      updatedCoordinates
    );
  }

  transpose(delta) {
    const { x: xCurrent, y: yCurrent } = this.coordinates;
    const { x: xDelta, y: yDelta } = delta;

    this._updateCoordinates({
      x: xCurrent - xDelta,
      y: yCurrent - yDelta,
    });
  }

  _generateLastBestFruitFly() {
    return new FruitFly(
      this.index,
      this.food,
      this.lastBestPosition,
      this.searchSpaceLowerBound,
      this.searchSpaceUpperBound,
      this.chaoticMapType,
      this.chaoticMapDimension,
    );
  }

  /**
   * A protected method that generates the starting coordinates of the FruitFly.
   *
   * @param {number} index - The identifying number of the current FruitFly.
   * @returns {Objecy<string, number>}
   * @access protected
   */
  _generateStartingCoordinates(rand = false) {
    const lowerBound = parseInt(this.searchSpaceLowerBound, BASE_TEN);
    const upperBound = parseInt(this.searchSpaceUpperBound, BASE_TEN);

    const randX = (rand === false ? Math.random() : rand);
    const randY = (rand === false ? Math.random() : rand);

    let diff = (upperBound - lowerBound);

    const x = lowerBound + (diff * randX);
    const y = lowerBound + (diff * randY);

    return { x, y };
  }

  /**
   * A protected method that may be called to update the coordinates of the fruit fly.
   *
   * @param {Object<string, number>} coordinates - The coordinates to be used to update the fruit fly.
   * @access protected.
   */
  _updateCoordinates(coordinates) {
    this._coordinates = Object.assign({}, coordinates);
    this._updateSmellConcentration();
  }

  _updateLastBestPosition() {
    const lastBestFruitFly = this._generateLastBestFruitFly();

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
