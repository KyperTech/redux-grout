'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.REMOVE_COLLABORATOR_FAILURE = exports.REMOVE_COLLABORATOR_SUCCESS = exports.REMOVE_COLLABORATOR_REQUEST = exports.ADD_COLLABORATOR_FAILURE = exports.ADD_COLLABORATOR_SUCCESS = exports.ADD_COLLABORATOR_REQUEST = exports.DELETE_PROJECT_FAILURE = exports.DELETE_PROJECT_SUCCESS = exports.DELETE_PROJECT_REQUEST = exports.UPDATE_PROJECT_FAILURE = exports.UPDATE_PROJECT_SUCCESS = exports.UPDATE_PROJECT_REQUEST = exports.ADD_PROJECT_FAILURE = exports.ADD_PROJECT_SUCCESS = exports.ADD_PROJECT_REQUEST = exports.GET_PROJECT_FAILURE = exports.GET_PROJECT_SUCCESS = exports.GET_PROJECT_REQUEST = exports.GET_PROJECTS_FAILURE = exports.GET_PROJECTS_SUCCESS = exports.GET_PROJECTS_REQUEST = undefined;
exports.getProjects = getProjects;
exports.getProject = getProject;
exports.addProject = addProject;
exports.updateProject = updateProject;
exports.deleteProject = deleteProject;
exports.addCollaborator = addCollaborator;
exports.removeCollaborator = removeCollaborator;

var _index = require('./index');

var _middleware = require('../middleware');

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var GET_PROJECTS_REQUEST = exports.GET_PROJECTS_REQUEST = 'GET_PROJECTS_REQUEST';
var GET_PROJECTS_SUCCESS = exports.GET_PROJECTS_SUCCESS = 'GET_PROJECTS_SUCCESS';
var GET_PROJECTS_FAILURE = exports.GET_PROJECTS_FAILURE = 'GET_PROJECTS_FAILURE';

function getProjects(username) {
  if (!username) {
    console.error({ description: 'Username is required to get projects.', username: username });
    return { type: GET_PROJECTS_FAILURE, payload: { message: 'Username is required to get projects.' } };
  }
  return _defineProperty({}, _middleware.CALL_GROUT, {
    types: [GET_PROJECTS_REQUEST, GET_PROJECTS_SUCCESS, GET_PROJECTS_FAILURE],
    model: 'Projects',
    modelData: username,
    method: 'get',
    schema: _middleware.Schemas.PROJECT_ARRAY
  });
}
var GET_PROJECT_REQUEST = exports.GET_PROJECT_REQUEST = 'GET_PROJECT_REQUEST';
var GET_PROJECT_SUCCESS = exports.GET_PROJECT_SUCCESS = 'GET_PROJECT_SUCCESS';
var GET_PROJECT_FAILURE = exports.GET_PROJECT_FAILURE = 'GET_PROJECT_FAILURE';

function getProject(project) {
  if (!project) {
    console.error({ description: 'Project data is required to get project.', projectData: projectData });
    return { type: ADD_FILE_FAILURE, payload: { message: 'Project data is required to get project.' } };
  }
  return _defineProperty({}, _middleware.CALL_GROUT, {
    types: [GET_PROJECT_REQUEST, GET_PROJECT_SUCCESS, GET_PROJECT_FAILURE],
    model: 'Project',
    modelData: [project.name, project.owner.username],
    method: 'get',
    schema: _middleware.Schemas.PROJECT
  });
}
var ADD_PROJECT_REQUEST = exports.ADD_PROJECT_REQUEST = 'ADD_PROJECT_REQUEST';
var ADD_PROJECT_SUCCESS = exports.ADD_PROJECT_SUCCESS = 'ADD_PROJECT_SUCCESS';
var ADD_PROJECT_FAILURE = exports.ADD_PROJECT_FAILURE = 'ADD_PROJECT_FAILURE';

function addProject(name, username) {
  return _defineProperty({}, _middleware.CALL_GROUT, {
    types: [ADD_PROJECT_REQUEST, ADD_PROJECT_SUCCESS, ADD_PROJECT_FAILURE],
    model: 'Projects',
    modelData: [username],
    method: 'add',
    methodData: [{ name: name }],
    schema: _middleware.Schemas.PROJECT
  });
}

