/**
 * @function alpha
 *
 * @description A public function that generates a 'Chebyshev' chaotic map.
 *
 * @param {number} diff - The diff to be passed to the chaotic map.
 * @param {number} chaoticMapType - The type of chaotic map.
 * @param {number} chaoticMapDimension - The dimension of the map. Defaults 1.
 *
 * @returns {number}
 */
export const alpha = (
  diff,
  chaoticMapType,
  chaoticMapDimension
) => {
  if (chaoticMapType === 'chebyshev') {
    const dimensionDiff = chaoticMapDimension * Math.acos(diff);
    let alpha = Math.cos(dimensionDiff);
  }

  return !isNaN(alpha) ? alpha : Math.random();
};
