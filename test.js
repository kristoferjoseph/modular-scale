var mocha = require('mocha'),
    expect = require('chai').expect,
    modularScale = require('./'),
    ms;

describe('Modular Scale', function() {

  it('should use ratio names', function() {
    ms = modularScale({
      ratios: ['majorTwelfth'],
      bases: [1]
    });
    expect(ms(3)).to.equal(27);
  });

  it('should accept bases with units', function() {
    ms = modularScale({
      ratios: ['majorTwelfth'],
      bases: ['1em']
    });
    expect(ms(3)).to.equal(27);
  });

  it('should accept ratio numbers as strings', function() {
    ms = modularScale({
      ratios: ['2.667'],
      bases: [1]
    });
    expect(ms(3)).to.equal(18.97);
  });

  it('should return octave scale with multiple bases', function() {
    ms = modularScale({
      ratios: [2],
      bases: ['16',12]
    });

    expect(ms(-1)).to.equal(12);
    expect(ms(0)).to.equal(12);
    expect(ms('1')).to.equal(16);
    expect(ms(2)).to.equal(24);
    expect(ms(3)).to.equal(32);
    expect(ms('4')).to.equal(48);
  });

  it('should return default scale', function() {
    ms = modularScale();

    expect(ms(-1)).to.equal(0.618);
    expect(ms(0)).to.equal(1);
    expect(ms(1)).to.equal(1.618);
    expect(ms(2)).to.equal(2.618);
    expect(ms(3)).to.equal(4.236);
    expect(ms(4)).to.equal(6.854);
  });

  it('should not bomb on empty bases and ratios', function() {
    ms = modularScale({
      ratios: [],
      bases: []
    });

    expect(ms(-1)).to.equal(0.618);
    expect(ms(0)).to.equal(1);
    expect(ms(1)).to.equal(1.618);
    expect(ms(2)).to.equal(2.618);
    expect(ms(3)).to.equal(4.236);
    expect(ms(4)).to.equal(6.854);
  });

  it('should not bomb when pased completely wrong values', function() {
    ms = modularScale({
      ratios: [0],
      bases: 'fuuuu'
    });

    expect(ms(-1)).to.equal(0.618);
    expect(ms(0)).to.equal(1);
    expect(ms(1)).to.equal(1.618);
    expect(ms(2)).to.equal(2.618);
    expect(ms(3)).to.equal(4.236);
    expect(ms(4)).to.equal(6.854);
  });

});

