var chai = global.chai = require('chai');
var expect = global.expect = require('chai').expect;
var Promise = require('es6-promise').Promise;
global.Promise = Promise;
var jsdom = require('jsdom').jsdom;
global.document = jsdom('<html><head><script></script></head><body></body></html>');
global.window = global.document.defaultView;
