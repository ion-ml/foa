import { FruitFly } from './fruitFly';

export class Swarm {

  get coordinates() {
    return this._coordinates;
  }

  /**
   * @constructor
   * @param {number} numFruitFlies - The number of FruitFlies in the swarm.
   * @access public
   */
  constructor(bestPosition) {
    const { coordinates } = bestPosition;
    this._coordinates = coordinates;
  }

  vision(bestPosition) {
    const { coordinates } = bestPosition;
    this._coordinates = coordinates;
  }
}
