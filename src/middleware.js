
import { Schema, arrayOf, normalize } from 'normalizr'
import { camelizeKeys } from 'humps'
import { getGrout } from './index';

// Fetches an API response and normalizes the result JSON according to schema.
// This makes every API response have the same shape, regardless of how nested it was.
function callGrout(method, schema, callData, model) {
  let grout = getGrout();
  if(model){
    console.log('calling grout from middleware:')
    return grout[model][method](callData).then((response) => {
      console.log('grout responed:', response);
      const camelizedJson = camelizeKeys(response)
      return Object.assign({},
        normalize(camelizedJson, schema))
    }, (err) => {
      console.error('Error calling grout');
    });
  } else {
    console.log('calling grout from middleware:');
    return grout[method](callData).then((response) => {
      console.log('grout responed:', response);
      const camelizedJson = camelizeKeys(response)
      return Object.assign({},
        normalize(camelizedJson, schema))
    }, (err) => {
      console.error('Error calling grout');
    });
  }

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
  idAttribute: 'id'
})
projectSchema.define({
  owner: accountSchema
})
// Schemas for Github API responses.
export const Schemas = {
  ACCOUNT: accountSchema,
  ACCOUNT_ARRAY: arrayOf(accountSchema),
  PROJECT: projectSchema,
  PROJECT_ARRAY: arrayOf(projectSchema)
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

  let { model, method, callData } = callAPI
  const { schema, types } = callAPI
  if(model) {
    console.warn('Model was provided');
  }

  if (typeof method === 'function') {
    method = method(store.getState())
  }

  if (typeof method !== 'string') {
    throw new Error('Specify a string method URL.')
  }
  if (!schema) {
    throw new Error('Specify one of the exported Schemas.')
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
  console.log('calling grout', method, schema, callData);
  return callGrout(method, schema, callData, model).then(
    response => next(actionWith({
      response,
      type: successType
    })),
    error => next(actionWith({
      type: failureType,
      error: error.message || 'Something bad happened'
    }))
  )
}
