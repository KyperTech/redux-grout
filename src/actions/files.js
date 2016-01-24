import { isObject, has, clone } from 'lodash';
import { CALL_GROUT, Schemas } from '../middleware'

export const GET_FILES_REQUEST = 'GET_FILES_REQUEST';
export const GET_FILES_SUCCESS = 'GET_FILES_SUCCESS';
export const GET_FILES_FAILURE = 'GET_FILES_FAILURE';
/**
 * @description Get list of files
 * @param {Object} addData.project - Object containing data of project
 * @param {String} addData.project.name - Name of project to add file to
 * @param {String} addData.project.owner - Username of owner of project (in url)
 */
export function getFiles(project) {
  if(!project){
    console.error('Project data is required to get files.');
    return {type: GET_FILES_FAILURE, payload: {message: 'Project data is required to get files.'}};
  }
  return {
    [CALL_GROUT]: {
      types: [ GET_FILES_REQUEST, GET_FILES_SUCCESS, GET_FILES_FAILURE ],
      model: 'Project',
      modelData: [project.name, project.owner],
      subModel: 'Directory',
      method: 'get'
    }
  }
}
export const ADD_FILES_REQUEST = 'ADD_FILES_REQUEST';
export const ADD_FILES_SUCCESS = 'ADD_FILES_SUCCESS';
export const ADD_FILES_FAILURE = 'ADD_FILES_FAILURE';
/**
 * @description Add files to project
 * @param {Object} addData - Project and path data of new file
 * @param {Array|Object} addData.files - Array of files to add or file object
 * @param {Object} addData.project - Object containing data of project
 * @param {String} addData.project.name - Name of project to add file to
 * @param {String} addData.project.owner - Username of owner of project (in url)
 */
export function addFiles(project, files) {
  if(!project){
    console.error('Project is required to add files.');
    return {type: ADD_FILES_FAILURE, payload: {message: 'Project data is required to get a file.'}};
  }
  if(!files){
    console.error('Directory array is required to add files.');
    return {type: ADD_FILES_FAILURE, payload: {message: 'Directory list is required to add.'}};
  }
  return {
    [CALL_GROUT]: {
      types: [ ADD_FILES_REQUEST, ADD_FILES_SUCCESS, ADD_FILES_FAILURE ],
      model: 'Project',
      modelData: [project.name, project.owner],
      subModel: 'Directory',
      method: 'add',
      methodData: filesData.files
    }
  }
}
export const GET_FILE_REQUEST = 'GET_FILE_REQUEST';
export const GET_FILE_SUCCESS = 'GET_FILE_SUCCESS';
export const GET_FILE_FAILURE = 'GET_FILE_FAILURE';
/**
 * @description Get a file
 * @param {Object} addData - Project and path data of new file
 * @param {String} addData.path - Path of new file
 * @param {Object} addData.project - Object containing data of project
 * @param {String} addData.project.name - Name of project to add file to
 * @param {String} addData.project.owner - Username of owner of project (in url)
 */
export function getFile(project, path) {
  if(!project){
    console.error('Project data is required to get a file.');
    return {type: GET_FILE_FAILURE, payload: {message: 'Project data is required to get a file.'}};
  }
  if(!path){
    console.error({ description: 'Path is required to get a file.', getData });
    return {type: GET_FILE_FAILURE, payload: {message: 'Path is required to get a file.'}};
  }
  return {
    [CALL_GROUT]: {
      types: [ GET_FILE_REQUEST, GET_FILE_SUCCESS, GET_FILE_FAILURE ],
      model: 'Project',
      modelData: [project.name, project.owner],
      subModel: 'File',
      subModelData: getData.path,
      method: 'get'
    }
  }
}

