// @flow

/*::
type JSONValue =
  | null
  | boolean
  | number
  | string
  | Array<JSONValue>
  | { [key: string]: JSONValue };
*/

function print(val, nested) {
  if (val === null) {
    return 'null';
  } else if (typeof val === 'boolean') {
    return String(val);
  } else if (typeof val === 'number') {
    let str = String(val);
    if (nested && str.length > 10) return val.toPrecision(10);
    return str;
  } else if (typeof val === 'string') {
    let max = nested ? 15 : 30;
    return (
      '"' +
      (val.length > max ? val.slice(0, max - 3) : val) +
      (val.length > max ? '...' : '') +
      '"'
    );
  } else if (Array.isArray(val)) {
    let body = '';
    let index = 0;
    while (!nested && index < val.length && body.length < 15) {
      body += print(val[index++], true);
      if (val.length > index) body += ', ';
    }
    if (val.length > index) body += '...';
    return '[' + body + ']';
  } else {
    let body = '';
    let keys = Object.keys(val);
    let index = 0;
    while (!nested && index < keys.length && body.length < 15) {
      let key = keys[index++];
      body += print(key, true);
      body += ': ';
      body += print(val[key], true);
      if (keys.length > index) body += ', ';
    }
    if (keys.length > index) body += '...';
    return '{' + body + '}';
  }
}

function jsonPeek(val /*: JSONValue */) /*: string */ {
  return print(val, false);
}

module.exports = jsonPeek;
