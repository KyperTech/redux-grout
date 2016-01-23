'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.files = exports.account = undefined;

var _account = require('./account');

Object.defineProperty(exports, 'account', {
  enumerable: true,
  get: function get() {
    return _account.account;
  }
});

var _files = require('./files');

Object.defineProperty(exports, 'files', {
  enumerable: true,
  get: function get() {
    return _files.files;
  }
});
exports.entities = entities;

var _merge = require('lodash/merge');

var _merge2 = _interopRequireDefault(_merge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Updates an entity cache in response to any action with response.entities.
function entities() {
  var state = arguments.length <= 0 || arguments[0] === undefined ? { accounts: {}, projects: {} } : arguments[0];
  var action = arguments[1];

  if (action.response && action.response.entities) {
    return (0, _merge2.default)({}, state, action.response.entities);
  }
  return state;
}