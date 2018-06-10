// @flow
'use strict';
const test = require('ava');
const jsonPeek = require('./');

function peek(t, val, str) {
  t.is(jsonPeek(val), str);
}

test('null', peek, null, 'null');
test('true', peek, true, 'true');
test('false', peek, false, 'false');
test('number', peek, 12345, '12345');
test('number', peek, 12345678901234567890123, '1.2345678901234568e+22');
test('number (nested)', peek, [12345678901234567890123], '[1.234567890e+22]');
test('string', peek, '0123', '"0123"');
test('string (long)', peek, '123456789012345678901234567890', '"123456789012345678901234567890"');
test('string (too long)', peek, '1234567890123456789012345678901', '"123456789012345678901234567..."');
test('array', peek, [], '[]');
test('array', peek, [1], '[1]');
test('array', peek, [1, 2, 3], '[1, 2, 3]');
test('array', peek, [1, 2, 3, 4, 5, 6, 7, 8, 9, 0], '[1, 2, 3, 4, 5, ...]');
test('array', peek, ["long string", "long string", "long string"], '["long string", ...]');
test('array', peek, [[]], '[[]]');
test('array', peek, [[1, 2, 3]], '[[...]]');
test('object', peek, {}, '{}');
test('object', peek, { foo: 'bar' }, '{"foo": "bar"}');
test('object', peek, { foo: 'bar', bar: 'baz', baz: 'bat' }, '{"foo": "bar", "bar": "baz", ...}');
test('object', peek, { foo: {} }, '{"foo": {}}');
test('object', peek, { foo: { bar: 'baz'}  }, '{"foo": {...}}');

test('very large', peek, {
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
, '{"name": "json-peek", ...}')
