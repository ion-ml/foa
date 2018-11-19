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
    // For each coordinate (x, y) calculate the normalised delta
    // between the current value and the best value.
    const { xDelta, yDelta } = this._calculateNormailsedCoordinateDelta();

    // Update each coordiante by alpha.
    const xDeltaByAlpha = this._multiplyDeltaByAlpha(xDelta);
    const yDeltaByAlpha = this._multiplyDeltaByAlpha(yDelta);

    // For each coordinate, add 'deltaByAlpha' to the current value.
    let xUpdated = parseInt(xCurrent, BASE_TEN) + xDeltaByAlpha;
    let yUpdated = parseInt(yCurrent, BASE_TEN) + yDeltaByAlpha;

    const updatedCoordinates = {
      x: this._cleanUpdatedCoordinate(xUpdated),
      y: this._cleanUpdatedCoordinate(yUpdated),
    };

    this._updateCoordinates(
      updatedCoordinates
    );
  }

  /**
   * @function transpose
   *
   * @description A public function that may be called to update the 
   *              current fruitFly by the received delta.
   *
   * @param {Object<string, number>} delta - The change to be applied to the current coordinates.
   * @returns {null}
   * @access public
   */
  transpose(delta) {
    const { x: xCurrent, y: yCurrent } = this.coordinates;
    const { x: xDelta, y: yDelta } = delta;

    this._updateCoordinates({
      x: xCurrent - xDelta,
      y: yCurrent - yDelta,
    });
  }

  /**
   * @function _multiplyDeltaByAlpha
   *
   * @description A protected function that multiplies the received delta value by alpha.
   *              Note that it uses ALPHA_STARTING_VALUE the first time that smell
   *              concentration is calculated (per fruit fly).
   *
   * @param {number} delta - The differnce between the current and the best values for a single coordinate.
   * @return {number} - delta multipled by alpha.
   * @access protected
   */
  _multiplyDeltaByAlpha(delta) {
    if (!this.hasSmellBeenCalculatedAtLeastOnce) {
      
      this._hasSmellBeenCalculatedAtLeastOnce = true;
      // Initial alpha value of 0.7
      return delta * ALPHA_STARTING_VALUE;
    }

    return alpha(
      delta,
      this.chaoticMapType,
      this.chaoticMapDimension
    );
  }

  /**
   * @function _calculateNormalisedCoordinateDelta
   *
   * @description A protected function that returns a delta Object
   *              containing the difference between normalised 
   *              versions of the 'current' and the 'best'
   *              coordinates (for the current fruit fly).
   *
   * @returns {Object<string, number>} - An object of x, y delta values.
   * @access protected
   */
  _calculateNormalisedCoordinateDelta() {
    const {
      xBestNormalised,
      xCurrentNormalised,
      yBestNormalised,
      yCurrentNormalised,
    } = this._deriveNormalisedCopordinates(); 
    
    return {
      xDelta: xCurrentNormalised - xBestNormalised,
      yDelta: yCurrentNormalised - yBestNormalised,
    };
  }

  /**
   * @function _cleanUpdatedCoordinate
   *
   * @description A protected function that may be called to 
   *              'clean' an updated coordinate with regard 
   *              to the upper and lower bounds of the 
   *              search space.
   *
   * @param {number} updatedCoordinate - The coordinate to be cleaned.
   * @returns {number} - The cleaned coordinate.
   * @access protected
   */
  _cleanUpdatedCoordinate(updatedCoordinate) {
    const lowerBound = parseInt(this.searchSpaceLowerBound, BASE_TEN);
    const upperBound = parseInt(this.searchSpaceUpperBound, BASE_TEN);
    
    let cleanedCoordinate = updatedCoordinate;

    // Enforce upper bound
    if (updatedCoordinate > upperBound) {
      cleanedCoordiante = upperBound;
    }

    // Enforce lower bound
    if (updatedCoordiante < lowerBound) {
      cleanedCoordiante = lowerBound;
    }

    return cleanedCoordiante;
  }

  /**
   * @function _deriveNormalisedCoordinates
   *
   * @description A protected function that may be called
   *              to derive normalised versions of both
   *              the 'current' and the 'best' coordinates. 
   *
   * @returns {Object<string, number>} - The normnalised coordinates.
   * @access protected
   */
  _deriveNormalisedCoordinates() {
    const {
      x: xBest,
      y: yBest,
    } = this.lastBestPosition;
    
    const {
      x: xCurrent,
      y: yCurrent,
    } = this.coordinates;

    return {
      xBestNormalised: parseInt(xBest, BASE_TEN) / upperBound,
      yBestNormalised: parseInt(yBest, BASE_TEN) / upperBound,
      xCurrentNormalised: parseInt(xCurrent, BASE_TEN) / upperBound,
      yCurrentNormalised: parseInt(yCurrent, BASE_TEN) / upperBound,
    };
  }

  /**
   * @function _generateLastBestFruitFly
   *
   * @description A protected function that may be called
   *              to return a FruitFly based upon the 
   *              'last best position' coordinates.
   *
   * @returns {FruitFly} - A FruitFly based upon the 'last best position'.
   * @access protected
   */
  _generateLastBestFruitFly() {
    return new FruitFly(
      this.index,
      this.food,
      this.lastBestPosition,
      this.searchSpaceLowerBound,
      this.searchSpaceUpperBound,
      this.chaoticMapType,
      this.chaoticMapDimension
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

  /**
   * @function _updateLastBestPosition
   *
   * @description A protected function that may be called to update
   *              the 'last best position' coordinates. Only does
   *              so when the 'smell concentration' associated with
   *              the 'current fruit fly' is greater then the
   *              'smell concentration' for the 'last best' fruit fly.
   *
   * @returns {null}
   * @access protected
   */
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
