'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.files = files;

var _merge = require('lodash/merge');

var _merge2 = _interopRequireDefault(_merge);

var _union = require('lodash/union');

var _union2 = _interopRequireDefault(_union);

var _clone = require('lodash/clone');

var _clone2 = _interopRequireDefault(_clone);

var _files = require('../actions/files');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function files() {
  var state = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
  var action = arguments[1];

  switch (action.type) {
    case _files.GET_FILES_SUCCESS:
      // console.log('get files success reducer:', action);
      if (!state[action.projectName]) {
        state[action.projectName] = [];
      }
      var currentFiles = (0, _clone2.default)(state[action.projectName]);
      var newFiles = (0, _union2.default)(currentFiles, action.files);
      var newState = {};
      newState[action.projectName] = newFiles;
      return (0, _merge2.default)({}, state, newState);
      break;
    case _files.GET_FILE_SUCCESS:
      var syncState = state;
      if (!state[action.projectName]) {
        syncState[action.projectName] = [];
      }
      syncState[action.projectName] = action.files;
      return syncState;
      break;
    default:
      return state;
  }
}