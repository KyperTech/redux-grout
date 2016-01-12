'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DELETE_PROJECT_FAILURE = exports.DELETE_PROJECT_SUCCESS = exports.DELETE_PROJECT_REQUEST = exports.UPDATE_PROJECT_FAILURE = exports.UPDATE_PROJECT_SUCCESS = exports.UPDATE_PROJECT_REQUEST = exports.ADD_PROJECT_FAILURE = exports.ADD_PROJECT_SUCCESS = exports.ADD_PROJECT_REQUEST = exports.GET_PROJECT_FAILURE = exports.GET_PROJECT_SUCCESS = exports.GET_PROJECT_REQUEST = exports.GET_PROJECTS_FAILURE = exports.GET_PROJECTS_SUCCESS = exports.GET_PROJECTS_REQUEST = undefined;
exports.getProjects = getProjects;
exports.getProject = getProject;
exports.addProject = addProject;
exports.updateProject = updateProject;
exports.deleteProject = deleteProject;

var _lodash = require('lodash');

var _index = require('./index');

var _middleware = require('../middleware');

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var GET_PROJECTS_REQUEST = exports.GET_PROJECTS_REQUEST = 'GET_PROJECTS_REQUEST';
var GET_PROJECTS_SUCCESS = exports.GET_PROJECTS_SUCCESS = 'GET_PROJECTS_SUCCESS';
var GET_PROJECTS_FAILURE = exports.GET_PROJECTS_FAILURE = 'GET_PROJECTS_FAILURE';

function getProjects() {
  return _defineProperty({}, _middleware.CALL_GROUT, {
    types: [GET_PROJECTS_REQUEST, GET_PROJECTS_SUCCESS, GET_PROJECTS_FAILURE],
    model: 'Projects',
    method: 'get',
    schema: _middleware.Schemas.PROJECT_ARRAY
  });
}
var GET_PROJECT_REQUEST = exports.GET_PROJECT_REQUEST = 'GET_PROJECT_REQUEST';
var GET_PROJECT_SUCCESS = exports.GET_PROJECT_SUCCESS = 'GET_PROJECT_SUCCESS';
var GET_PROJECT_FAILURE = exports.GET_PROJECT_FAILURE = 'GET_PROJECT_FAILURE';

function getProject(projectData) {
  // console.log('getProject action called.', projectData);
  var project = (0, _index.getProjectFromData)(projectData);
  if (!project) {
    console.error({ description: 'Project data is required to get project.', projectData: projectData });
    return { type: ADD_FILE_FAILURE, payload: { message: 'Project data is required to get project.' } };
  }
  return _defineProperty({}, _middleware.CALL_GROUT, {
    types: [GET_PROJECT_REQUEST, GET_PROJECT_SUCCESS, GET_PROJECT_FAILURE],
    model: 'Project',
    modelData: project,
    method: 'get',
    schema: _middleware.Schemas.PROJECT
  });
}
var ADD_PROJECT_REQUEST = exports.ADD_PROJECT_REQUEST = 'ADD_PROJECT_REQUEST';
var ADD_PROJECT_SUCCESS = exports.ADD_PROJECT_SUCCESS = 'ADD_PROJECT_SUCCESS';
var ADD_PROJECT_FAILURE = exports.ADD_PROJECT_FAILURE = 'ADD_PROJECT_FAILURE';

function addProject(projectData) {
  // console.log('addProject action called.', projectData);
  return _defineProperty({}, _middleware.CALL_GROUT, {
    types: [ADD_PROJECT_REQUEST, ADD_PROJECT_SUCCESS, ADD_PROJECT_FAILURE],
    model: 'Projects',
    method: 'add',
    methodData: projectData,
    schema: _middleware.Schemas.PROJECT
  });
}
var UPDATE_PROJECT_REQUEST = exports.UPDATE_PROJECT_REQUEST = 'UPDATE_PROJECT_REQUEST';
var UPDATE_PROJECT_SUCCESS = exports.UPDATE_PROJECT_SUCCESS = 'UPDATE_PROJECT_SUCCESS';
var UPDATE_PROJECT_FAILURE = exports.UPDATE_PROJECT_FAILURE = 'UPDATE_PROJECT_FAILURE';

function updateProject(projectData) {
  var project = (0, _index.getProjectFromData)(projectData);
  if (!project) {
    console.error({ description: 'Project data is required to update project.', projectData: projectData });
    return { type: ADD_FILE_FAILURE, payload: { message: 'Project data is required to update project.' } };
  }
  return _defineProperty({}, _middleware.CALL_GROUT, {
    types: [UPDATE_PROJECT_REQUEST, UPDATE_PROJECT_SUCCESS, UPDATE_PROJECT_FAILURE],
    model: 'Project',
    modelData: project,
    method: 'update',
    methodData: projectData,
    schema: _middleware.Schemas.PROJECT
  });
}

var DELETE_PROJECT_REQUEST = exports.DELETE_PROJECT_REQUEST = 'DELETE_PROJECT_REQUEST';
var DELETE_PROJECT_SUCCESS = exports.DELETE_PROJECT_SUCCESS = 'DELETE_PROJECT_SUCCESS';
var DELETE_PROJECT_FAILURE = exports.DELETE_PROJECT_FAILURE = 'DELETE_PROJECT_FAILURE';

function deleteProject(projectData) {
  var project = (0, _index.getProjectFromData)(projectData);
  if (!project) {
    console.error({ description: 'Project data is required to delete project.', projectData: projectData });
    return { type: ADD_FILE_FAILURE, payload: { message: 'Project data is required to delete project.' } };
  }
  return _defineProperty({}, _middleware.CALL_GROUT, {
    types: [DELETE_PROJECT_REQUEST, DELETE_PROJECT_SUCCESS, DELETE_PROJECT_FAILURE],
    model: 'Project',
    modelData: project,
    method: 'remove',
    schema: _middleware.Schemas.PROJECT
  });
}