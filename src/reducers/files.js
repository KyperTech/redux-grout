import {
  FILES_OPEN,
  FINISH_LOAD_FILES,
  FINISH_SYNC_FILES
} from '../actions/files';
import {merge, union, clone} from 'lodash';

export default function files(
  state = {
    example: [
      {name: 'index.html'}
    ]
  },
  action) {
  switch (action.type) {
  case FINISH_LOAD_FILES:
    if(!state[action.projectName]){
      state[action.projectName] = [];
    }
    let currentFiles = clone(state[action.projectName]);
    let newFiles = union(currentFiles, action.files);
    let newState = {};
    newState[action.projectName] = newFiles;
    return merge({}, state, newState);
    break;
  case FINISH_SYNC_FILES:
    let syncState = state;
    if(!state[action.projectName]){
      syncState[action.projectName] = [];
    }
    syncState[action.projectName] = action.files;
    return syncState;
    break;
  default:
    return state;
  }
}
