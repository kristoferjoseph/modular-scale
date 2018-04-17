var test = require('tape')
var modularScale = require('./')

  test.only('should use ratio names', function (t) {
    var ms = modularScale({
      ratio: 'majorTwelfth',
      base: 1
    })
    t.equals(ms(3), 27)
    t.end()
  })

/*
test('Modular Scale', function (t) {

  it('should accept bases with units', function () {
    ms = modularScale({
      ratio: 'majorTwelfth',
      base: '1em'
    })
    expect(ms(3)).to.equal(27)
  })

  it('should accept ratio numbers as strings', function () {
    ms = modularScale({
      ratio: '2.667',
      base: 1
    })
    expect(ms(3)).to.equal(18.97)
  })

  it('should return default scale', function () {
    ms = modularScale()

    expect(ms(-1)).to.equal(0.618)
    expect(ms(0)).to.equal(1)
    expect(ms(1)).to.equal(1.618)
    expect(ms(2)).to.equal(2.618)
    expect(ms(3)).to.equal(4.236)
    expect(ms(4)).to.equal(6.854)
  })

  it('should not bomb on empty bases and ratios', function () {
    ms = modularScale({
      ratios: [],
      bases: []
    })

    expect(ms(-1)).to.equal(0.618)
    expect(ms(0)).to.equal(1)
    expect(ms(1)).to.equal(1.618)
    expect(ms(2)).to.equal(2.618)
    expect(ms(3)).to.equal(4.236)
    expect(ms(4)).to.equal(6.854)
  })

  it('should not bomb when pased completely wrong values', function () {
    ms = modularScale({
      ratios: [0],
      bases: 'fuuuu'
    })

    expect(ms(-1)).to.equal(0.618)
    expect(ms(0)).to.equal(1)
    expect(ms(1)).to.equal(1.618)
    expect(ms(2)).to.equal(2.618)
    expect(ms(3)).to.equal(4.236)
    expect(ms(4)).to.equal(6.854)
  })
})
*/
