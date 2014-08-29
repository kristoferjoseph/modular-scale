module.exports = function modularScale(ratio, steps) {
  // Populate scale with base
  var scale = [1],
    base = 1,
    // Default to phi for the ratio
    ratio = ratio || 1.618,
    // Default to ~12 steps
    steps = steps || 12,
    // Divide steps in half for up and down steps
    halfSteps = Math.round(steps * 0.5);

  // Populate scale with steps up
  scaleUp(scale, base, ratio, halfSteps);
  // Populate scale with steps down
  scaleDown(scale, base, ratio, halfSteps);
  // Return the sorted scale from largest to smallest
  return scale.sort(sortFunction);
};

function scaleUp(scale, base, ratio, steps) {
  // Exit when steps are 0
  if (steps === 0) return;
  // Calculate the scale step by multiplying 
  //   by the ratio then rounding to three decimal points.
  step = Math.round((base * ratio) * 1000) / 1000;
  // Add the step to the scale
  scale.push(step);
  // Recursively call this scaleUp function
  //   passing the new step as the base and decrementing the step
  scaleUp(scale, step, ratio, steps - 1);
}

function scaleDown(scale, base, ratio, steps) {

  // Exit when steps are 0
  if (steps === 0) return;

  // Calculate the scale step by dividing 
  //   by the ratio then rounding to three decimal points.
  step = Math.round((base / ratio) * 1000) / 1000;
  // Add the step to the scale
  scale.push(step);
  // Recursively call this scaleDown function
  //   passing the new step as the base and decrementing the step
  scaleDown(scale, step, ratio, steps - 1);
}

// Sort from greatest to smallest
function sortFunction(a, b) {
  return b - a;
}

