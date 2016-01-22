'use strict';

var _clone = require('lodash/clone');

var _clone2 = _interopRequireDefault(_clone);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ADD_FOLDER_FAILURE = exports.ADD_FOLDER_SUCCESS = exports.ADD_FOLDER_REQUEST = exports.DELETE_FILE_FAILURE = exports.DELETE_FILE_SUCCESS = exports.DELETE_FILE_REQUEST = exports.ADD_FILE_FAILURE = exports.ADD_FILE_SUCCESS = exports.ADD_FILE_REQUEST = exports.GET_FILE_FAILURE = exports.GET_FILE_SUCCESS = exports.GET_FILE_REQUEST = exports.ADD_FILES_FAILURE = exports.ADD_FILES_SUCCESS = exports.ADD_FILES_REQUEST = exports.GET_FILES_FAILURE = exports.GET_FILES_SUCCESS = exports.GET_FILES_REQUEST = undefined;
exports.getFiles = getFiles;
exports.addFiles = addFiles;
exports.getFile = getFile;
exports.addFile = addFile;
exports.deleteFile = deleteFile;
exports.addFolder = addFolder;

var _middleware = require('../middleware');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var GET_FILES_REQUEST = exports.GET_FILES_REQUEST = 'GET_FILES_REQUEST';
var GET_FILES_SUCCESS = exports.GET_FILES_SUCCESS = 'GET_FILES_SUCCESS';
var GET_FILES_FAILURE = exports.GET_FILES_FAILURE = 'GET_FILES_FAILURE';
/**
 * @description Get list of files
 * @param {Object} addData.project - Object containing data of project
 * @param {String} addData.project.name - Name of project to add file to
 * @param {String} addData.project.owner - Username of owner of project (in url)
 */
function getFiles(getData) {
  var project = getProjectFromData(getData);
  if (!project) {
    console.error('Project data is required to get files.');
    return { type: GET_FILES_FAILURE, payload: { message: 'Project data is required to get files.' } };
  }
  return _defineProperty({}, _middleware.CALL_GROUT, {
    types: [GET_FILES_REQUEST, GET_FILES_SUCCESS, GET_FILES_FAILURE],
    model: 'Project',
    modelData: project,
    subModel: 'Directory',
    method: 'get'
  });
}
var ADD_FILES_REQUEST = exports.ADD_FILES_REQUEST = 'ADD_FILES_REQUEST';
var ADD_FILES_SUCCESS = exports.ADD_FILES_SUCCESS = 'ADD_FILES_SUCCESS';
var ADD_FILES_FAILURE = exports.ADD_FILES_FAILURE = 'ADD_FILES_FAILURE';
/**
 * @description Add files to project
 * @param {Object} addData - Project and path data of new file
 * @param {Array|Object} addData.files - Array of files to add or file object
 * @param {Object} addData.project - Object containing data of project
 * @param {String} addData.project.name - Name of project to add file to
 * @param {String} addData.project.owner - Username of owner of project (in url)
 */
function addFiles(filesData) {
  var project = getProjectFromData(filesData);
  if (!project) {
    console.error('Project data is required to add a file.');
    return { type: ADD_FILES_FAILURE, payload: { message: 'Project data is required to get a file.' } };
  }
  if (!filesData.files) {
    console.error('Directory array is required to add files.');
    return { type: ADD_FILES_FAILURE, payload: { message: 'Directory list is required to add.' } };
  }
  return _defineProperty({}, _middleware.CALL_GROUT, {
    types: [ADD_FILES_REQUEST, ADD_FILES_SUCCESS, ADD_FILES_FAILURE],
    model: 'Project',
    modelData: project,
    subModel: 'Directory',
    method: 'add',
    methodData: filesData.files
  });
}
var GET_FILE_REQUEST = exports.GET_FILE_REQUEST = 'GET_FILE_REQUEST';
var GET_FILE_SUCCESS = exports.GET_FILE_SUCCESS = 'GET_FILE_SUCCESS';
var GET_FILE_FAILURE = exports.GET_FILE_FAILURE = 'GET_FILE_FAILURE';
/**
 * @description Get a file
 * @param {Object} addData - Project and path data of new file
 * @param {String} addData.path - Path of new file
 * @param {Object} addData.project - Object containing data of project
 * @param {String} addData.project.name - Name of project to add file to
 * @param {String} addData.project.owner - Username of owner of project (in url)
 */
function getFile(getData) {
  var path = getData.path;

  var project = getProjectFromData(getData);
  if (!project) {
    console.error('Project data is required to get a file.');
    return { type: GET_FILE_FAILURE, payload: { message: 'Project data is required to get a file.' } };
  }
  if (!path) {
    console.error({ description: 'Path is required to get a file.', getData: getData });
    return { type: GET_FILE_FAILURE, payload: { message: 'Path is required to get a file.' } };
  }
  return _defineProperty({}, _middleware.CALL_GROUT, {
    types: [GET_FILE_REQUEST, GET_FILE_SUCCESS, GET_FILE_FAILURE],
    model: 'Project',
    modelData: project,
    subModel: 'File',
    subModelData: getData.path,
    method: 'get'
  });
}

