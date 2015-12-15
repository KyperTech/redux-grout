
import { CALL_GROUT, Schemas } from './middleware'

export const PROJECT_REQUEST = 'PROJECT_REQUEST';
export const PROJECT_SUCCESS = 'PROJECT_SUCCESS';
export const PROJECT_FAILURE = 'PROJECT_FAILURE';

export function getProject(projectName) {
  console.log('Get project action called.', projectName);
  return {
    [CALL_MATTER]: {
      types: [ PROJECT_REQUEST, PROJECT_SUCCESS, PROJECT_FAILURE ],
      model: 'App',
      method: 'get',
      callData: projectName,
      schema: Schemas.PROJECT
    }
  }
}
