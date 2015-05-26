modular-scale
=============

Module for generating a modular scale.


Install
-------
`npm i --save`

Use
---

> To generate relative values use target / base font size

  Example:
  
    1 = 16px ( target ) / 16px ( base font size )
    0.75 = 12px ( target ) / 16px ( base font size )
    Generates `em` or `rem` relative values

```
var modularScale = require('modular-scale'),
    ms = modularScale({
      ratios: [2],
      bases: [1,0.75]
    })

    ms(4) //48
```

Inspiration
-----------
[Modular Scale](http://www.modularscale.com)

