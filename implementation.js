'use strict';

var events = require('events');

module.exports = events.EventEmitter.prototype.removeListener;
