# Async Functions with Babel

## Usage

```bash
$ node index.js
```

## Install babel-register for Async Functions

```bash
$ npm i babel-register --D
$ npm i babel-plugin-transform-async-to-generator -D
```

```.babelrc
{
  "plugins": ["transform-async-to-generator"]
}
```

```js
require("babel-register")

require('<support async module>')
```