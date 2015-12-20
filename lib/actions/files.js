'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DELETE_FILE_FAILURE = exports.DELETE_FILE_SUCCESS = exports.DELETE_FILE_REQUEST = exports.GET_FILE_FAILURE = exports.GET_FILE_SUCCESS = exports.GET_FILE_REQUEST = exports.GET_FILES_FAILURE = exports.GET_FILES_SUCCESS = exports.GET_FILES_REQUEST = undefined;
exports.getFiles = getFiles;
exports.getFile = getFile;
exports.deleteFile = deleteFile;

var _lodash = require('lodash');

var _middleware = require('../middleware');

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var GET_FILES_REQUEST = exports.GET_FILES_REQUEST = 'GET_FILES_REQUEST';
var GET_FILES_SUCCESS = exports.GET_FILES_SUCCESS = 'GET_FILES_SUCCESS';
var GET_FILES_FAILURE = exports.GET_FILES_FAILURE = 'GET_FILES_FAILURE';

function getFiles(getData) {
  console.log('getFiles action called.', getData);
  if (!(0, _lodash.has)(getData, 'projectName')) {
    console.error({
      description: 'ProjectName is required to load files.',
      getData: getData
    });
    return { type: GET_FILES_FAILURE, payload: { message: 'ProjectName is required to get files.' } };
  }
  return _defineProperty({}, _middleware.CALL_GROUT, {
    types: [GET_FILES_REQUEST, GET_FILES_SUCCESS, GET_FILES_FAILURE],
    model: 'Project',
    modelData: getData.projectName,
    subModel: 'Files',
    method: 'get',
    schema: _middleware.Schemas.PROJECT_ARRAY
  });
}

var GET_FILE_REQUEST = exports.GET_FILE_REQUEST = 'GET_FILE_REQUEST';
var GET_FILE_SUCCESS = exports.GET_FILE_SUCCESS = 'GET_FILE_SUCCESS';
var GET_FILE_FAILURE = exports.GET_FILE_FAILURE = 'GET_FILE_FAILURE';

function getFile(getData) {
  console.log('getFile action called.', getData);
  return _defineProperty({}, _middleware.CALL_GROUT, {
    types: [GET_FILE_REQUEST, GET_FILE_SUCCESS, GET_FILE_FAILURE],
    model: 'Project',
    modelData: getData.projectName,
    subModel: 'File',
    subModelData: getData.path,
    method: 'get',
    schema: _middleware.Schemas.PROJECT_ARRAY
  });
}

var DELETE_FILE_REQUEST = exports.DELETE_FILE_REQUEST = 'DELETE_FILE_REQUEST';
var DELETE_FILE_SUCCESS = exports.DELETE_FILE_SUCCESS = 'DELETE_FILE_SUCCESS';
var DELETE_FILE_FAILURE = exports.DELETE_FILE_FAILURE = 'DELETE_FILE_FAILURE';

function deleteFile(projectData) {
  var projectName = (0, _lodash.isObject)(projectData) && (0, _lodash.has)(projectData, 'name') ? projectData.name : projectData;
  return _defineProperty({}, _middleware.CALL_GROUT, {
    types: [DELETE_FILE_REQUEST, DELETE_FILE_SUCCESS, DELETE_FILE_FAILURE],
    model: 'Project',
    modelData: projectName,
    subModel: 'File',
    method: 'del',
    schema: _middleware.Schemas.File
  });
}