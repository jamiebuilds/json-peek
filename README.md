# json-peek

> Stringify JSON *just enough* to see what it is

## Install

```sh
yarn add json-peek
```

## Usage

```js
const jsonPeek = require('json-peek');

jsonPeek({ prop: 'value' }); // {"prop": "value"}
```

## Example

**Input:**

```json
{
  "name": "json-peek",
  "version": "0.0.0",
  "description": "Stringify JSON *just enough* to see what it is",
  "main": "index.js",
  "repository": "https://github.com/jamiebuilds/json-peek",
  "author": "Jamie Kyle <me@thejameskyle.com>",
  "license": "MIT",
  "keywords": [
    "json",
    "stringify",
    "peek",
    "preview",
    "pretty",
    "print"
  ],
  "files": [
    "index.js"
  ],
  "scripts": {
    "test": "ava"
  },
  "devDependencies": {
    "ava": "^0.25.0",
    "flow-bin": "^0.74.0"
  }
}
```

**Output:**

```
{"name": "json-peek", ...}
```
