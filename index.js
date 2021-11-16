const defaultBase = 16
const defaultRatio = 1.618
const ratios = {
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

function ModularScale (options={}) {
  let base = options.base || defaultBase
  let ratio = options.ratio || defaultRatio

  if (typeof base === 'string') {
    base = parseFloat(base, 10)
    if (Number.isNaN(base)) {
      base = defaultBase
    }
  }

  if (typeof ratio === 'string') {
    ratio = ratios[ratio]
      ? ratios[ratio]
      : parseFloat(ratio, 10)
    if (Number.isNaN(ratio)) {
      ratio = defaultRatio
    }
  }

  function ms (v, r) {
    return v > 0
      ? up(v, r)
      : down(v * -1, r)
  }

  function up (v, r) {
    const c = Math.pow(ratio, v) * base
    return r
      ? round(relative(c))
      : round(c)
  }

  function down (v, r) {
    const c = base / Math.pow(ratio, v)
    return r
      ? round(relative(c))
      : round(c)
  }

  function relative (v) {
    return v / base
  }

  function round (v) {
    return Math.round(v * 1000) / 1000
  }

  function steps (v=8, r) {
    const s = []
    const half = Math.floor(v * 0.5)
    let i = half * -1
    const l = half + 1
    for (i; i < l; i++) {
      s.push(ms(i, r))
    }
    return s.reverse()
  }

  ms.steps = steps
  return ms
}

ModularScale.ratios = ratios
module.exports = ModularScale
