'use strict';

var getPolyfill = require('./polyfill');

var define = require('define-properties');

var events = require('events');

module.exports = function shimStreamFinished () {
  var polyfill = getPolyfill();
  if (polyfill !== events) {
    define(events.EventEmitter.prototype, { off: polyfill }, {
      off: function testOff () {
        return events.EventEmitter.prototype.off !== polyfill;
      }
    });
  }
  return polyfill;
};
