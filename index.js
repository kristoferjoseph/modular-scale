var msBases = [1];
var msRatios = [(1+ Math.sqrt(5))/2];
var ratioNames = {
    minorSecond   : 1.067,
    majorSecond   : 1.125,
    minorThird    : 1.2,
    majorThird    : 1.25,
    perfectFourth : 1.333,
    augFourth     : 1.414,
    perfectFifth  : 1.5,
    minorSixth    : 1.6,
    goldenSection : 1.618,
    majorSixth    : 1.667,
    minorSeventh  : 1.778,
    majorSeventh  : 1.875,
    octave        : 2,
    majorTenth    : 2.5,
    majorEleventh : 2.667,
    majorTwelfth  : 3,
    doubleOctave  : 4
}

module.exports = function modularscale(options) {
  options = options || {}
  value  = options.value  || 0
  bases  = options.bases  || msBases
  ratios = options.ratios || msRatios

  return function ms(value) {
    var r = []
    var strand = null
    var ratio
    var base
    var i = 0

    if (typeof value === 'string') {
      value = ratioNames[value] || 0
    }

    for (ratio = 0; ratio < ratios.length; ratio++) {
      for (base = 0; base < bases.length; base++) {

        strand = (base + ratio);

        // Seed list with an initial value
        // r.push(bases[base]);

        // Find values on a positive scale
        if (value >= 0) {
          // Find lower values on the scale
          i = 0
          while((Math.pow(ratios[ratio], i) * bases[base]) >= bases[0]) {
            r.push([Math.pow(ratios[ratio], i) * bases[base], strand])
            i--
          }

          // Find higher possible values on the scale
          i = 0
          while(Math.pow(ratios[ratio], i) * bases[base] <= Math.pow(ratios[ratio], value + 1) * bases[base]) {
            r.push([Math.pow(ratios[ratio], i) * bases[base], strand])
            i++
          }
        } else {
          // Find values on a negative scale
          i = 0
          while((Math.pow(ratios[ratio], i) * bases[base]) <= bases[0]) {
            r.push([Math.pow(ratios[ratio], i) * bases[base], strand])
            i++
          }

          // // Find higher possible values on the scale
          i = 0
          while((Math.pow(ratios[ratio], i) * bases[base]) >= (Math.pow(ratios[ratio], value - 1) * bases[base])) {
            if (Math.pow(ratios[ratio], i) * bases[base] <= bases[0]) {
              r.push([Math.pow(ratios[ratio], i) * bases[base], strand])
            }
            i--
          }
        }
      }
    }

    r = msUnique(r)

    // reverse array if value is negative
    if(value < 0) {
      r = r.reverse()
    }

    return r[Math.abs(value)][0]
  }
}

function msUnique(origArr) {
  var x
  var y
  var lastVal
  var i

  origArr = origArr.sort(function(a,b) {
    x = a[0]
    y = b[0]
    return x-y
  })

  newArr = []
  lastVal = null

  for (i = 0; i < origArr.length; i++) {
    var currentVal = origArr[i][0];
    if (currentVal != lastVal) {
      newArr.push(origArr[i])
    }
    lastVal = currentVal
  }

  return newArr
}