var UPDATE_PROJECT_REQUEST = exports.UPDATE_PROJECT_REQUEST = 'UPDATE_PROJECT_REQUEST';
var UPDATE_PROJECT_SUCCESS = exports.UPDATE_PROJECT_SUCCESS = 'UPDATE_PROJECT_SUCCESS';
var UPDATE_PROJECT_FAILURE = exports.UPDATE_PROJECT_FAILURE = 'UPDATE_PROJECT_FAILURE';

function updateProject(project, data) {
  if (!project) {
    console.error({ description: 'Project data is required to update project.', projectData: projectData });
    return { type: UPDATE_PROJECT_FAILURE, payload: { message: 'Project data is required to update project.' } };
  }
  return _defineProperty({}, _middleware.CALL_GROUT, {
    types: [UPDATE_PROJECT_REQUEST, UPDATE_PROJECT_SUCCESS, UPDATE_PROJECT_FAILURE],
    model: 'Project',
    modelData: [project.name, project.owner.username],
    method: 'update',
    methodData: data,
    schema: _middleware.Schemas.PROJECT
  });
}

var DELETE_PROJECT_REQUEST = exports.DELETE_PROJECT_REQUEST = 'DELETE_PROJECT_REQUEST';
var DELETE_PROJECT_SUCCESS = exports.DELETE_PROJECT_SUCCESS = 'DELETE_PROJECT_SUCCESS';
var DELETE_PROJECT_FAILURE = exports.DELETE_PROJECT_FAILURE = 'DELETE_PROJECT_FAILURE';

function deleteProject(project) {
  if (!project) {
    console.error({ description: 'Project data is required to delete project.', projectData: projectData });
    return { type: DELETE_PROJECT_FAILURE, payload: { message: 'Project data is required to delete project.' } };
  }
  return _defineProperty({}, _middleware.CALL_GROUT, {
    types: [DELETE_PROJECT_REQUEST, DELETE_PROJECT_SUCCESS, DELETE_PROJECT_FAILURE],
    model: 'Project',
    modelData: [project.name, project.owner.username],
    method: 'remove',
    schema: _middleware.Schemas.PROJECT
  });
}

var ADD_COLLABORATOR_REQUEST = exports.ADD_COLLABORATOR_REQUEST = 'ADD_COLLABORATOR_REQUEST';
var ADD_COLLABORATOR_SUCCESS = exports.ADD_COLLABORATOR_SUCCESS = 'ADD_COLLABORATOR_SUCCESS';
var ADD_COLLABORATOR_FAILURE = exports.ADD_COLLABORATOR_FAILURE = 'ADD_COLLABORATOR_FAILURE';

function addCollaborator(project, user) {
  if (!user) {
    console.error({ description: 'Collaborator should have user specified.', user: user });
    return { type: ADD_COLLABORATOR_FAILURE, payload: { message: 'Collaborator should have user specified.' } };
  }
  return _defineProperty({}, _middleware.CALL_GROUT, {
    types: [ADD_COLLABORATOR_REQUEST, ADD_COLLABORATOR_SUCCESS, ADD_COLLABORATOR_FAILURE],
    model: 'Project',
    modelData: [project.name, project.owner.username],
    method: 'addCollaborator',
    methodData: [user],
    schema: _middleware.Schemas.PROJECT
  });
}

var REMOVE_COLLABORATOR_REQUEST = exports.REMOVE_COLLABORATOR_REQUEST = 'REMOVE_COLLABORATOR_REQUEST';
var REMOVE_COLLABORATOR_SUCCESS = exports.REMOVE_COLLABORATOR_SUCCESS = 'REMOVE_COLLABORATOR_SUCCESS';
var REMOVE_COLLABORATOR_FAILURE = exports.REMOVE_COLLABORATOR_FAILURE = 'REMOVE_COLLABORATOR_FAILURE';

function removeCollaborator(project, user) {
  if (!user) {
    console.error({ description: 'Collaborator should have user specified.', user: user });
    return { type: REMOVE_COLLABORATOR_FAILURE, payload: { message: 'Collaborator should have user specified.' } };
  }
  return _defineProperty({}, _middleware.CALL_GROUT, {
    types: [REMOVE_COLLABORATOR_REQUEST, REMOVE_COLLABORATOR_SUCCESS, REMOVE_COLLABORATOR_FAILURE],
    model: 'Project',
    modelData: [project.name, project.owner.username],
    method: 'removeCollaborator',
    methodData: [user],
    schema: _middleware.Schemas.PROJECT
  });
}