var ADD_FILE_REQUEST = exports.ADD_FILE_REQUEST = 'ADD_FILE_REQUEST';
var ADD_FILE_SUCCESS = exports.ADD_FILE_SUCCESS = 'ADD_FILE_SUCCESS';
var ADD_FILE_FAILURE = exports.ADD_FILE_FAILURE = 'ADD_FILE_FAILURE';
/**
 * @description Add a file
 * @param {Object} addData - Project and path data of new file
 * @param {String} addData.path - Path of new file
 * @param {Object} addData.project - Object containing data of project
 * @param {String} addData.project.name - Name of project to add file to
 * @param {String} addData.project.owner - Username of owner of project (in url)
 */
function addFile(addData) {
  var path = addData.path;

  var project = getProjectFromData(addData);
  if (!project) {
    console.error({ description: 'Project data is required to add a file.', addData: addData });
    return { type: ADD_FILE_FAILURE, payload: { message: 'Project data is required to add a file.' } };
  }
  if (!path) {
    console.error({ description: 'Path is required to add file.', addData: addData });
    return { type: ADD_FILE_FAILURE, payload: { message: 'Path is required to add a file.' } };
  }
  return _defineProperty({}, _middleware.CALL_GROUT, {
    types: [ADD_FILE_REQUEST, ADD_FILE_SUCCESS, ADD_FILE_FAILURE],
    model: 'Project',
    modelData: project,
    subModel: 'Directory',
    method: 'addFile',
    methodData: { path: path }
  });
}

var DELETE_FILE_REQUEST = exports.DELETE_FILE_REQUEST = 'DELETE_FILE_REQUEST';
var DELETE_FILE_SUCCESS = exports.DELETE_FILE_SUCCESS = 'DELETE_FILE_SUCCESS';
var DELETE_FILE_FAILURE = exports.DELETE_FILE_FAILURE = 'DELETE_FILE_FAILURE';
/**
 * @description Delete a file
 * @param {Object} addData - Project and path data of file to be deleted
 * @param {String} addData.path - Path of file to be deleted
 * @param {Object} addData.project - Object containing project data
 * @param {String} addData.project.name - Name of project that contains file
 * @param {String} addData.project.owner - Username of owner of project (in url)
 */
function deleteFile(deleteData) {
  var path = deleteData.path;

  var projectData = getProjectFromData(deleteData);
  if (!projectData.name) {
    console.error('Project is required to delete a file.');
    return { type: DELETE_FILE_FAILURE, payload: { message: 'Project is required to delete file.' } };
  }
  if (!path) {
    console.error({
      description: 'Path is required to delete file.', deleteData: deleteData
    });
    return { type: DELETE_FILE_FAILURE, payload: { message: 'Path is required to delete file.' } };
  }
  console.log('calling delete file action with data:', projectData);
  return _defineProperty({}, _middleware.CALL_GROUT, {
    types: [DELETE_FILE_REQUEST, DELETE_FILE_SUCCESS, DELETE_FILE_FAILURE],
    model: 'Project',
    modelData: projectData,
    subModel: 'File',
    subModelData: { path: path },
    method: 'remove'
  });
}

var ADD_FOLDER_REQUEST = exports.ADD_FOLDER_REQUEST = 'ADD_FOLDER_REQUEST';
var ADD_FOLDER_SUCCESS = exports.ADD_FOLDER_SUCCESS = 'ADD_FOLDER_SUCCESS';
var ADD_FOLDER_FAILURE = exports.ADD_FOLDER_FAILURE = 'ADD_FOLDER_FAILURE';
/**
 * @description Add a folder
 * @param {Object} addData - Project and path data of new folder
 * @param {String} addData.path - Path of new folder
 * @param {Object} addData.project - Object containing project data
 * @param {String} addData.project.name - Name of project
 * @param {String} addData.project.owner - Username of owner of project (in url)
 */
function addFolder(addData) {
  var path = addData.path;

  var project = getProjectFromData(addData);
  if (!project) {
    console.error({ description: 'Project data is required to add a file.', addData: addData });
    return { type: ADD_FOLDER_FAILURE, payload: { message: 'Project data is required to add a folder.' } };
  }
  if (!path) {
    console.error({ description: 'Path is required to add file.', addData: addData });
    return { type: ADD_FOLDER_FAILURE, payload: { message: 'Path is required to add a folder.' } };
  }
  return _defineProperty({}, _middleware.CALL_GROUT, {
    types: [ADD_FOLDER_REQUEST, ADD_FOLDER_SUCCESS, ADD_FOLDER_FAILURE],
    model: 'Project',
    modelData: project,
    subModel: 'Directory',
    method: 'addFolder',
    methodData: [path, name]
  });
}

function getProjectFromData(data) {
  var project = data.project;
  var projectName = data.projectName;

  var modelData = {};
  if (typeof projectName === 'undefined' && (typeof project === 'undefined' || !project.name)) {
    console.error('Project or projectName is required.');
    return null;
  }
  if (typeof projectName !== 'undefined') {
    modelData.name = projectName;
  } else {
    modelData = (0, _clone2.default)(project);
  }
  return modelData;
}