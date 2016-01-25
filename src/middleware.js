
import { Schema, arrayOf, normalize } from 'normalizr'
import { camelizeKeys } from 'humps'
import { getGrout } from './index';
import { each, isObject, isString, isArray } from 'lodash';
// Fetches an API response and normalizes the result JSON according to schema.
// This makes every API response have the same shape, regardless of how nested it was.
function callGrout(callInfoObj) {
  console.log('callInfoObj:', callInfoObj);
  const { model, subModel, subModelData, method, schema } = callInfoObj;
  let { modelData, methodData } = callInfoObj;
  let grout = getGrout();
  if (!isArray(modelData)) {
    modelData = [modelData];
  }
  if(model){
    grout = (isObject(modelData) || isString(modelData)) ? grout[model].apply(grout, modelData) : grout[model];
  }
  if(subModel){
    grout = grout[subModel];
  }
  if (!isArray(methodData)) {
    methodData = [methodData];
  }
  return grout[method].apply(grout, methodData).then((response) => {
    let endResult;
    if(schema){
      const camelizedJson = camelizeKeys(response)
      endResult = Object.assign({}, normalize(camelizedJson, schema))
    } else {
      endResult = response;
    }
    return endResult;
  }, (err) => {
    console.error('Error calling grout', err);
    return Promise.reject(err);
  });
}

// We use this Normalizr schemas to transform API responses from a nested form
// to a flat form where repos and users are placed in `entities`, and nested
// JSON objects are replaced with their IDs. This is very convenient for
// consumption by reducers, because we can easily build a normalized tree
// and keep it updated as we fetch more data.

// Read more about Normalizr: https://github.com/gaearon/normalizr

const accountSchema = new Schema('accounts', {
  idAttribute: 'id'
})
const projectSchema = new Schema('projects', {
  idAttribute: 'name'
})
const templateSchema = new Schema('templates', {
  idAttribute: 'id'
})
const groupSchema = new Schema('groups', {
  idAttribute: 'id'
})
// projectSchema.define({
//   owner: accountSchema,
//   collaborators: arrayOf(accountSchema)
// })
// Schemas for Tessellate API responses
export const Schemas = {
  ACCOUNT: accountSchema,
  ACCOUNT_ARRAY: arrayOf(accountSchema),
  PROJECT: projectSchema,
  PROJECT_ARRAY: arrayOf(projectSchema),
  GROUP: groupSchema,
  GROUP_ARRAY: arrayOf(groupSchema)
}

// Action key that carries API call info interpreted by this Redux middleware.
export const CALL_GROUT = Symbol('Call Grout')

// A Redux middleware that interprets actions with CALL_GROUT info specified.
// Performs the call and promises when such actions are dispatched.
export default store => next => action => {
  const callAPI = action[CALL_GROUT]
  if (typeof callAPI === 'undefined') {
    return next(action)
  }

  let { model, modelData, subModel, subModelData, method, methodData, cb } = callAPI
  const { schema, types, redirect } = callAPI

  if (typeof method === 'function') {
    method = method(store.getState())
  }

  if (typeof method !== 'string') {
    throw new Error('Specify a method.')
  }

  if (!Array.isArray(types) || types.length !== 3) {
    throw new Error('Expected an array of three action types.')
  }

  if (!types.every(type => typeof type === 'string')) {
    throw new Error('Expected action types to be strings.')
  }

  function actionWith(data) {
    const finalAction = Object.assign({}, action, data)
    delete finalAction[CALL_GROUT]
    return finalAction
  }

  const [ requestType, successType, failureType ] = types
  next(actionWith({ type: requestType }))
  const callInfoObj = { model, modelData, subModel, subModelData, method, methodData, schema, redirect };
  return callGrout(callInfoObj).then(
    response => {
      next(actionWith({
        response,
        type: successType
      }))
      if(redirect) {
        dispatch(pushState(null, redirect))
      }
    }, error => next(actionWith({
      type: failureType,
      error: error.message || error || 'Something bad happened'
    }))
  )
}
