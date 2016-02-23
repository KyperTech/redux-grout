import {
  FILES_OPEN,
  GET_FILES_SUCCESS,
  GET_FILE_SUCCESS
} from '../actions/files'
import {merge, union, clone} from 'lodash'
export function files (
  state = {},
  action) {
  switch (action.type) {
    case GET_FILES_SUCCESS:
      if (!state[action.projectName]) {
        state[action.projectName] = []
      }
      let currentFiles = clone(state[action.projectName])
      let newFiles = union(currentFiles, action.files)
      let newState = {}
      newState[action.projectName] = newFiles
      return merge({}, state, newState)
    case GET_FILE_SUCCESS:
      let syncState = state
      if (!state[action.projectName]) {
        syncState[action.projectName] = []
      }
      syncState[action.projectName] = action.files
      return syncState
    default:
      return state
  }
}
