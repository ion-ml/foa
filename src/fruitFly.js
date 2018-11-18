import { alpha } from './alpha';

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

    coordinates = coordinates === null ? this._generateStartingCoordinates() : coordinates;
    this._updateCoordinates(coordinates);
    
    const lastBestPosition = Object.assign({}, coordinates);
    this._lastBestPosition = lastBestPosition;
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

    const xDelta = xCurrent - xBest; 
    const yDelta = yCurrent - yBest; 

    let xAlpha = alpha(
      xDelta,
      this.chaoticMapType,
      this.chaoticMapDimension,
    );

    let xUpdated = xDelta + xCurrent;

    let yAlpha = alpha(
      yDelta,
      this.chaoticMapType,
      this.chaoticMapDimension,
    );

    let yUpdated = yDelta + yCurrent;

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
    const lastBestFruitFly = new FruitFly(
      this.index,
      this.lastBestPosition,
      null,
      this.searchSpaceLowerBound,
      this.searchSpaceUpperBound,
      this.chaoticMapType,
      this.chaoticMapDimension,
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
