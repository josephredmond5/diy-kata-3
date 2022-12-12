const { numberToReversedDigits } = require("../src");

describe('numberToReversedDigits', () => {
  it('returns a reversed array of the numbers', () => {
    expect(numberToReversedDigits(12345)).toEqual([5, 4, 3, 2, 1]);
    expect(numberToReversedDigits(98763)).toEqual([3, 6, 7, 8, 9]);
  });
})