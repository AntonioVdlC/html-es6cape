# html-es6cape

[![version](https://img.shields.io/npm/v/html-es6cape.svg)](http://npm.im/html-es6cape)
[![Travis](https://img.shields.io/travis/AntonioVdlC/html-es6cape.svg?branch=master)](https://travis-ci.org/AntonioVdlC/html-es6cape)
[![Codecov](https://img.shields.io/codecov/c/github/AntonioVdlC/html-es6cape.svg)](https://codecov.io/github/AntonioVdlC/html-es6cape)
[![issues](https://img.shields.io/github/issues-raw/antoniovdlc/html-es6cape.svg)](https://github.com/AntonioVdlC/html-es6cape/issues)
[![downloads](https://img.shields.io/npm/dt/html-es6cape.svg)](http://npm.im/html-es6cape)
[![license](https://img.shields.io/npm/l/html-es6cape.svg)](http://opensource.org/licenses/MIT)

Escape HTML special characters (including `). 
> Please note the pun in the package name! :zap:

## Installation

This package is distributed via npm:

```
npm install html-es6cape
```

*- or -*

Download the file `src/index.js` and add it to your ES6 project.

## Usage

```javascript
var htmlEscape = require("html-es6cape");

var unescapedString = `This is an evil unescaped string <"'&'">! #whoopwhoop`;
var escapedString = htmlEscape(unescapedString);
// "This is a nice escaped String &lt;&quot;&#39;&amp;&#39;&quot;&gt;! #whoopwhoop"
```

*- or -*

```javascript
import htmlEscape from "html-es6cape";

var unescapedString = `This is an evil unescaped string <"'&'">! #whoopwhoop`;
var escapedString = htmlEscape(unescapedString);
// "This is a nice escaped String &lt;&quot;&#39;&amp;&#39;&quot;&gt;! #whoopwhoop"
```

## License
MIT

## Thanks
Special thanks to my family, my friends, my bae ... and [Kent C. Dodds](https://github.com/kentcdodds) for his series ["How to Write a JavaScript Library."](https://egghead.io/series/how-to-write-an-open-source-javascript-library)!
