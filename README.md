modular-scale
=============

Module for generating a modular scale

This is meant to be used to generate a relative typographic scale meaning `em` `rem` not `px`.


Install
-------
`npm i --save-dev`

Use
---
```
var ms = require('modular-scale'),
    scale;

    scale = ms(1.618, 12);
    console.log(scale);
```

Output
------
```
[
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
]
```

Inspiration
-----------
[Modular Scale](http://www.modularscale.com)

