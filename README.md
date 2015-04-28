modular-scale
=============

Module for generating a modular scale.


Install
-------
`npm i --save`

Use
---
```
var modularScale = require('modular-scale'),
    ms = modularScale({
      ratios: [2],
      bases: [16,12]
    })

    ms(4) //48
```

Inspiration
-----------
[Modular Scale](http://www.modularscale.com)

