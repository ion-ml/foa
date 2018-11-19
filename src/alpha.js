export const ALPHA_STARTING_VALUE = 0.7;
export const CHEBYSHEV_DELTA_LOWER_BOUND = -1;
export const CHEBYSHEV_DELTA_UPPER_BOUND = 1;

/**
 * @function alpha
 *
 * @description A public function that generates a 'Chebyshev' chaotic map.
 * @param {number} diff - The diff to be passed to the chaotic map.
 * @param {number} chaoticMapType - The type of chaotic map.
 * @param {number} chaoticMapDimension - The dimension of the map. Defaults 1.
 * @returns {number}
 * @access public
 */
export const alpha = (
  delta,
  chaoticMapType,
  chaoticMapDimension
) => {
  let alpha = Math.random();

  if (chaoticMapType === 'chebyshev') {
    
    alpha = chebyshev(
      cleanChebyshevDelta(delta),
      chaoticMapDimension
    );
  }

  return cleanAlpha(alpha);
};

/**
 * @function chebyshev
 *
 * @description Generate the 'Chebyshev' chaotic map value.
 *
 * @param {number} delta - The value to be passed to the chaotic map.
 * @param {number} chaoticMapDimension - The dimension of the chaotic map.
 * @returns {number}
 * @access public
 */
export const chebyshev = (delta, chaoticMapDimension) => {
  const deltaMapDimension = chaoticMapDimension * Math.acos(delta);
  
  return Math.cos(deltaMapDimension);
};

/**
 * @function cleanAlpha
 *
 * @description A 'fail safe' function that corrects erroneous alpha values.
 * @param {number|*} delta - The value of alpha to be cleaned.
 * @returns {number} - The cleaned value of alpha.
 * @access public
 */
export const cleanAlpha = (alpha) => {
  if (typeof alpha === 'undefined' || isNaN(alpha) || alpha === null) {
    return Math.random();
  }

  return alpha;
};

/**
 * @function cleanChebyshevDelta
 *
 * @description A 'fail safe' function that corrects erroneous delta values.
 * @param {number} delta - The value of delta to be cleaned.
 * @returns {number} - The cleaned value of delta.
 * @access public
 */
export const cleanChebyshevDelta = (delta) => {
  let deltaCleaned = delta;

  deltaCleaned = deltaCleaned < CHEBYSHEV_DELTA_LOWER_BOUND ? CHEBYSHEV_DELTA_LOWER_BOUND : deltaCleaned;
  deltaCleaned = deltaCleaned > CHEBYSHEV_DELTA_UPPER_BOUND ? CHEBYSHEV_DELTA_UPPER_BOUND : deltaCleaned;

  return deltaCleaned;
};
