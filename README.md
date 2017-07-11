# @cypress/questions-remain

> Asks the user to provide the remaining options not specified via CLI

[![NPM][npm-icon] ][npm-url]

[![Build status][ci-image] ][ci-url]
[![semantic-release][semantic-image] ][semantic-url]
[![js-standard-style][standard-image]][standard-url]

## Motivation

Imagine user can supply some options via CLI arguments, but your application
need more. For each remaining unspecified option, this module will call your
Promise-returning function, filling the blanks and finally resolving with
all options set.

## Install

Requires [Node](https://nodejs.org/en/) version 6 or above.

```sh
npm install --save @cypress/questions-remain
```

## Use

Two-step use. First give it a mapping of "property" (or "option") names to
Promise-returning functions to call if the option is not set. Then call
with options collected from CLI.

```js
// askUsername and askEmail are your functions
const propertiesToQuestions = {
  username: askUsername,
  email: askEmail
}
const questionsRemain = require('@cypress/questions-remain')
const ask = questionsRemain(propertiesToQuestions)
// imagine parsing CLI options
const argv = require('minimist')(process.argv.slice(2))
ask(argv)
  .then(options => {
    // options.username and options.email
    // should be there!
  })
```

The above program can work right away without any prompts if the user calls
it with `app --username john --email john@gmail.com`, or it will ask questions
if `username` or `email` is missing.

### Small print

License: MIT - do anything with the code, but don't blame us if it does not work.

Support: if you find any problems with this module, email / tweet /
[open issue](https://github.com/cypress-io/questions-remain/issues) on Github

## MIT License

Copyright (c) 2017 Cypress;

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

[npm-icon]: https://nodei.co/npm/@cypress/questions-remain.svg?downloads=true
[npm-url]: https://npmjs.org/package/@cypress/questions-remain
[ci-image]: https://travis-ci.org/cypress-io/questions-remain.svg?branch=master
[ci-url]: https://travis-ci.org/cypress-io/questions-remain
[semantic-image]: https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg
[semantic-url]: https://github.com/semantic-release/semantic-release
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg
[standard-url]: http://standardjs.com/
