import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE
} from '../actions/account';
import { merge } from 'lodash';
export function account(state = {
  isFetching: false,
  error: null
}, action) {
  switch (action.type) {
  case LOGIN_REQUEST:
    return merge({}, state, {isFetching: true});
  case LOGIN_SUCCESS:
    return merge({}, state, {isFetching: false}, action.response);
  case LOGIN_FAILURE:
    return merge({}, state, {isFetching: false}, action);
  case SIGNUP_REQUEST:
    return merge({}, state, {isFetching: true});
  case SIGNUP_SUCCESS:
    return merge({}, state, {isFetching: false}, action.response);
  case SIGNUP_FAILURE:
    return merge({}, state, {isFetching: false}, action);
  case LOGOUT_REQUEST:
    return merge({}, state, {isFetching: true});
  case LOGOUT_SUCCESS:
    return merge({}, {isFetching: false});
  case LOGOUT_FAILURE:
    return merge({}, state, {isFetching: false}, action);
  default:
    return state;
  }
}
