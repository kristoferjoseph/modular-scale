modular-scale
=============

Module for generating a modular scale.


install
-------
`npm i modular-scale --save`

use
---

```js
var ModularScale = require('modular-scale')
var ms = ModularScale({
  ratio: ModularScale.ratios.goldenSection,
  base: '16px'
})

// Get a step up from the base font size in the scale
ms(4) // 109.656

// Get a step down from the base font size in the scale
ms(-1) // 9.889

// Get a rem or em relative value
ms(4, true) // 6.854

// Get an array of steps for use as pixel measurements
ms.steps(6) // [ 67.773, 41.887, 25.888, 16, 9.889, 6.112, 3.777 ]

// Also can return relative values for use with em, rem etc.
ms.steps(6, true) // [ 4.236, 2.618, 1.618, 1, 0.618, 0.382, 0.236 ]
```

Inspiration
-----------
[Modular Scale](http://www.modularscale.com)

