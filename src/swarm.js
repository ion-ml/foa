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
    const delta = this._deriveDelta(bestPosition);
    
    const { coordinates } = bestPosition;
    this._coordinates = coordinates;

    return delta;
  }

  _deriveDelta(bestPosition) {
    const { coordinates } = bestPosition;
    const { x: xNext, y: yNext } = coordinates;
    const { x: xCurrent, y: yCurrent } = this.coordinates;
   
    return {
      x: xCurrent - xNext,
      y: yCurrent - yNext,
    };
  }
}
