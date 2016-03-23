import { merge, omit } from 'lodash'
export { account } from './account'
export { files } from './files'
export { projects } from './projects'

// Updates an entity cache in response to any action with response.entities.
export function entities (state = { users: {}, projects: {} }, action) {
  if (action.response && action.response.entities) {
    return merge({}, state, action.response.entities)
  }
  if (action.method === 'remove') {
    console.debug('****************** state before:', state)
    if (!state.entities[action.model.toLowerCase()]) throw new Error('Entity does not exist')
    const stateWithoutEntity = omit(state[action.model.toLowerCase()], `${action.modelData[1]}/${action.modelData[0]}`)
    console.debug('returning state:', stateWithoutEntity)
    return stateWithoutEntity
  }
  return state
}
