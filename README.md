# events.off

<!-- markdownlint-disable MD013 -->
[![Build Status](https://secure.travis-ci.org/dex4er/js-events.off.svg)](http://travis-ci.org/dex4er/js-events.off) [![npm](https://img.shields.io/npm/v/events.off.svg)](https://www.npmjs.com/package/events.off)
<!-- markdownlint-enable MD013 -->

Polyfill for events.EventEmitter.prototype.off in node versions &lt; v10

node v10.0.0 added support for a built-in `events.EventEmitter.prototype.off`:
<https://github.com/nodejs/node/pull/17156>

This package provides the built-in `events.EventEmitter.prototype.off` in node
v10.0.0 and later, and a replacement in other environments.

This package implements the [es-shim API](https://github.com/es-shims/api)
interface. It works in an ES3-supported environment and complies with the
[spec](http://www.ecma-international.org/ecma-262/6.0/).

## Usage

### Direct

```js
const off = require('events.off');
// Use `off` just like the built-in method on `events.EventEmitter.prototype`
const events = require('events');
const emitter = new events.EventEmitter();
const handler = () => {};
emitter.on('foo', handler);
// Use `off`
off(emitter, 'foo', handler);
```

### Shim

```js
require('events.off/shim')();
// `events.EventEmitter.prototype.off` is now defined
const events = require('events');
const emitter = new events.EventEmitter();
const handler = () => {};
emitter.on('foo', handler);
// Use `emitter.off`
emitter.off('foo', handler);
```

or:

```js
require('events.off/auto');
// `events.off` is now defined
const events = require('events');
const emitter = new events.EventEmitter();
const handler = () => {};
emitter.on('foo', handler);
// Use `emitter.off`
emitter.off('foo', handler);
```
