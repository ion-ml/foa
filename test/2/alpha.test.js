import { assert } from 'chai'; 

import { alpha } from '../src/alpha';

describe('alpha', () => {
  describe.only('should always return a number from between 0 and 1', () => {
    const min = 0;
    const max = 10;

    const lowerBound = 0;
    const upperBound = 1;

    for (var i = min; i < max; i++) {
      
      it(`when called with a 'diff' value of ${i}`, () => {

        assert.isNotNaN(alpha(i));
        assert.isAtLeast(alpha(i), lowerBound);
        assert.isAtMost(alpha(i), upperBound);
      });
    }
  });
});
