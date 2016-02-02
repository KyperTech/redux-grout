'use strict';

var _isString = require('lodash/isString');

var _isString2 = _interopRequireDefault(_isString);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RECOVER_FAILURE = exports.RECOVER_SUCCESS = exports.RECOVER_REQUEST = exports.LOGOUT_FAILURE = exports.LOGOUT_SUCCESS = exports.LOGOUT_REQUEST = exports.SIGNUP_FAILURE = exports.SIGNUP_SUCCESS = exports.SIGNUP_REQUEST = exports.LOGIN_FAILURE = exports.LOGIN_SUCCESS = exports.LOGIN_REQUEST = undefined;
exports.login = login;
exports.signup = signup;
exports.logout = logout;
exports.recover = recover;

var _middleware = require('../middleware');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var LOGIN_REQUEST = exports.LOGIN_REQUEST = 'LOGIN_REQUEST';
var LOGIN_SUCCESS = exports.LOGIN_SUCCESS = 'LOGIN_SUCCESS';
var LOGIN_FAILURE = exports.LOGIN_FAILURE = 'LOGIN_FAILURE';

function login(methodData, redirect) {
  if ((0, _isString2.default)(methodData)) {
    return _defineProperty({}, _middleware.CALL_GROUT, {
      types: [LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE],
      method: 'loginUsingProvider',
      methodData: methodData,
      redirect: redirect
    });
  }
  return _defineProperty({}, _middleware.CALL_GROUT, {
    types: [LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE],
    method: 'login',
    methodData: methodData,
    redirect: redirect
  });
}

var SIGNUP_REQUEST = exports.SIGNUP_REQUEST = 'SIGNUP_REQUEST';
var SIGNUP_SUCCESS = exports.SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
var SIGNUP_FAILURE = exports.SIGNUP_FAILURE = 'SIGNUP_FAILURE';

function signup(methodData) {
  if ((0, _isString2.default)(methodData)) {
    return _defineProperty({}, _middleware.CALL_GROUT, {
      types: [SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAILURE],
      method: 'signupUsingProvider',
      methodData: methodData
    });
  }
  return _defineProperty({}, _middleware.CALL_GROUT, {
    types: [SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAILURE],
    method: 'signup',
    methodData: methodData
  });
}

var LOGOUT_REQUEST = exports.LOGOUT_REQUEST = 'LOGOUT_REQUEST';
var LOGOUT_SUCCESS = exports.LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
var LOGOUT_FAILURE = exports.LOGOUT_FAILURE = 'LOGOUT_FAILURE';

function logout() {
  return _defineProperty({}, _middleware.CALL_GROUT, {
    types: [LOGOUT_REQUEST, LOGOUT_SUCCESS, LOGOUT_FAILURE],
    method: 'logout'
  });
}
var RECOVER_REQUEST = exports.RECOVER_REQUEST = 'RECOVER_REQUEST';
var RECOVER_SUCCESS = exports.RECOVER_SUCCESS = 'RECOVER_SUCCESS';
var RECOVER_FAILURE = exports.RECOVER_FAILURE = 'RECOVER_FAILURE';

function recover(recoverData) {
  return _defineProperty({}, _middleware.CALL_GROUT, {
    types: [RECOVER_REQUEST, RECOVER_SUCCESS, RECOVER_FAILURE],
    method: 'recoverAccount',
    methodData: recoverData
  });
}