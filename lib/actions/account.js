'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UPDATE_ACCOUNT_FAILURE = exports.UPDATE_ACCOUNT_SUCCESS = exports.UPDATE_ACCOUNT_REQUEST = exports.UPLOAD_AVATAR_FAILURE = exports.UPLOAD_AVATAR_SUCCESS = exports.UPLOAD_AVATAR_REQUEST = exports.RECOVER_FAILURE = exports.RECOVER_SUCCESS = exports.RECOVER_REQUEST = exports.LOGOUT_FAILURE = exports.LOGOUT_SUCCESS = exports.LOGOUT_REQUEST = exports.SIGNUP_FAILURE = exports.SIGNUP_SUCCESS = exports.SIGNUP_REQUEST = exports.LOGIN_FAILURE = exports.LOGIN_SUCCESS = exports.LOGIN_REQUEST = undefined;
exports.login = login;
exports.signup = signup;
exports.logout = logout;
exports.recover = recover;
exports.uploadAvatar = uploadAvatar;
exports.updateAccount = updateAccount;

var _middleware = require('../middleware');

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var LOGIN_REQUEST = exports.LOGIN_REQUEST = 'LOGIN_REQUEST';
var LOGIN_SUCCESS = exports.LOGIN_SUCCESS = 'LOGIN_SUCCESS';
var LOGIN_FAILURE = exports.LOGIN_FAILURE = 'LOGIN_FAILURE';

function login(methodData, redirect) {
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

var UPLOAD_AVATAR_REQUEST = exports.UPLOAD_AVATAR_REQUEST = 'UPLOAD_AVATAR_REQUEST';
var UPLOAD_AVATAR_SUCCESS = exports.UPLOAD_AVATAR_SUCCESS = 'UPLOAD_AVATAR_SUCCESS';
var UPLOAD_AVATAR_FAILURE = exports.UPLOAD_AVATAR_FAILURE = 'UPLOAD_AVATAR_FAILURE';

function uploadAvatar(file) {
  return _defineProperty({}, _middleware.CALL_GROUT, {
    types: [UPLOAD_AVATAR_REQUEST, UPLOAD_AVATAR_SUCCESS, UPLOAD_AVATAR_FAILURE],
    method: 'uploadAvatar',
    methodData: file
  });
}

var UPDATE_ACCOUNT_REQUEST = exports.UPDATE_ACCOUNT_REQUEST = 'UPDATE_ACCOUNT_REQUEST';
var UPDATE_ACCOUNT_SUCCESS = exports.UPDATE_ACCOUNT_SUCCESS = 'UPDATE_ACCOUNT_SUCCESS';
var UPDATE_ACCOUNT_FAILURE = exports.UPDATE_ACCOUNT_FAILURE = 'UPDATE_ACCOUNT_FAILURE';

function updateAccount(account) {
  return _defineProperty({}, _middleware.CALL_GROUT, {
    types: [UPDATE_ACCOUNT_REQUEST, UPDATE_ACCOUNT_SUCCESS, UPDATE_ACCOUNT_FAILURE],
    method: 'updateAccount',
    methodData: account
  });
}