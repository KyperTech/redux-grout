import { isObject, has } from 'lodash';
import { getProjectFromData } from './index';
import { CALL_GROUT, Schemas } from '../middleware'
export const GET_PROJECTS_REQUEST = 'GET_PROJECTS_REQUEST';
export const GET_PROJECTS_SUCCESS = 'GET_PROJECTS_SUCCESS';
export const GET_PROJECTS_FAILURE = 'GET_PROJECTS_FAILURE';

export function getProjects() {
  return {
    [CALL_GROUT]: {
      types: [ GET_PROJECTS_REQUEST, GET_PROJECTS_SUCCESS, GET_PROJECTS_FAILURE ],
      model: 'Projects',
      method: 'get',
      schema: Schemas.PROJECT_ARRAY
    }
  }
}
export const GET_PROJECT_REQUEST = 'GET_PROJECT_REQUEST';
export const GET_PROJECT_SUCCESS = 'GET_PROJECT_SUCCESS';
export const GET_PROJECT_FAILURE = 'GET_PROJECT_FAILURE';

export function getProject(projectData) {
  let project = getProjectFromData(projectData);
  if(!project){
    console.error({ description: 'Project data is required to get project.', projectData });
    return {type: ADD_FILE_FAILURE, payload: {message: 'Project data is required to get project.'}};
  }
  return {
    [CALL_GROUT]: {
      types: [ GET_PROJECT_REQUEST, GET_PROJECT_SUCCESS, GET_PROJECT_FAILURE ],
      model: 'Project',
      modelData: project,
      method: 'get',
      schema: Schemas.PROJECT
    }
  }
}
export const ADD_PROJECT_REQUEST = 'ADD_PROJECT_REQUEST';
export const ADD_PROJECT_SUCCESS = 'ADD_PROJECT_SUCCESS';
export const ADD_PROJECT_FAILURE = 'ADD_PROJECT_FAILURE';

export function addProject(projectData) {
  return {
    [CALL_GROUT]: {
      types: [ ADD_PROJECT_REQUEST, ADD_PROJECT_SUCCESS, ADD_PROJECT_FAILURE ],
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
  let project = getProjectFromData(projectData);
  if(!project){
    console.error({ description: 'Project data is required to update project.', projectData });
    return {type: ADD_FILE_FAILURE, payload: {message: 'Project data is required to update project.'}};
  }
  return {
    [CALL_GROUT]: {
      types: [ UPDATE_PROJECT_REQUEST, UPDATE_PROJECT_SUCCESS, UPDATE_PROJECT_FAILURE ],
      model: 'Project',
      modelData: project,
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
  let project = getProjectFromData(projectData);
  if(!project){
    console.error({ description: 'Project data is required to delete project.', projectData });
    return {type: ADD_FILE_FAILURE, payload: {message: 'Project data is required to delete project.'}};
  }
  return {
    [CALL_GROUT]: {
      types: [ DELETE_PROJECT_REQUEST, DELETE_PROJECT_SUCCESS, DELETE_PROJECT_FAILURE ],
      model: 'Project',
      modelData: project,
      method: 'remove',
      schema: Schemas.PROJECT
    }
  }
}