export const ADD_FILE_REQUEST = 'ADD_FILE_REQUEST';
export const ADD_FILE_SUCCESS = 'ADD_FILE_SUCCESS';
export const ADD_FILE_FAILURE = 'ADD_FILE_FAILURE';
/**
 * @description Add a file
 * @param {Object} addData - Project and path data of new file
 * @param {String} addData.path - Path of new file
 * @param {Object} addData.project - Object containing data of project
 * @param {String} addData.project.name - Name of project to add file to
 * @param {String} addData.project.owner - Username of owner of project (in url)
 */
export function addFile(project, path) {
  if(!project || !project.name){
    console.error({ description: 'Project with name is required to add a file.'});
    return {type: ADD_FILE_FAILURE, payload: {message: 'Project is required to add a file.'}};
  }
  if(!path){
    console.error({ description: 'Path is required to add file.' });
    return {type: ADD_FILE_FAILURE, payload: {message: 'Path is required to add a file.'}};
  }
  return {
    [CALL_GROUT]: {
      types: [ ADD_FILE_REQUEST, ADD_FILE_SUCCESS, ADD_FILE_FAILURE ],
      model: 'Project',
      modelData: [project.name, project.owner],
      subModel: 'Directory',
      method: 'addFile',
      methodData: [path]
    }
  }
}

export const DELETE_FILE_REQUEST = 'DELETE_FILE_REQUEST';
export const DELETE_FILE_SUCCESS = 'DELETE_FILE_SUCCESS';
export const DELETE_FILE_FAILURE = 'DELETE_FILE_FAILURE';
/**
 * @description Delete a file
 * @param {Object} addData - Project and path data of file to be deleted
 * @param {String} addData.path - Path of file to be deleted
 * @param {Object} addData.project - Object containing project data
 * @param {String} addData.project.name - Name of project that contains file
 * @param {String} addData.project.owner - Username of owner of project (in url)
 */
export function deleteFile(project, path) {
  if(!project){
    console.error('Project is required to delete a file.');
    return {type: DELETE_FILE_FAILURE, payload: {message: 'Project is required to delete file.'}};
  }
  if(!path){
    console.error({
      description: 'Path is required to delete file.', deleteData
    });
    return {type: DELETE_FILE_FAILURE, payload: {message: 'Path is required to delete file.'}};
  }
  console.log('calling delete file action with data:', projectData);
  return {
    [CALL_GROUT]: {
      types: [ DELETE_FILE_REQUEST, DELETE_FILE_SUCCESS, DELETE_FILE_FAILURE ],
      model: 'Project',
      modelData: [project.name, project.owner],
      subModel: 'File',
      subModelData: [path],
      method: 'remove'
    }
  }
}

export const ADD_FOLDER_REQUEST = 'ADD_FOLDER_REQUEST';
export const ADD_FOLDER_SUCCESS = 'ADD_FOLDER_SUCCESS';
export const ADD_FOLDER_FAILURE = 'ADD_FOLDER_FAILURE';
/**
 * @description Add a folder
 * @param {Object} addData - Project and path data of new folder
 * @param {String} addData.path - Path of new folder
 * @param {Object} addData.project - Object containing project data
 * @param {String} addData.project.name - Name of project
 * @param {String} addData.project.owner - Username of owner of project (in url)
 */
export function addFolder(project, path) {
  if(!project){
    console.error({ description: 'Project data is required to add a file.', addData });
    return {type: ADD_FOLDER_FAILURE, payload: {message: 'Project data is required to add a folder.'}};
  }
  if(!path){
    console.error({ description: 'Path is required to add file.', addData });
    return {type: ADD_FOLDER_FAILURE, payload: {message: 'Path is required to add a folder.'}};
  }
  return {
    [CALL_GROUT]: {
      types: [ ADD_FOLDER_REQUEST, ADD_FOLDER_SUCCESS, ADD_FOLDER_FAILURE ],
      model: 'Project',
      modelData: [project.name, project.owner],
      subModel: 'Directory',
      method: 'addFolder',
      methodData: [path, name]
    }
  }
}
