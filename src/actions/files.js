import { isObject, has } from 'lodash';
import { CALL_GROUT, Schemas } from '../middleware'

export const GET_FILES_REQUEST = 'GET_FILES_REQUEST';
export const GET_FILES_SUCCESS = 'GET_FILES_SUCCESS';
export const GET_FILES_FAILURE = 'GET_FILES_FAILURE';

export function getFiles(getData) {
  // console.log('getFiles action called.', getData);
  if(!has(getData, 'projectName')){
    console.error({
      description: 'ProjectName is required to load files.',
      getData: getData
    });
    return {type: GET_FILES_FAILURE, payload: {message: 'ProjectName is required to get files.'}};
  }
  return {
    [CALL_GROUT]: {
      types: [ GET_FILES_REQUEST, GET_FILES_SUCCESS, GET_FILES_FAILURE ],
      model: 'Project',
      modelData: getData.projectName,
      subModel: 'Files',
      method: 'get'
    }
  }
}
export const ADD_FILES_REQUEST = 'ADD_FILES_REQUEST';
export const ADD_FILES_SUCCESS = 'ADD_FILES_SUCCESS';
export const ADD_FILES_FAILURE = 'ADD_FILES_FAILURE';

export function addFiles(filesData) {
  console.log('add files action called', filesData);
  if(!has(filesData, 'projectName')){
    console.error({
      description: 'ProjectName is required to load files.', filesData
    });
    return {type: ADD_FILES_FAILURE, payload: {message: 'ProjectName is required to get files.'}};
  }
  return {
    [CALL_GROUT]: {
      types: [ ADD_FILES_REQUEST, ADD_FILES_SUCCESS, ADD_FILES_FAILURE ],
      model: 'Project',
      modelData: filesData.projectName,
      subModel: 'Files',
      method: 'add',
      methodData: filesData
    }
  }
}
export const GET_FILE_REQUEST = 'GET_FILE_REQUEST';
export const GET_FILE_SUCCESS = 'GET_FILE_SUCCESS';
export const GET_FILE_FAILURE = 'GET_FILE_FAILURE';

export function getFile(getData) {
  // console.log('getFile action called.', getData);
  return {
    [CALL_GROUT]: {
      types: [ GET_FILE_REQUEST, GET_FILE_SUCCESS, GET_FILE_FAILURE ],
      model: 'Project',
      modelData: getData.projectName,
      subModel: 'File',
      subModelData: getData.path,
      method: 'get'
    }
  }
}


export const DELETE_FILE_REQUEST = 'DELETE_FILE_REQUEST';
export const DELETE_FILE_SUCCESS = 'DELETE_FILE_SUCCESS';
export const DELETE_FILE_FAILURE = 'DELETE_FILE_FAILURE';

export function deleteFile(projectData) {
  let projectName = (isObject(projectData) && has(projectData, 'name')) ? projectData.name : projectData;
  return {
    [CALL_GROUT]: {
      types: [ DELETE_FILE_REQUEST, DELETE_FILE_SUCCESS, DELETE_FILE_FAILURE ],
      model: 'Project',
      modelData: projectName,
      subModel: 'File',
      method: 'del'
    }
  }
}
