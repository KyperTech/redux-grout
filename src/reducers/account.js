import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS
} from '../actions/account';
import { merge } from 'lodash';
export function account(state = {
  isFetching: false
}, action) {
  switch (action.type) {
  case LOGIN_REQUEST:
    return merge({}, state, {isFetching: true});
  case LOGIN_SUCCESS:
    return merge({}, state, {isFetching: false}, action.response);
  case SIGNUP_REQUEST:
    return merge({}, state, {isFetching: true});
  case SIGNUP_SUCCESS:
    return merge({}, state, {isFetching: false}, action.response);
  case LOGOUT_REQUEST:
    return merge({}, state, {isFetching: true});
  case LOGOUT_SUCCESS:
    return merge({}, {isFetching: false});
  default:
    return state;
  }
}
