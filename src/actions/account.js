import { CALL_GROUT, Schemas } from '../middleware'
import { isString } from 'lodash';
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export function login(methodData, redirect) {
  if(isString(methodData)){
    return {
      [CALL_GROUT]: {
        types: [ LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE ],
        method: 'loginUsingProvider',
        methodData,
        redirect
      }
    }
  }
  return {
    [CALL_GROUT]: {
      types: [ LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE ],
      method: 'login',
      methodData,
      redirect
    }
  }
}

export const SIGNUP_REQUEST = 'SIGNUP_REQUEST';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE';

export function signup(methodData) {
  if(isString(methodData)){
    return {
      [CALL_GROUT]: {
        types: [ SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAILURE ],
        method: 'signupUsingProvider',
        methodData
      }
    }
  }
  return {
    [CALL_GROUT]: {
      types: [ SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAILURE ],
      method: 'signup',
      methodData
    }
  }
}

export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE';

export function logout() {
  return {
    [CALL_GROUT]: {
      types: [ LOGOUT_REQUEST, LOGOUT_SUCCESS, LOGOUT_FAILURE ],
      method: 'logout'
    }
  }
}
export const RECOVER_REQUEST = 'RECOVER_REQUEST';
export const RECOVER_SUCCESS = 'RECOVER_SUCCESS';
export const RECOVER_FAILURE = 'RECOVER_FAILURE';

export function recover(recoverData) {
  return {
    [CALL_GROUT]: {
      types: [ RECOVER_REQUEST, RECOVER_SUCCESS, RECOVER_FAILURE ],
      method: 'recoverAccount',
      methodData: recoverData
    }
  }
}
