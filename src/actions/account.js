import { CALL_GROUT, Schemas } from '../middleware'
import { isString } from 'lodash';
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export function login(methodData, redirect) {
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

export const UPLOAD_AVATAR_REQUEST = 'UPLOAD_AVATAR_REQUEST';
export const UPLOAD_AVATAR_SUCCESS = 'UPLOAD_AVATAR_SUCCESS';
export const UPLOAD_AVATAR_FAILURE = 'UPLOAD_AVATAR_FAILURE';

export function uploadAvatar(file) {
  console.warn();
  return {
    [CALL_GROUT]: {
      types: [ UPLOAD_AVATAR_REQUEST, UPLOAD_AVATAR_SUCCESS, UPLOAD_AVATAR_FAILURE ],
      method: 'uploadAvatar',
      methodData: file
    }
  }
}
