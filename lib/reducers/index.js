'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.projects = exports.files = exports.account = undefined;

var _omit = require('lodash/omit');

var _omit2 = _interopRequireDefault(_omit);

var _merge = require('lodash/merge');

var _merge2 = _interopRequireDefault(_merge);

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

var _projects = require('./projects');

Object.defineProperty(exports, 'projects', {
  enumerable: true,
  get: function get() {
    return _projects.projects;
  }
});
exports.entities = entities;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Updates an entity cache in response to any action with response.entities.
function entities() {
  var state = arguments.length <= 0 || arguments[0] === undefined ? { users: {}, projects: {} } : arguments[0];
  var action = arguments[1];

  if (action.response && action.response.entities) {
    return (0, _merge2.default)({}, state, action.response.entities);
  }
  if (action.method === 'remove') {
    console.debug('****************** state before:', state);
    if (!state.entities[action.model.toLowerCase()]) throw new Error('Entity does not exist');
    var stateWithoutEntity = (0, _omit2.default)(state[action.model.toLowerCase()], action.modelData[1] + '/' + action.modelData[0]);
    console.debug('returning state:', stateWithoutEntity);
    return stateWithoutEntity;
  }
  return state;
}