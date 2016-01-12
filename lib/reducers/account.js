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
    case _account.LOGIN_REQUEST:
      return (0, _lodash.merge)({}, state, { isFetching: true, error: null });
    case _account.LOGIN_SUCCESS:
      return (0, _lodash.merge)({}, state, { isFetching: false, error: null }, action.response);
    case _account.LOGIN_FAILURE:
      return (0, _lodash.merge)({}, state, { isFetching: false, error: action.error });
    case _account.SIGNUP_REQUEST:
      return (0, _lodash.merge)({}, state, { isFetching: true, error: null });
    case _account.SIGNUP_SUCCESS:
      return (0, _lodash.merge)({}, state, { isFetching: false, error: null }, action.response);
    case _account.SIGNUP_FAILURE:
      return (0, _lodash.merge)({}, state, { isFetching: false, error: action.error });
    case _account.LOGOUT_REQUEST:
      return (0, _lodash.merge)({}, state, { isFetching: true, error: null });
    case _account.LOGOUT_SUCCESS:
      return (0, _lodash.merge)({}, { isFetching: false, error: null });
    case _account.LOGOUT_FAILURE:
      return (0, _lodash.merge)({}, state, { isFetching: false, error: action.error });
    case _account.RECOVER_REQUEST:
      return (0, _lodash.merge)({}, state, { isFetching: true, error: null });
    case _account.RECOVER_SUCCESS:
      return (0, _lodash.merge)({}, { isFetching: false, error: null });
    case _account.RECOVER_FAILURE:
      console.warn('recover failure', action);
      return (0, _lodash.merge)({}, state, { isFetching: false, error: action.error });
    default:
      return state;
  }
}