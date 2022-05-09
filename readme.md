[![Build Status](https://travis-ci.org/miniflycn/url-validator12.png?branch=master)](https://travis-ci.org/miniflycn/url-validator12)
[![Coverage Status](https://coveralls.io/repos/miniflycn/url-validator12/badge.png?branch=master)](https://coveralls.io/r/miniflycn/url-validator12?branch=master)

# url-validator12

[![NPM](https://nodei.co/npm/url-validator12.png)](https://npmjs.org/package/url-validator12)

Homepage: https://github.com/jazzybruno/url-validator12#readme

## Project Goals
Url validitation made easy 

## Setup
Setup

    $ npm install url-validator12

## Useage

```js
var validate = require('url-validator12');
  let isValid = validate.verify("Hello World") // returns false
  isValid = validate.verify("https://github.com/miniflycn/url-valid/blob/master/README.md?plain=1") // returns true
```

## License
(The MIT License)

Copyright (c) 2013 Daniel Yang <miniflycn@justany.net>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
