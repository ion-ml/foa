import { FruitFly } from './fruitFly';

const ROOT_POWER = 0.5;
const SQUARED_POWER = 2;

export class FruitFlies {
  
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
   * @property searchSpaceLowerBound
   * @type {number}
   * @description The search space lower bound.
   * @access public
   */
  get searchSpaceLowerBound() {
    return this._searchSpaceLowerBound;
  }

  /**
   * @property searchSpaceUpperBound
   * @type {number}
   * @description The search space upper bound.
   * @access public
   */
  get searchSpaceUpperBound() {
    return this._searchSpaceUpperBound;
  }
  
  /**
   * @constructor
   *
   * @param {Food} food - The desired food object.
   * @param {number} numFruitFlies - The number of fruit flies to be created.
   *                               - Defaults to NUM_FRUIT_FLIES.
   */
  constructor(
    food,
    numFruitFlies,
    searchSpaceLowerBound,
    searchSpaceUpperBound,
    chaoticMapType,
    chaoticMapDimension
  ) {
    this._food = food;
    this._fruitFlies = [];
    this._searchSpaceLowerBound = searchSpaceLowerBound;
    this._searchSpaceUpperBound = searchSpaceUpperBound;
    this._chaoticMapType = chaoticMapType;
    this._chaoticMapDimension = chaoticMapDimension;

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

      const fruitFlyFx = Math.pow(
        fruitFly.smellConcentration,
        SQUARED_POWER
      );
      
      const maxFx = Math.pow(
        max.smellConcentration,
        SQUARED_POWER
      );

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

  transpose(delta) {
    this.fruitFlies.forEach(fruitFly => fruitFly.transpose(delta));
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
      this._fruitFlies[i] = new FruitFly(
        i,
        this.food,
        null,
        this.searchSpaceLowerBound,
        this.searchSpaceUpperBound,
        this.chaoticMapType,
        this.chaoticMapDimension
      );
    }
  }
}
