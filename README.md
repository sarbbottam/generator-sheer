![sheer](https://github.com/sarbbottam/sheer/raw/master/logo/sheer-200x186.png)

# generator-sheer

[Yeoman](http://yeoman.io) generator that scaffolds out [Sheer](https://github.com/sarbbottam/sheer) boilerplates.

![](http://i.imgur.com/xcAEqJw.png)

## Getting started

This requires [yo](https://github.com/yeoman/yo), CLI tool for running [yeoman](http://yeoman.io) generators, 
to be preinstalled.

```sh
npm install -g yo
```

Please refer [yeoman](http://yeoman.io) for further details.

```sh
npm install -g sarbbottam/generator-sheer
yo sheer
```

run `grunt` or `gulp` for generating the css files.

## Customization

Any customization required, need be carried out at `src/modules/module.css` and `src/variables/variable.css`.

All the [Sheer](https://github.com/sarbbottam/sheer) variables currently in use are listed at `src/variables/variable.css`.
* `src/variables/variable.css` should be updated for any custom requirement (color, spacing, padding, font) .
* `src/modules/modules.css` needs to updated for new rules/styles.

Should there be need to create mutiple files at `src/modules/` and/or `src/variables/`, they need to be included at `src/main.css`.

---

Copyright (c) 2015, Sarbborram Bandyopadhyay. All rights reserved. Copyrights licensed under the MIT License.
See the accompanying LICENSE file for terms.
