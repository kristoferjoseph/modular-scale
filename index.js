var defaultBase = 1
var defaultRatio = 'goldenSection'
var ratioNames = {
  minorSecond: 1.067,
  majorSecond: 1.125,
  minorThird: 1.2,
  majorThird: 1.25,
  perfectFourth: 1.333,
  augFourth: 1.414,
  perfectFifth: 1.5,
  minorSixth: 1.6,
  goldenSection: 1.618,
  majorSixth: 1.667,
  minorSeventh: 1.778,
  majorSeventh: 1.875,
  octave: 2,
  majorTenth: 2.5,
  majorEleventh: 2.667,
  majorTwelfth: 3,
  doubleOctave: 4
}

module.exports = function modularscale (options) {
  options = options || {}
  var base = options.base || defaultBase
  var ratio = options.ratio || defaultRatio

  if (typeof base === 'string') {
    base = parseFloat(base, 10)
    if (Number.isNaN(base)) {
      base = defaultBase
    }
  }

  if (typeof ratio === 'string') {
    ratio = ratioNames[ratio]
      ? ratioNames[ratio]
      : parseFloat(ratio, 10)
  }

  return function ms (value) {
    return value > 0
      ? up(value)
      : down(value * -1)
  }

  function up (value) {
    return round(Math.pow(ratio, value) * base)
  }

  function down (value) {
    return round(base / Math.pow(ratio, value))
  }

  function round (value) {
    return Math.round(value * 1000) / 1000
  }
}
