var mocha = require('mocha'),
  assert = require('assert'),
  ms = require('./');

describe('Modular Scale', function() {
  it('should return expected phi scale', function() {
    var expected = [
      17.944,
      11.09,
      6.854,
      4.236,
      2.618,
      1.618,
      1,
      0.618,
      0.382,
      0.236,
      0.146,
      0.09,
      0.056
    ],
    actual = ms(1.618, 12);
    assert.deepEqual(expected, actual, 'Should generate correct scale.');
  });
  it('should return expected octave scale', function() {
    var expected = [
      32,
      16,
      8,
      4,
      2,
      1,
      0.5,
      0.25,
      0.125,
      0.063,
      0.032
    ],
    actual = ms(2, 10);
    console.log(actual);
    assert.deepEqual(expected, actual, 'Should generate correct scale.');
  });
});
