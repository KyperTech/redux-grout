'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DELETE_PROJECT_FAILURE = exports.DELETE_PROJECT_SUCCESS = exports.DELETE_PROJECT_REQUEST = exports.UPDATE_PROJECT_FAILURE = exports.UPDATE_PROJECT_SUCCESS = exports.UPDATE_PROJECT_REQUEST = exports.NEW_PROJECT_FAILURE = exports.NEW_PROJECT_SUCCESS = exports.NEW_PROJECT_REQUEST = exports.GET_PROJECTS_FAILURE = exports.GET_PROJECTS_SUCCESS = exports.GET_PROJECTS_REQUEST = undefined;
exports.getProjects = getProjects;
exports.newProject = newProject;
exports.updateProject = updateProject;
exports.deleteProject = deleteProject;

var _lodash = require('lodash');

var _middleware = require('../middleware');

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var GET_PROJECTS_REQUEST = exports.GET_PROJECTS_REQUEST = 'GET_PROJECTS_REQUEST';
var GET_PROJECTS_SUCCESS = exports.GET_PROJECTS_SUCCESS = 'GET_PROJECTS_SUCCESS';
var GET_PROJECTS_FAILURE = exports.GET_PROJECTS_FAILURE = 'GET_PROJECTS_FAILURE';

function getProjects() {
  console.log('getProjects action called.');
  return _defineProperty({}, _middleware.CALL_GROUT, {
    types: [GET_PROJECTS_REQUEST, GET_PROJECTS_SUCCESS, GET_PROJECTS_FAILURE],
    model: 'Projects',
    method: 'get',
    schema: _middleware.Schemas.PROJECT_ARRAY
  });
}

var NEW_PROJECT_REQUEST = exports.NEW_PROJECT_REQUEST = 'NEW_PROJECT_REQUEST';
var NEW_PROJECT_SUCCESS = exports.NEW_PROJECT_SUCCESS = 'NEW_PROJECT_SUCCESS';
var NEW_PROJECT_FAILURE = exports.NEW_PROJECT_FAILURE = 'NEW_PROJECT_FAILURE';

function newProject(projectData) {
  console.log('newProject action called.', projectData);
  return _defineProperty({}, _middleware.CALL_GROUT, {
    types: [NEW_PROJECT_REQUEST, NEW_PROJECT_SUCCESS, NEW_PROJECT_FAILURE],
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
  return _defineProperty({}, _middleware.CALL_GROUT, {
    types: [UPDATE_PROJECT_REQUEST, UPDATE_PROJECT_SUCCESS, UPDATE_PROJECT_FAILURE],
    model: 'Project',
    modelData: projectData.name,
    method: 'update',
    methodData: projectData,
    schema: _middleware.Schemas.PROJECT
  });
}

var DELETE_PROJECT_REQUEST = exports.DELETE_PROJECT_REQUEST = 'DELETE_PROJECT_REQUEST';
var DELETE_PROJECT_SUCCESS = exports.DELETE_PROJECT_SUCCESS = 'DELETE_PROJECT_SUCCESS';
var DELETE_PROJECT_FAILURE = exports.DELETE_PROJECT_FAILURE = 'DELETE_PROJECT_FAILURE';

function deleteProject(projectData) {
  var projectName = (0, _lodash.isObject)(projectData) && (0, _lodash.has)(projectData, 'name') ? projectData.name : projectData;
  return _defineProperty({}, _middleware.CALL_GROUT, {
    types: [DELETE_PROJECT_REQUEST, DELETE_PROJECT_SUCCESS, DELETE_PROJECT_FAILURE],
    model: 'Project',
    modelData: projectName,
    method: 'del',
    schema: _middleware.Schemas.PROJECT
  });
}