'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = files;

var _files = require('../actions/files');

var _lodash = require('lodash');

function files() {
  var state = arguments.length <= 0 || arguments[0] === undefined ? {
    example: [{ name: 'index.html' }]
  } : arguments[0];
  var action = arguments[1];

  switch (action.type) {
    case _files.FINISH_LOAD_FILES:
      if (!state[action.projectName]) {
        state[action.projectName] = [];
      }
      var currentFiles = (0, _lodash.clone)(state[action.projectName]);
      var newFiles = (0, _lodash.union)(currentFiles, action.files);
      var newState = {};
      newState[action.projectName] = newFiles;
      return (0, _lodash.merge)({}, state, newState);
      break;
    case _files.FINISH_SYNC_FILES:
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