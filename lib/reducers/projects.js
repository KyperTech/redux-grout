'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _merge = require('lodash/merge');

var _merge2 = _interopRequireDefault(_merge);

exports.account = account;

var _account = require('../actions/account');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function account() {
  var state = arguments.length <= 0 || arguments[0] === undefined ? {
    isFetching: false,
    error: null
  } : arguments[0];
  var action = arguments[1];

  switch (action.type) {
    case _account.GET_PROJECTS_REQUEST:
      return (0, _merge2.default)({}, state, { isFetching: true, error: null });
    case _account.GET_PROJECTS_SUCCESS:
      return (0, _merge2.default)({}, state, { isFetching: false, error: null }, action.response);
    case _account.GET_PROJECTS_FAILURE:
      return (0, _merge2.default)({}, state, { isFetching: false, error: action.error });
    case _account.GET_PROJECT_REQUEST:
      return (0, _merge2.default)({}, state, { isFetching: true, error: null });
    case _account.GET_PROJECT_SUCCESS:
      return (0, _merge2.default)({}, state, { isFetching: false, error: null }, action.response);
    case _account.GET_PROJECT_FAILURE:
      return (0, _merge2.default)({}, state, { isFetching: false, error: action.error });
    case _account.ADD_PROJECT_REQUEST:
      return (0, _merge2.default)({}, state, { isFetching: true, error: null });
    case _account.ADD_PROJECT_SUCCESS:
      return (0, _merge2.default)({}, state, { isFetching: false, error: null }, action.response);
    case _account.ADD_PROJECT_FAILURE:
      return (0, _merge2.default)({}, state, { isFetching: false, error: action.error });
    case _account.DELETE_PROJECT_REQUEST:
      return (0, _merge2.default)({}, state, { isFetching: true, error: null });
    case _account.DELETE_PROJECT_SUCCESS:
      return (0, _merge2.default)({}, state, { isFetching: false, error: null }, action.response);
    case _account.DELETE_PROJECT_FAILURE:
      return (0, _merge2.default)({}, state, { isFetching: false, error: action.error });
    case _account.UPDATE_PROJECT_REQUEST:
      return (0, _merge2.default)({}, state, { isFetching: true, error: null });
    case _account.UPDATE_PROJECT_SUCCESS:
      return (0, _merge2.default)({}, { isFetching: false, error: null });
    case _account.UPDATE_PROJECT_FAILURE:
      return (0, _merge2.default)({}, state, { isFetching: false, error: action.error });
    default:
      return state;
  }
}