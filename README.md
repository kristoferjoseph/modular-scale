modular-scale
=============

Module for generating a modular scale.


install
-------
`npm i modular-scale --save`

use
---

```
var modularScale = require('modular-scale'),
    ms = modularScale({
      ratio: 'goldenSection',
      base: '16px'
    })

    ms(4) // 109.656
```

notes
-----
Default output is in pixels, but you can get relative units by dividing the returned value by the base font-size.

> ms(4) = 109.656px / 16px = 6.854em|rem

Inspiration
-----------
[Modular Scale](http://www.modularscale.com)

