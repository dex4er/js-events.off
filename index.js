'use strict';

var implementation = require('./implementation');
var getPolyfill = require('./polyfill');
var polyfill = getPolyfill();
var shim = require('./shim');

var define = require('define-properties');
var eventsModule = require('events');

var slice = Array.prototype.slice;

/* eslint-disable no-unused-vars */
var boundOff = function off (emitter, type, listener) {
/* eslint-enable no-unused-vars */
  return polyfill.apply(emitter, slice.call(arguments, 1));
};
define(boundOff, {
  getPolyfill: getPolyfill,
  implementation: implementation,
  shim: shim
});

module.exports = boundOff;
