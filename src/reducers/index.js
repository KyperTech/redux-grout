import { merge } from 'lodash';

import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS
} from '../actions';
export function account(state = {
  isFetching: false,
  id: null
}, action) {
  switch (action.type) {
  case LOGIN_REQUEST:
    return merge({}, state, {isFetching: true});
  case LOGIN_SUCCESS:
    console.log('successful login action recieved in reducer', action);
    return merge({}, state, {isFetching: false, id: action.response.result});
  case SIGNUP_REQUEST:
    return merge({}, state, {isFetching: true});
  case SIGNUP_SUCCESS:
    return merge({}, state, {isFetching: false, id: action.response.result});
  case LOGOUT_REQUEST:
    return merge({}, state, {isFetching: true, id: null});
  case LOGOUT_SUCCESS:
    return merge({}, {isFetching: false, id: null});
  default:
    return state;
  }
}


// Updates an entity cache in response to any action with response.entities.
export function entities(state = { accounts: {}, projects:{}}, action) {
  if (action.response && action.response.entities) {
    return merge({}, state, action.response.entities)
  }
  return state
}
