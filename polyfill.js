'use strict';

var implementation = require('./implementation');

var events = require('events');

module.exports = function getPolyfill () {
  if (typeof events.EventEmitter.prototype.off === 'function') {
    return events.EventEmitter.prototype.off;
  }
  return implementation;
};
