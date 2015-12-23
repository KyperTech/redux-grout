'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.account = account;

var _account = require('../actions/account');

var _lodash = require('lodash');

function account() {
  var state = arguments.length <= 0 || arguments[0] === undefined ? {
    isFetching: false
  } : arguments[0];
  var action = arguments[1];

  switch (action.type) {
    case _account.LOGIN_REQUEST:
      return (0, _lodash.merge)({}, state, { isFetching: true });
    case _account.LOGIN_SUCCESS:
      // console.log('successful login action recieved in reducer', action);
      return (0, _lodash.merge)({}, state, { isFetching: false }, action.response);
    case _account.SIGNUP_REQUEST:
      return (0, _lodash.merge)({}, state, { isFetching: true });
    case _account.SIGNUP_SUCCESS:
      // console.log('successful signup action recieved in reducer', action);
      return (0, _lodash.merge)({}, state, { isFetching: false }, action.response);
    case _account.LOGOUT_REQUEST:
      return (0, _lodash.merge)({}, state, { isFetching: true });
    case _account.LOGOUT_SUCCESS:
      return (0, _lodash.merge)({}, { isFetching: false });
    default:
      return state;
  }
}