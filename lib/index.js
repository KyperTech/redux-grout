'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Actions = exports.Reducers = undefined;
exports.createMiddleware = createMiddleware;
exports.getGrout = getGrout;
exports.createGrout = createGrout;

var _middleware = require('./middleware');

var _middleware2 = _interopRequireDefault(_middleware);

var _grout = require('./grout');

var _grout2 = _interopRequireDefault(_grout);

var _reducers = require('./reducers');

var _Reducers = _interopRequireWildcard(_reducers);

var _actions = require('./actions');

var _Actions = _interopRequireWildcard(_actions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Reducers = _Reducers; /** grout Singleton
                               */

exports.Actions = _Actions;

var grout = undefined;

function createMiddleware(groutName, groutOptions) {
  //Create singleton instance of grout using provided project name and options
  grout = new _grout2.default(groutName, groutOptions);
  //Return middleware (which imports the new grout instance)
  return _middleware2.default;
}

//Export grout instance
function getGrout() {
  // if(!grout){
  //   throw Error('You must call createMiddleware before using ');
  // }
  return grout;
}
//Create new grout instance
function createGrout(groutName, groutOptions) {
  //TODO: Handle being passed a grout instance
  return grout = new _grout2.default(groutName, groutOptions);
}