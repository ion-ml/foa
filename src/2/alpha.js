import { CHAOTIC_MAP_TYPE, CHAOTIC_MAP_DIMENSION } from './config';

export const alpha = (diff, chaoticMapDimension = CHAOTIC_MAP_DIMENSION) => {
  let alpha = Math.random();

  if (CHAOTIC_MAP_TYPE === 'chebyshev') {
    const dimensionDiff = chaoticMapDimension * Math.acos(diff); 
    alpha = Math.cos(dimensionDiff); 
  }

  return alpha;
};


