import { assert } from 'chai'; 

import {
  alpha,
  CHEBYSHEV_DELTA_LOWER_BOUND,
  CHEBYSHEV_DELTA_UPPER_BOUND,
  cleanAlpha,
  cleanChebyshevDelta
} from '../src/alpha';

describe('alpha', () => {
  describe('should always return a number from between 0 and 1', () => {
    const min = 0;
    const max = 10;

    const lowerBound = 0;
    const upperBound = 1;

    for (var i = min; i < max; i++) {
      
      it(`when called with a 'diff' value of ${i}`, () => {

        assert.isNotNaN(alpha(i / upperBound));
        assert.isAtLeast(alpha(i / upperBound), lowerBound);
        assert.isAtMost(alpha(i / upperBound), upperBound);
      });
    }
  });

  describe('cleanAlpha', () => {
    const CLEANED_ALPHA_LOWER_BOUND = -1;
    const CLEANED_ALPHA_UPPER_BOUND = 1;

    it(`should return a random value between -1 and 1 when 'alpha' is 'undefined'`, () => {
      const alpha = undefined;
      const alphaCleaned = cleanAlpha(alpha);

      assert.isNotNaN(alphaCleaned);
      assert.isAtLeast(alphaCleaned, CLEANED_ALPHA_LOWER_BOUND);
      assert.isAtMost(alphaCleaned, CLEANED_ALPHA_UPPER_BOUND);
    });
    it(`should return a random value between -1 and 1 when 'alpha' is 'NaN'`, () => {
      const alpha = NaN;
      const alphaCleaned = cleanAlpha(alpha);

      assert.isNotNaN(alphaCleaned);
      assert.isAtLeast(alphaCleaned, CLEANED_ALPHA_LOWER_BOUND);
      assert.isAtMost(alphaCleaned, CLEANED_ALPHA_UPPER_BOUND);
    });
    it(`should return a random value between -1 and 1 when 'alpha' is 'null'`, () => {
      const alpha = null;
      const alphaCleaned = cleanAlpha(alpha);

      assert.isNotNaN(alphaCleaned);
      assert.isAtLeast(alphaCleaned, CLEANED_ALPHA_LOWER_BOUND);
      assert.isAtMost(alphaCleaned, CLEANED_ALPHA_UPPER_BOUND);
    });
  });

  describe('cleanChebyshevDelta', () => {
    it(`should limit delta based upon the lower and upper bounds, ${CHEBYSHEV_DELTA_LOWER_BOUND} and ${CHEBYSHEV_DELTA_UPPER_BOUND}`, () => {
      const deltaValues = [10, -10, 0, -1, 1, 0.5, -0.5, 100, -100];
      const expectedCleanedDeltaValues = [1, -1, 0, -1, 1, 0.5, -0.5, 1, -1];

      deltaValues.forEach((delta, index) => {
        assert.equal(cleanChebyshevDelta(delta), expectedCleanedDeltaValues[index]);
      });
    });
  });
});
