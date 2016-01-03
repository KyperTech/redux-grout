'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.account = account;

var _account = require('../actions/account');

var _lodash = require('lodash');

function account() {
  var state = arguments.length <= 0 || arguments[0] === undefined ? {
    isFetching: false,
    error: null
  } : arguments[0];
  var action = arguments[1];

  switch (action.type) {
    case _account.GET_PROJECTS_REQUEST:
      return (0, _lodash.merge)({}, state, { isFetching: true });
    case _account.GET_PROJECTS_SUCCESS:
      return (0, _lodash.merge)({}, state, { isFetching: false }, action.response);
    case _account.GET_PROJECTS_FAILURE:
      return (0, _lodash.merge)({}, state, { isFetching: false, error: action.error || 'Login Error' });
    case _account.ADD_PROJECT_REQUEST:
      return (0, _lodash.merge)({}, state, { isFetching: true });
    case _account.ADD_PROJECT_SUCCESS:
      return (0, _lodash.merge)({}, state, { isFetching: false }, action.response);
    case _account.ADD_PROJECT_FAILURE:
      return (0, _lodash.merge)({}, state, { isFetching: false, error: action.error || 'Signup Error' });
    case LOGOUT_REQUEST:
      return (0, _lodash.merge)({}, state, { isFetching: true });
    case LOGOUT_SUCCESS:
      return (0, _lodash.merge)({}, { isFetching: false });
    case LOGOUT_FAILURE:
      return (0, _lodash.merge)({}, state, { isFetching: false, error: action.error || 'Logout Error' });
    default:
      return state;
  }
}