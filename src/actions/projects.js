import { isObject, has } from 'lodash';
import { getProjectFromData } from './index';
import { CALL_GROUT, Schemas } from '../middleware'
export const GET_PROJECTS_REQUEST = 'GET_PROJECTS_REQUEST';
export const GET_PROJECTS_SUCCESS = 'GET_PROJECTS_SUCCESS';
export const GET_PROJECTS_FAILURE = 'GET_PROJECTS_FAILURE';

export function getProjects(username) {
  if(!username){
    console.error({ description: 'Username is required to get projects.', username });
    return {type: GET_PROJECTS_FAILURE, payload: {message: 'Username is required to get projects.'}};
  }
  return {
    [CALL_GROUT]: {
      types: [ GET_PROJECTS_REQUEST, GET_PROJECTS_SUCCESS, GET_PROJECTS_FAILURE ],
      model: 'Projects',
      modelData: username,
      method: 'get',
      schema: Schemas.PROJECT_ARRAY
    }
  }
}
export const GET_PROJECT_REQUEST = 'GET_PROJECT_REQUEST';
export const GET_PROJECT_SUCCESS = 'GET_PROJECT_SUCCESS';
export const GET_PROJECT_FAILURE = 'GET_PROJECT_FAILURE';

export function getProject(project) {
  if(!project){
    console.error({ description: 'Project data is required to get project.', projectData });
    return {type: ADD_FILE_FAILURE, payload: {message: 'Project data is required to get project.'}};
  }
  return {
    [CALL_GROUT]: {
      types: [ GET_PROJECT_REQUEST, GET_PROJECT_SUCCESS, GET_PROJECT_FAILURE ],
      model: 'Project',
      modelData: [project.name, project.owner.username],
      method: 'get',
      schema: Schemas.PROJECT
    }
  }
}
export const ADD_PROJECT_REQUEST = 'ADD_PROJECT_REQUEST';
export const ADD_PROJECT_SUCCESS = 'ADD_PROJECT_SUCCESS';
export const ADD_PROJECT_FAILURE = 'ADD_PROJECT_FAILURE';

export function addProject(name, username) {
  return {
    [CALL_GROUT]: {
      types: [ ADD_PROJECT_REQUEST, ADD_PROJECT_SUCCESS, ADD_PROJECT_FAILURE ],
      model: 'Projects',
      modelData: [username],
      method: 'add',
      methodData: [{name}],
      schema: Schemas.PROJECT
    }
  }
}

export const UPDATE_PROJECT_REQUEST = 'UPDATE_PROJECT_REQUEST';
export const UPDATE_PROJECT_SUCCESS = 'UPDATE_PROJECT_SUCCESS';
export const UPDATE_PROJECT_FAILURE = 'UPDATE_PROJECT_FAILURE';

export function updateProject(project) {
  if(!project){
    console.error({ description: 'Project data is required to update project.', projectData });
    return {type: UPDATE_PROJECT_FAILURE, payload: {message: 'Project data is required to update project.'}};
  }
  return {
    [CALL_GROUT]: {
      types: [ UPDATE_PROJECT_REQUEST, UPDATE_PROJECT_SUCCESS, UPDATE_PROJECT_FAILURE ],
      model: 'Project',
      modelData: [project.name, project.owner.username],
      method: 'update',
      methodData: project,
      schema: Schemas.PROJECT
    }
  }
}

export const DELETE_PROJECT_REQUEST = 'DELETE_PROJECT_REQUEST';
export const DELETE_PROJECT_SUCCESS = 'DELETE_PROJECT_SUCCESS';
export const DELETE_PROJECT_FAILURE = 'DELETE_PROJECT_FAILURE';

export function deleteProject(project) {
  if(!project){
    console.error({ description: 'Project data is required to delete project.', projectData });
    return {type: DELETE_PROJECT_FAILURE, payload: {message: 'Project data is required to delete project.'}};
  }
  return {
    [CALL_GROUT]: {
      types: [ DELETE_PROJECT_REQUEST, DELETE_PROJECT_SUCCESS, DELETE_PROJECT_FAILURE ],
      model: 'Project',
      modelData: [project.name, project.owner.username],
      method: 'remove',
      schema: Schemas.PROJECT
    }
  }
}

export const ADD_COLLABORATOR_REQUEST = 'ADD_COLLABORATOR_REQUEST';
export const ADD_COLLABORATOR_SUCCESS = 'ADD_COLLABORATOR_SUCCESS';
export const ADD_COLLABORATOR_FAILURE = 'ADD_COLLABORATOR_FAILURE';

export function addCollaborator(user, project) {
  console.log('adding collaborator with user:', user);
  console.log('adding collaborator with project:', project);
  if(!user){
    console.error({ description: 'Collaborator should have user specified.', user });
    return {type: ADD_COLLABORATOR_FAILURE, payload: {message: 'Collaborator should have user specified.'}};
  }
  return {
    [CALL_GROUT]: {
      types: [ ADD_COLLABORATOR_REQUEST, ADD_COLLABORATOR_SUCCESS, ADD_COLLABORATOR_FAILURE ],
      model: 'Project',
      modelData: [project.name, project.owner.username],
      method: 'addCollaborators',
      methodData: [user],
      schema: Schemas.PROJECT
    }
  }
}
