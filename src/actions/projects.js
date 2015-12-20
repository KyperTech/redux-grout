import { isObject, has } from 'lodash';
import { CALL_GROUT, Schemas } from '../middleware'
export const GET_PROJECTS_REQUEST = 'GET_PROJECTS_REQUEST';
export const GET_PROJECTS_SUCCESS = 'GET_PROJECTS_SUCCESS';
export const GET_PROJECTS_FAILURE = 'GET_PROJECTS_FAILURE';

export function getProjects() {
  console.log('getProjects action called.');
  return {
    [CALL_GROUT]: {
      types: [ GET_PROJECTS_REQUEST, GET_PROJECTS_SUCCESS, GET_PROJECTS_FAILURE ],
      model: 'Projects',
      method: 'get',
      schema: Schemas.PROJECT_ARRAY
    }
  }
}

export const NEW_PROJECT_REQUEST = 'NEW_PROJECT_REQUEST';
export const NEW_PROJECT_SUCCESS = 'NEW_PROJECT_SUCCESS';
export const NEW_PROJECT_FAILURE = 'NEW_PROJECT_FAILURE';

export function newProject(projectData) {
  console.log('newProject action called.', projectData);
  return {
    [CALL_GROUT]: {
      types: [ NEW_PROJECT_REQUEST, NEW_PROJECT_SUCCESS, NEW_PROJECT_FAILURE ],
      model: 'Projects',
      method: 'add',
      methodData: projectData,
      schema: Schemas.PROJECT
    }
  }
}
export const UPDATE_PROJECT_REQUEST = 'UPDATE_PROJECT_REQUEST';
export const UPDATE_PROJECT_SUCCESS = 'UPDATE_PROJECT_SUCCESS';
export const UPDATE_PROJECT_FAILURE = 'UPDATE_PROJECT_FAILURE';

export function updateProject(projectData) {
  return {
    [CALL_GROUT]: {
      types: [ UPDATE_PROJECT_REQUEST, UPDATE_PROJECT_SUCCESS, UPDATE_PROJECT_FAILURE ],
      model: 'Project',
      modelData: projectData.name,
      method: 'update',
      methodData: projectData,
      schema: Schemas.PROJECT
    }
  }
}

export const DELETE_PROJECT_REQUEST = 'DELETE_PROJECT_REQUEST';
export const DELETE_PROJECT_SUCCESS = 'DELETE_PROJECT_SUCCESS';
export const DELETE_PROJECT_FAILURE = 'DELETE_PROJECT_FAILURE';

export function deleteProject(projectData) {
  let projectName = (isObject(projectData) && has(projectData, 'name')) ? projectData.name : projectData;
  return {
    [CALL_GROUT]: {
      types: [ DELETE_PROJECT_REQUEST, DELETE_PROJECT_SUCCESS, DELETE_PROJECT_FAILURE ],
      model: 'Project',
      modelData: projectName,
      method: 'del',
      schema: Schemas.PROJECT
    }
  }
}
