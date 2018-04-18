var test = require('tape')
var modularScale = require('./')

test('Modular Scale', t => {
  var ms = modularScale({})
  t.ok(ms, 'exists')
  t.end()
})

test('should use ratio names', t => {
  var ms = modularScale({
    ratio: 'majorTwelfth',
    base: 1
  })
  t.equals(ms(3), 27)
  t.end()
})

test('should accept bases with units', t => {
  var ms = modularScale({
    ratio: 'majorTwelfth',
    base: '1em'
  })
  t.equals(ms(3), 27)
  t.end()
})

test('should accept ratio numbers as strings', t => {
  var ms = modularScale({
    ratio: '2.667',
    base: 1
  })
  t.equals(ms(3), 18.97)
  t.end()
})

test('should return default scale', t => {
  var ms = modularScale()
  t.equals(ms(-2), 0.382, 'ms(-2)')
  t.equals(ms(-1), 0.618, 'ms(-1)')
  t.equals(ms(1), 1.618, 'ms(1)')
  t.equals(ms(2), 2.618, 'ms(2)')
  t.equals(ms(3), 4.236, 'ms(3)')
  t.end()
})

test('should return specified scale', t => {
  var ms = modularScale({
    ratio: 'perfectFourth',
    base: 18
  })
  t.equals(ms(0), 18, 'ms(0)')
  t.equals(ms(1), 23.994, 'ms(1)')
  t.end()
})

test('should not bomb on empty bases and ratios', t => {
  var ms = modularScale({
    ratio: undefined,
    base: undefined
  })
  t.equals(ms(1), 1.618, 'ms(1)')
  t.end()
})

test('should not bomb when pased completely wrong values', t => {
  var ms = modularScale({
    ratio: 'yolo',
    base: 'nope'
  })
  t.equals(ms(1), 1.618)
  t.end()
})
