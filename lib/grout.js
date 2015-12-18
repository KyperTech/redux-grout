'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _kyperGrout = require('kyper-grout');

var _kyperGrout2 = _interopRequireDefault(_kyperGrout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /** Grout Singleton
                                                                                                                                                           */

//Default configuration options
var defaultOptions = {
	logLevel: 'trace'
};

var instance = null;

var GroutInstance = function GroutInstance(appName, options) {
	_classCallCheck(this, GroutInstance);

	if (!instance) {
		instance = new _kyperGrout2.default(appName, options);
	}
	return instance;
};

//Create singleton instance of Grout using project name

exports.default = GroutInstance;