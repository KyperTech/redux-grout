import { merge } from 'lodash';

export Account from './account';

// Updates an entity cache in response to any action with response.entities.
export function entities(state = { accounts: {}, projects:{}}, action) {
  if (action.response && action.response.entities) {
    return merge({}, state, action.response.entities)
  }
  return state
}
